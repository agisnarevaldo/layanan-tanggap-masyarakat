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

export async function PUT(req, { params }) {
    const connection = await createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
    if (req.method === "PUT") {
        const { id } = params;
        const dataLapor = await req.json();
        // const dataLapor = req.body;
        const [rows] = await connection.execute(
            "UPDATE form_lapor SET category=?, Waktu=?, nama=?, tanggal=?, bukti=?, lokasi=?, keterangan=? WHERE id=?",
            [dataLapor.category, dataLapor.Waktu, dataLapor.nama, dataLapor.tanggal, dataLapor.bukti, dataLapor.lokasi, dataLapor.keterangan, id]
        );

        // check if the user is exist
        if (rows.affectedRows === 0) {
            return NextResponse.json({ error: "Failed to update data" });
        }

        // Close the connection
        await connection.end();

        // response with the user data
        return NextResponse.json({ message: "Data updated successfully" });
    } else {
        return NextResponse.json({ error: "Method not allowed" });
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