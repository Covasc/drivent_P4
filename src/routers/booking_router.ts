import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { listBooking } from "@/controllers/booking-controller";

const bookingRouter = Router();

bookingRouter
    .all("/*", authenticateToken)
    .get("", listBooking)
    .post("", );

export { bookingRouter };