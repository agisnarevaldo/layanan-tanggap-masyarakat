import { createConnection } from "mysql2/promise";

// Fungsi untuk membuat koneksi dengan MySQL
async function connectToDatabase() {
    const connection = await createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
    return connection;
}

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Metode tidak diizinkan" });
    }

    try {
        // Koneksi ke database
        const connection = await connectToDatabase();

        // Menjalankan beberapa query
        const [totalRecords] = await connection.execute("SELECT COUNT(*) AS total_records FROM form_lapor");
        const [statusTrueCount] = await connection.execute("SELECT COUNT(*) AS true_records FROM form_lapor WHERE status = 1");
        const [statusFalseCount] = await connection.execute("SELECT COUNT(*) AS false_records FROM form_lapor WHERE status = 0");

        // Menutup koneksi
        await connection.end();

        // Mengirim respons dengan data yang diambil
        res.status(200).json({
            total_records: totalRecords[0].total_records,
            jumlah_status_true: statusTrueCount[0].true_records,
            jumlah_status_false: statusFalseCount[0].false_records
        });
    } catch (error) {
        console.error('Error menghubungkan ke database', error);
        res.status(500).json({ error: "Kesalahan internal server" });
    }
}
