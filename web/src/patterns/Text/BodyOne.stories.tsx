import { Meta, StoryObj } from "@storybook/react";
import Text from ".";
import { IText } from "./type";

export default {
  title: "patterns/Text",
  component: Text.BodyOne,
  args: {
    children: "Text Body One",
  },
} as Meta<IText>;

export const BodyOne: StoryObj<IText> = {};
