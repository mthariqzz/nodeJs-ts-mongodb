import { Request, Response } from "express";

// Sintaksis yang Benar untuk fungsi yang diexport
export const GetCustomers = async (req: Request, res: Response) => {
  const customers = [
    { name: "John Doe", email: "john.doe@example.com", phone: "+1234567890" },
    {
      name: "Joel Smith",
      email: "joel.smith@example.com",
      phone: "+0987654321",
    },
  ];

  // Menggunakan 'res' (Response dari Express)
  return res.status(200).json(customers);
};
