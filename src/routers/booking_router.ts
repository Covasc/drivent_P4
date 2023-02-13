import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { listBooking, bookingRoom, changeBooking } from "@/controllers/booking-controller";

const bookingRouter = Router();

bookingRouter
    .all("/*", authenticateToken)
    .get("", listBooking)
    .post("", bookingRoom)
    .put("/:bookingId", changeBooking);

export { bookingRouter };