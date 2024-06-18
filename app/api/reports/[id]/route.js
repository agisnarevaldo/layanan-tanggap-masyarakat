import { createConnection } from "mysql2/promise";
import { NextResponse } from "next/server";

import fs from 'fs';
import path from "path";
import multer from 'multer';

const upload = multer({ dest: 'public/image/uploads/' });

export const config = {
    api: {
        bodyParser: false,
    },
};

function getIdFromUrl(url) {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 1];
}

export async function GET(req, { params }) {
    const connection = await createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
    if (req.method === "GET") {
        const { id } = params;
        const [rows] = await connection.execute(
            "SELECT * FROM form_lapor WHERE id = ?",
            [id]
        );

        // check if the user is exist
        if (rows.length === 0) {
            return NextResponse.json({ error: "User not found" });
        }

        // Close the connection
        await connection.end();
        return NextResponse.json(rows);
    } else {
        return NextResponse.json({ error: "Method not allowed" });
    }
}

export async function PUT(req, res) {
    if (req.method === "PUT") {
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

            const id = getIdFromUrl(req.url);
            if (!id) {
                await connection.end();
                return res.status(400).json({ error: "Missing id parameter" });
            }

            const dataLapor = req.body;
            const { category, waktu, nama, tanggal, lokasi, keterangan } = dataLapor;
            let imageUrl = req.body.bukti;

            if (req.file) {
                const imageFile = req.file;
                const imageFileName = `${Date.now()}-${imageFile.originalname}`;
                const imagePath = path.join('public', 'images', 'uploads', imageFileName);

                await fs.promises.rename(imageFile.path, imagePath);
                imageUrl = `/images/uploads/${imageFileName}`;
            }

            const [rows] = await connection.execute(
                "UPDATE form_lapor SET category=?, waktu=?, nama=?, tanggal=?, bukti=?, lokasi=?, keterangan=? WHERE id=?",
                [category ?? null, waktu ?? null, nama ?? null, tanggal ?? null, imageUrl ?? null, lokasi ?? null, keterangan ?? null, id]
            );

            if (rows.affectedRows === 0) {
                await connection.end();
                return res.status(500).json({ error: "Failed to update data" });
            }

            await connection.end();
            return res.status(200).json({ message: "Data updated successfully" });
        });
    } else {
        return res.status(405).json({ error: "Method not allowed" });
    }
}


export async function DELETE(req, { params }) {
    const connection = await createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
    if (req.method === "DELETE") {
        const { id } = params;
        const [rows] = await connection.execute(
            "DELETE FROM form_lapor WHERE id = ?",
            [id]
        );

        // check if the user is exist
        if (rows.affectedRows === 0) {
            return NextResponse.json({ error: "Failed to delete data" });
        }

        // Close the connection
        await connection.end();

        // response with the user data
        return NextResponse.json({ message: "Data deleted successfully" });
    } else {
        return NextResponse.json({ error: "Method not allowed" });
    }
}