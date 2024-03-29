import React, { useState } from "react";
import Box from "@/patterns/Box";
import Input from "@/patterns/Input";
import Image from "@/patterns/Image";
import Button from "@/patterns/Button";

interface PasswordInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}

export default function PasswordInput({ state, ...props }: PasswordInputProps) {
  const [value, setValue] = state;
  const [visible, setVisible] = useState(false);

  return (
    <Box inlineStyle={{ xs: `position: relative;` }}>
      <Input
        inlineStyle={{ xs: `padding-right: calc(1em + 20px);` }}
        type={visible ? "text" : "password"}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        {...props}
      />
      <Button
        width={{ xs: "20px" }}
        height={{ xs: "20px" }}
        inlineStyle={{
          xs: `
          position: absolute;
          right: 10px;
        `,
        }}
        onClick={() => setVisible(!visible)}
        type="button"
      >
        <Image
          src={`/img/password/${visible ? "view" : "hide"}.png`}
          width={{ xs: "20px" }}
        />
      </Button>
    </Box>
  );
}
