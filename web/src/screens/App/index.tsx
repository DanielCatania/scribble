import React from "react";
import Logo from "@/components/Logo";
import Text from "@/patterns/Text";

export default function AppScreen() {
  return (
    <>
      <Text>App</Text>
      <Logo />
      <Logo long />
      <Logo targetHome />
      <div className="h-screen"></div>
      <Logo notPriority />
    </>
  );
}
