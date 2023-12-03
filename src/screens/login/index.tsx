import React, { useState } from "react";

import Section from "@/patterns/Section";
import Text from "@/patterns/Text";
import Box from "@/patterns/Box";
import Input from "@/patterns/Input";

import PasswordInput from "@/patterns/Input/PasswordInput";
import Header from "@/components/Header";
import FullButton from "@/patterns/Button/FullButton";

export default function LoginScreen({ pageProps }) {
  const { content } = pageProps;
  const passwordState = useState("");
  const [password] = passwordState;
  const [email, setEmail] = useState("");

  return (
    <>
      <Header />
      <Section
        as="main"
        inlineStyle={{ xs: `margin: 0; justify-content: center;` }}
      >
        <Box inlineStyle={{ xs: `flex-direction: column; gap: 2em;` }}>
          <Text variant="display_01" as="h1">
            {content.pageName}
          </Text>
          <Box
            as="form"
            inlineStyle={{
              xs: `
              flex-direction: column; 
              gap: 2em;
            `,
            }}
          >
            <Input
              type="email"
              placeholder={content.fields.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              state={passwordState}
              placeholder={content.fields.password}
            />
            <FullButton
              onClick={(e) => {
                e.preventDefault();

                console.log({
                  email,
                  password,
                });
              }}
              type="submit"
              size="large"
            >
              {content.pageName}
            </FullButton>
          </Box>
        </Box>
      </Section>
    </>
  );
}
