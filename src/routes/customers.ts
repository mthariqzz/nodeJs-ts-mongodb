import { GetCustomers } from "@/controllers/customers";
import express from "express";

const CustomerRouter = express.Router();

CustomerRouter.get("/customer", GetCustomers);

export default CustomerRouter;
