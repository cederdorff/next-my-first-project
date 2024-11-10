"use client"; // This directive ensures the component runs on the client-side.

import Link from "next/link";
import { usePathname } from "next/navigation"; // Importing the usePathname hook

export default function Nav() {
  const pathname = usePathname(); // Gets the current path of the URL

  return (
    <nav>
      {/* Conditionally adds the "active" class if the current path matches the link's path */}
      <Link href="/" className={pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link href="/posts" className={pathname === "/posts" ? "active" : ""}>
        Posts
      </Link>
      <Link href="/users" className={pathname === "/users" ? "active" : ""}>
        Users
      </Link>
    </nav>
  );
}
