import { Meta, StoryObj } from "@storybook/react";
import Text from ".";
import { IText } from "./type";

export default {
  title: "patterns/Text",
  component: Text.Display,
  args: {
    children: "Text Display",
  },
} as Meta<IText>;

export const Display: StoryObj<IText> = {};
