import React from "react";
import Header from "@/components/Header";
import Text from "@/patterns/Text";
import Box from "@/patterns/Box";
import Image from "@/patterns/Image";

export default function Home() {
  return (
    <>
      <Header />
      <Box as="main">
        <Box>
          <Text
            variant="display_01"
            as="h1"
            inlineStyle={{ md: `max-width: calc(100% - 150px);` }}
          >
            Scribble is an enabler.
          </Text>
          <Image
            src="/img/pen.svg"
            width={{ xs: "60px", md: "80px", lg: "120px" }}
            inlineStyle={{ xs: `order: 2;`, md: "order: 0;" }}
          />
          <Text inlineStyle={{ xs: `max-width: 70%;`, md: `max-width: none;` }}>
            Our mission is to facilitate your notes, help you organize your
            projects, goals...
          </Text>
        </Box>
      </Box>
    </>
  );
}
