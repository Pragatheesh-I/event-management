"use client";
import { useEffect, useState } from "react";

type DashboardProps = {
  organizerId?: string; // optional prop
};

export default function DashboardPage({ organizerId }: DashboardProps) {
  const [data, setData] = useState<any>(null);

  // fallback hardcoded ID for testing
  const effectiveOrganizerId =
    organizerId || "7193e61c-4ef9-4df2-a755-9535bf5c6e6e";

  useEffect(() => {
    fetch(`/api/dashboard?organizerId=${effectiveOrganizerId}`)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Error fetching dashboard data:", err));
  }, [effectiveOrganizerId]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Organizer Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-sm font-medium text-gray-500">Total Events</h2>
          <p className="text-2xl font-bold">{data.totalEvents}</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-sm font-medium text-gray-500">Upcoming Events</h2>
          <p className="text-2xl font-bold">{data.upcomingEvents}</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-sm font-medium text-gray-500">Total Registrations</h2>
          <p className="text-2xl font-bold">{data.totalRegistrations}</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-sm font-medium text-gray-500">Attendance Rate</h2>
          <p className="text-2xl font-bold">{data.attendanceRate.toFixed(2)}%</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-sm font-medium text-gray-500">Repeat Attendees</h2>
          <p className="text-2xl font-bold">{data.repeatAttendees}</p>
        </div>
      </div>
    </div>
  );
}
