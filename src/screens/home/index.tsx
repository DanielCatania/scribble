import React from "react";
import Header from "@/components/Header";
import { Main } from "./style";
import Text from "@/patterns/Text";
import Box from "@/patterns/Box";
import Image from "@/patterns/Image";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Box>
          <Text variant="display_01">Scribble is an enabler.</Text>
          <Image src="/img/pen.svg" width={"120px"} />
          <Text>
            Our mission is to facilitate your notes, help you organize your
            projects, goals...
          </Text>
        </Box>
      </Main>
    </>
  );
}
