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

type UpdateParams = Omit <Booking, "createdAt" | "updatedAt">

async function upsertBooking({id, roomId, userId}: UpdateParams) {
    return prisma.booking.upsert({
        where: {
            id
        },
        create: {
            roomId,
            userId
        },
        update: {
            roomId
        }
    })
}

const bookingRepository = {
    findByUserId,
    create,
    findByRoomId,
    upsertBooking
}

export default bookingRepository;

