import { db } from "@/db/db";
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

export const GetCustomersById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
    },
    {
      id: 2,
      name: "Joel Smith",
      email: "joel.smith@example.com",
      phone: "+0987654321",
    },
  ];

  const customer = customers.find((customers) => customers.id === parseInt(id));
  return res.status(200).json(customer);
};

export const CreateCustomer = async (req: Request, res: Response) => {
  const { name, phone, email } = req.body;

  try {
    const newCustomer = await db.customers.create({
      data: { name, email, phone },
    });
    return res.status(210).json(newCustomer);
  } catch (error) {
    console.log(error);
  }
};
