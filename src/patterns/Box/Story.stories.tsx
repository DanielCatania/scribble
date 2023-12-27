import Box from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Patterns/Box",
  component: Box,
  args: {
    children: (
      <>
        <Box
          inlineStyle={{
            xs: "width: 50px; height: 50px; color: white; background-color: blue; justify-content: center;",
          }}
        >
          1
        </Box>
        <Box
          inlineStyle={{
            xs: "width: 50px; height: 50px; color: white; background-color: blue; justify-content: center;",
          }}
        >
          2
        </Box>
        <Box
          inlineStyle={{
            xs: "width: 50px; height: 50px; color: white; background-color: blue; justify-content: center;",
          }}
        >
          3
        </Box>
      </>
    ),
  },
} satisfies Meta<typeof Box>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
