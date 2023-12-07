import { ThemeProvider } from "styled-components";
import theme from "@/style/theme";
import GlobalStyle from "@/style/GlobalStyle";

export default function StoryProvider(Story) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  );
}
