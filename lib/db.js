import mysql from 'mysql2';
// import { config } from 'dotenv';

// // Load variabel lingkungan
// config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

export const query = (query, values) => new Promise((resolve, reject) => {
  pool.execute(query, values, (error, results) => {
    if (error) return reject(error);
    resolve(results);
  });
});
