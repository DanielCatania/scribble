import { Meta, StoryObj } from "@storybook/react";
import Text from ".";
import { IText } from "./type";

export default {
  title: "patterns/Text",
  component: Text,
  args: {
    children: "Text Pattern",
  },
} as Meta<IText>;

export const Default: StoryObj<IText> = {};
