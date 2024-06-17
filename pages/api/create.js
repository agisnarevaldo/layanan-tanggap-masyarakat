import { createConnection } from "mysql2/promise";
import fs from 'fs';
import path from "path";
import multer from 'multer';

const upload = multer({ dest: 'public/images/uploads/' });

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    upload.single('bukti')(req, res, async function (err) {
        if (err) {
            return res.status(500).json({ error: "File upload error" });
        }

        const connection = await createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        if (req.method === "POST") {
            const dataLapor = req.body;
            const { category, waktu, nama, tanggal, lokasi, keterangan } = dataLapor;
            const imageFile = req.file;
            const imageFileName = `${Date.now()}-${imageFile.originalname}`;
            const imagePath = path.join('public', 'images', 'uploads', imageFileName);

            // Save the image file to the public/image/uploads folder
            await fs.promises.rename(imageFile.path, imagePath);

            const imageUrl = `/images/uploads/${imageFileName}`;

            const [rows] = await connection.execute(
                "INSERT INTO form_lapor (category, waktu, nama, tanggal, bukti, lokasi, keterangan) VALUES (?,?,?,?,?,?,?)",
                [category, waktu, nama, tanggal, imageUrl, lokasi, keterangan]
            );

            // check if the user is exist
            if (rows.affectedRows === 0) {
                return res.status(500).json({ error: "Failed to insert data" });
            }

            // Close the connection
            await connection.end();

            // response with the user data
            res.status(200).json({ message: "Data inserted successfully" });
        } else {
            res.status(405).json({ error: "Method not allowed" });
        }
    });
}
