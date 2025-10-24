import {
  CreateCustomer,
  GetCustomers,
  GetCustomersById,
} from "@/controllers/customers";
import express from "express";

const CustomerRouter = express.Router();

CustomerRouter.get("/customers", GetCustomers);
CustomerRouter.get("/customer/:id", GetCustomersById);
CustomerRouter.post("/customer", CreateCustomer);

export default CustomerRouter;
