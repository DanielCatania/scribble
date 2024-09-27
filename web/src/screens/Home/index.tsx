import Button from "@/patterns/Button";
import React from "react";

export default function HomeScreen() {
  return (
    <>
      <Button onClick={() => alert("Click")}>Click</Button>
      <Button className="bg-s-100 text-n-250">Click</Button>
    </>
  );
}
