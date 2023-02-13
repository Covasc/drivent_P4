import { notFoundError } from "@/errors";
import enrollmentRepository from "@/repositories/enrollment-repository";
import ticketRepository from "@/repositories/ticket-repository";
import bookingRepository from "@/repositories/booking-repository";

async function getBooking (userId: number) {
    const booking = await bookingRepository.findByUserId(userId);
    if (!booking) {
        throw notFoundError();
    }

    return booking;
}

const bookingService = {
    getBooking
}

export default bookingService;