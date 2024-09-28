import React from "react";
import Button from "@/patterns/Button";
import Text from "@/patterns/Text";
import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="flex justify-between items-center">
      <div>
        <div className="text-center md:w-1/2">
          <Text.HeadingTwo as="h2">
            Try the most diverse functions for your organization
          </Text.HeadingTwo>
          <Link href="/login">
            <Button>Use Scribble</Button>
          </Link>
        </div>
      </div>
      <Image
        className="hidden md:block"
        src="/notepad.svg"
        alt="Notepads"
        width={400}
        height={350}
      />
    </section>
  );
}
