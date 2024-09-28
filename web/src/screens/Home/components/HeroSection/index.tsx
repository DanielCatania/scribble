import React from "react";
import Text from "@/patterns/Text";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <Image
        className="max-w-80 md:hidden"
        src="/short-notepad.svg"
        alt="Notepads"
        width={250}
        height={180}
      />
      <section className="flex justify-between flex-wrap">
        <Text.Display as="h1">Scribble is an enabler.</Text.Display>
        <Image
          src="/pen.svg"
          alt="drawing of a feather pen"
          width={100}
          height={100}
          className="order-3 max-w-20 md:-order-none md:max-w-none"
        />
        <Text.BodyOne as="h2" className="w-2/3 md:w-auto">
          Our mission is to facilitate your notes, help you organize your
          projects, goals...
        </Text.BodyOne>
      </section>
    </>
  );
}
