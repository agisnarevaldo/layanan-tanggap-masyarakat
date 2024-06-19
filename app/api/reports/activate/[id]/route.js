import { createConnection } from "mysql2/promise";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
    const connection = await createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
    if (req.method === "PUT") {
        const { id } = params;
        const [rows] = await connection.execute(
            "UPDATE form_lapor SET status=true WHERE id=?",
            [id]
        );

        if (rows.affectedRows === 0) {
            return NextResponse.json({ error: "Failed to update status" });
        }

        await connection.end();
        return NextResponse.json({ message: "Status updated successfully" });
    } else {
        return NextResponse.json({ error: "Method not allowed" });
    }
}