import { createConnection } from "mysql2/promise";

export default async function handler(req, res) {
    if (req.method === "DELETE") {
        const connection = await createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        const id = req.body.id;

        const [rows] = await connection.execute(
            "DELETE FROM form_lapor WHERE id = ?",
            [id]
        );

        // check if the user is exist
        if (rows.affectedRows === 0) {
            return res.status(500).json({ error: "Failed to delete data" });
        }

        // Close the connection
        await connection.end();

        // response with the user data
        res.status(200).json({ message: "Data deleted successfully" });
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
