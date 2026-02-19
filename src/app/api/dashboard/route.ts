import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // Example: organizerId from query string or session
  const { searchParams } = new URL(req.url);
  const organizerId = searchParams.get("organizerId")!;

  const totalEvents = await prisma.event.count({
    where: { createdBy: organizerId }
  });

  const upcomingEvents = await prisma.event.count({
    where: {
      createdBy: organizerId,
      createdAt: { gt: new Date() }
    }
  });

  const totalRegistrations = await prisma.registration.count({
    where: { event: { createdBy: organizerId } }
  });

  const presentCount = await prisma.registration.count({
    where: {
      event: { createdBy: organizerId },
      attendanceStatus: "PRESENT"
    }
  });
  const attendanceRate = totalRegistrations > 0
    ? (presentCount / totalRegistrations) * 100
    : 0;

  const repeatAttendees = await prisma.registration.groupBy({
    by: ["userId"],
    _count: { _all: true },
    where: { event: { createdBy: organizerId } }
  });

  const repeatAttendeesCount = repeatAttendees.filter(
    (attendee) => attendee._count._all > 1
  ).length;

  return NextResponse.json({
    totalEvents,
    upcomingEvents,
    totalRegistrations,
    attendanceRate,
    repeatAttendees: repeatAttendeesCount,
  });
}
