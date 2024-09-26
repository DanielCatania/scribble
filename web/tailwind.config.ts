import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        special: ["Special Elite", "Open Sans", "sans-serif"],
        default: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        // display:
        "d-xs": "48px",
        "d-md": "64px",
        "d-lg": "72px",
        // heading 1:
        "h01-xs": "32px",
        "h01-md": "36px",
        "h01-lg": "36px",
        // heading 2:
        "h02-xs": "24px",
        "h02-md": "32px",
        "h02-lg": "32px",
        // body 1:
        "b01-xs": "20px",
        "b01-md": "24px",
        "b01-lg": "32px",
        // body 2:
        "b02-xs": "16px",
        "b02-md": "20px",
        "b02-lg": "24px",
      },
      colors: {
        "p-050": "#FF6666",
        "p-100": "#E05A5A",
        "p-150": "#C75050",
        "p-200": "#A14040",
        "p-250": "#612727",
        "s-050": "#4C76E0",
        "s-100": "#3D5EB3",
        "s-150": "#334F94",
        "s-200": "#2A417A",
        "s-250": "#1D2C54",
        "n-050": "#F5F5F5",
        "n-100": "#ADADAD",
        "n-150": "#757575",
        "n-200": "#4F4F4F",
        "n-250": "#1D1D1D",
      },
    },
  },
  plugins: [],
};
export default config;
