import React from "react";
import Logo from "@/components/Logo";
import Button from "@/patterns/Button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-3 py-5 md:px-8 md:py-1">
      <Logo long targetHome />
      <nav className="flex items-center gap-1 md:gap-8">
        <Link href="/login">
          <Button className="bg-s-100">Login</Button>
        </Link>
        <Link href="/signUp">
          <Button>Sign Up</Button>
        </Link>
      </nav>
    </header>
  );
}
