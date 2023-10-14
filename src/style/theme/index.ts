const theme = {
  colors: {
    neutral: {
      "050": "#f5f5f5",
      "100": "#ADADAD",
      "150": "#757575",
      "200": "#4F4F4F",
      "250": "#1D1D1D",
    },
    primary: {
      "050": "#FF6666",
      "100": "#E05A5A",
      "150": "#C75050",
      "200": "#A14040",
      "250": "#612727",
    },
    secondary: {
      "050": "#4C76E0",
      "100": "#3D5EB3",
      "150": "#334F94",
      "200": "#2A417A",
      "250": "#1D2C54",
    },
  },
  breakpoints: {
    md: "744px",
    lg: "1024px",
  },
  typography: {
    variants: {
      display_01: {
        family: "'Special Elite', sans-serif",
        xs: {
          size: "48px",
          weight: "400",
        },
        md: {
          size: "64px",
          weight: "400",
        },
        lg: {
          size: "96px",
          weight: "400",
        },
      },
      heading_01: {
        family: "'Open sans', sans-serif",
        xs: {
          weight: "700",
          size: "32px",
        },
        md: {
          weight: "700",
          size: "36px",
        },
      },
      heading_02: {
        family: "'Special Elite', sans-serif",
        xs: {
          weight: "400",
          size: "24px",
        },
        md: {
          weight: "400",
          size: "32px",
        },
      },
      body_01: {
        family: "'Open sans', sans-serif",
        xs: {
          weight: "400",
          size: "20px",
        },
        md: {
          weight: "400",
          size: "24px",
        },
        lg: {
          weight: "400",
          size: "32px",
        },
      },
      body_02: {
        family: "'Open sans', sans-serif",
        xs: {
          weight: "300",
          size: "16px",
        },
        md: {
          weight: "300",
          size: "20px",
        },
        lg: {
          weight: "300",
          size: "24px",
        },
      },
    },
  },
};

export default theme;
