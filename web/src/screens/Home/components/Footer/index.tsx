import React from "react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="flex items-center px-8 py-1 bg-n-100 gap-4 mt-4">
      <div className="w-8">
        <Logo targetHome />
      </div>
      <p className="text-sm">© Daniel Catania</p>
    </footer>
  );
}
