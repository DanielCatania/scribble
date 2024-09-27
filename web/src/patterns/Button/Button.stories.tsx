import { Meta, StoryObj } from "@storybook/react";
import Button, { IButton } from ".";

export default {
  title: "patterns/Button",
  component: Button,
} as Meta<IButton>;

export const Default: StoryObj<IButton> = {
  args: {
    children: "Button",
  },
};
