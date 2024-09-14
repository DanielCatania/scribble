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
    },
  },
  plugins: [],
};
export default config;
