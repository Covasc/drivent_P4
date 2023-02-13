import { prisma } from "@/config";
import { Booking } from "@prisma/client";

async function findByUserId ( userId: number ) {
    return prisma.booking.findFirst({
        where: {
            userId
        },
        include: {
            Room: true,
        }
    })
}

async function create ({ roomId, userId }: CreateParams): Promise<Booking> {
    return prisma.booking.create({
        data: {
            roomId, 
            userId,
        }
    })
}

type CreateParams = Omit < Booking, "id" | "createdAt" | "updatedAt">

async function findByRoomId(roomId: number) {
    return prisma.booking.findMany({
        where: {
            roomId,
        },
        include: {
            Room: true,
        }
    });
}

const bookingRepository = {
    findByUserId,
    create,
    findByRoomId
}

export default bookingRepository;

