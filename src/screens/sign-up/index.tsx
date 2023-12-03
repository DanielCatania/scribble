import React, { useState } from "react";

import Header from "@/components/Header";
import Section from "@/patterns/Section";
import Box from "@/patterns/Box";
import Text from "@/patterns/Text";
import Input from "@/patterns/Input";
import PasswordInput from "@/patterns/Input/PasswordInput";
import FullButton from "@/patterns/Button/FullButton";

export default function SignUpScreen({ pageProps }) {
  const { content } = pageProps;

  const passwordState = useState("");
  const confirmState = useState("");
  const [password] = passwordState;
  const [confirm] = confirmState;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <Header />
      <Section
        as="main"
        inlineStyle={{ xs: `margin: 0; justify-content: center;` }}
      >
        <Box inlineStyle={{ xs: `flex-direction: column; gap: 2em;` }}>
          <Text
            variant="display_01"
            as="h1"
            inlineStyle={{ xs: `text-align: center;` }}
          >
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
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={content.fields.name}
            />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.fields.email}
            />
            <PasswordInput
              state={passwordState}
              placeholder={content.fields.password}
            />
            <PasswordInput
              state={confirmState}
              placeholder={content.fields.confirm}
            />
            <FullButton
              onClick={(e) => {
                e.preventDefault();

                console.log({
                  name,
                  email,
                  password,
                  confirm,
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
