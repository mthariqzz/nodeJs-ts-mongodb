import express, { Request, Response } from "express"; // Mengimpor framework Express

require("dotenv").config(); // Memuat variabel lingkungan dari file .env ke process.env
const cors = require("cors"); // Mengimpor middleware CORS
const app = express(); // Membuat instance aplikasi Express

app.use(cors()); // Mengaktifkan CORS (Cross-Origin Resource Sharing) untuk semua rute

const PORT = process.env.PORT || 8000; // Mengatur port server dari variabel lingkungan atau default ke 8000

app.use(express.json()); // Mengurai permintaan JSON yang masuk dan meletakkan data di req.body

app.listen(PORT, () => {
  // Menjalankan server dan mendengarkan pada port yang telah ditentukan
  console.log(`Server is running on http://localhost:${PORT}`); // Menampilkan pesan bahwa server berjalan
});

app.get("/customers", (req: Request, res: Response) => {
  const customers = [
    { name: "John Doe", email: "john.doe@example.com", phone: "+1234567890" },
    {
      name: "Joel Smith",
      email: "joel.smith@example.com",
      phone: "+0987654321",
    },
  ];

  return res.status(200).json(customers);
});
