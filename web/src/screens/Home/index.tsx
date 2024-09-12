import Text from "@/patterns/Text";
import React from "react";

export default function HomeScreen() {
  return (
    <>
      <Text
        as="h1"
        styleOptions={{
          fontFamily: "display",
        }}
      >
        Scribble
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore
        porro sint ad exercitationem obcaecati ab animi temporibus facilis
        iusto, sed quae repellendus tempora distinctio vel amet libero,
        asperiores quisquam!
      </Text>
    </>
  );
}
