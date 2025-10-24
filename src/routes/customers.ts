import { GetCustomers, GetCustomersById } from "@/controllers/customers";
import express from "express";

const CustomerRouter = express.Router();

CustomerRouter.get("/customers", GetCustomers);
CustomerRouter.get("/customer/:id", GetCustomersById);

export default CustomerRouter;
