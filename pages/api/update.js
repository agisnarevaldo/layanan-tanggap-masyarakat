import { createConnection } from "mysql2/promise";

export default async function handler(req, res) {
    const connection = await createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
    if (req.method === "PUT") {
        const dataLapor = req.body;
        const { id, category, waktu, nama, tanggal, bukti, lokasi, keterangan } = dataLapor;
        console.log();
        const [rows] = await connection.execute(
            "UPDATE form_lapor SET category=?, Waktu=?, nama=?, tanggal=?, bukti=?, lokasi=?, keterangan=? WHERE id=?",
            [category, waktu, nama, tanggal, bukti, lokasi, keterangan, id]
        );

        // check if the user is exist
        if (rows.affectedRows === 0) {
            return res.status(500).json({ error: "Failed to update data" });
        }

        // Close the connection
        await connection.end();

        // response with the user data
        res.status(200).json({ message: "Data updated successfully" });
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}