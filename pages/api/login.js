import { query } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const results = await query(
        'SELECT * FROM form_login WHERE username = ? AND password = ?',
        [username, password]
      );

      if (results.length > 0) {
        res.status(200).json({ message: "Login berhasil!" });
      } else {
        res.status(401).json({ message: "Username atau password salah" });
      }
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
