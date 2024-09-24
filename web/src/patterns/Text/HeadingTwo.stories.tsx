import { Meta, StoryObj } from "@storybook/react";
import Text from ".";
import { IText } from "./type";

export default {
  title: "patterns/Text",
  component: Text.HeadingTwo,
  args: {
    children: "Text Heading Two",
  },
} as Meta<IText>;

export const HeadingTwo: StoryObj<IText> = {};
