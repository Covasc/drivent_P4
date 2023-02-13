import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { listBooking, bookingRoom } from "@/controllers/booking-controller";

const bookingRouter = Router();

bookingRouter
    .all("/*", authenticateToken)
    .get("", listBooking)
    .post("", bookingRoom);

export { bookingRouter };