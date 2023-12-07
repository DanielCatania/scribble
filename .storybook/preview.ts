import type { Preview, Decorator } from "@storybook/react";
import StoryProvider from "../src/stories/StoryProvider";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators: Decorator[] = [StoryProvider];

export default preview;
