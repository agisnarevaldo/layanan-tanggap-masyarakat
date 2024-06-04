import { createConnection } from "mysql2/promise";
import { NextResponse } from "next/server";

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