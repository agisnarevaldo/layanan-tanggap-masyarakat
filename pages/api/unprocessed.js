import { createConnection } from "mysql2/promise";

// Function to create a connection with MySQL
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
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        // connect to the database
        const connection = await connectToDatabase();

        // Execute query to retrieve data from the "users" table
        const [rows] = await connection.execute("SELECT * FROM form_lapor WHERE status = false");

        // check if the user is exist
        if (rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        // Close the connection
        await connection.end();

        // response with the user data
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error connection to the database', error);
        res.status(500).json({ error: "Internal server error" });
    }
}