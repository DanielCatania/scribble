import { Meta, StoryObj } from "@storybook/react";
import Logo, { ILogo } from ".";

export default {
  title: "components/Logo",
  component: Logo,
  args: {
    long: false,
    targetHome: false,
    notPriority: false,
  },
  argTypes: {
    long: {
      description: "Define whether the logo will be long or short.",
    },
    targetHome: {
      description:
        "Defines that the link destination will not be '/app' but rather '/'.",
    },
    notPriority: {
      description:
        "defines that loading images should be a priority. When below the fold, example: in a footer, the Not Priority property should be set to true.",
    },
  },
} as Meta<ILogo>;

export const Default: StoryObj<ILogo> = {};

export const Long: StoryObj<ILogo> = {
  args: {
    long: true,
  },
};

export const TargetHome: StoryObj<ILogo> = {
  args: {
    targetHome: true,
  },
};

export const NotPriority: StoryObj<ILogo> = {
  args: {
    notPriority: true,
  },
  decorators: [
    (Story) => (
      <>
        <div className="h-screen bg-p-050">
          defines that loading images should be a priority. When below the fold,
          example: in a footer, the Not Priority property should be set to true.
          <br />
          Component below:
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
        </div>
        <footer>{Story()}</footer>
      </>
    ),
  ],
};
