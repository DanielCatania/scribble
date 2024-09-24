import { Meta, StoryObj } from "@storybook/react";
import Text from ".";
import { IText } from "./type";

export default {
  title: "patterns/Text",
  component: Text.HeadingOne,
  args: {
    children: "Text Heading One",
  },
} as Meta<IText>;

export const HeadingOne: StoryObj<IText> = {};
