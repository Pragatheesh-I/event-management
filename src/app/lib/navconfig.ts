export type Role = "organiser" | "user";
export interface NavLink {
  label: string;
  href: string;
}
export const navLinks: Record<Role, NavLink[]> = {
  user: [
    {
      label: "Explore Events",
      href: "/explore-events",
    },
    {
      label: "Registered Events",
      href: "/registered-events",
    },
  ],

  organiser: [
    {
      label: "Create Event",
      href: "/create-event",
    },
    {
      label: "Created Events",
      href: "/created-events",
    },
  ],
};