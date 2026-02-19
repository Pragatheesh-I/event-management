"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, Role } from "../lib/navconfig";

export default function Navbar({ role }: { role: Role }) {
  // const pathname = usePathname();
  const links = navLinks[role];
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">
          MyApp
        </Link>

        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="hover:text-orange-600">
            Home
          </Link>

          {links.map(({ label, href }) => (
            <Link className="hover:text-orange-600" key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
          Login
        </button>
      </div>
    </nav>
  );
}
