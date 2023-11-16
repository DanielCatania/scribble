import styled from "styled-components";
import { breakpoints, color } from "@/type";

export interface ButtonProps {
  background?: color;
  color?: color;
  size?: "default" | "large";
  inlineStyle?: breakpoints<string>;
}

const Button = styled.button.withConfig({
  shouldForwardProp: (props) =>
    !["background", "color", "size", "inlineStyle"].includes(props),
})<ButtonProps>`
  width: ${({ size = "default" }) => (size === "default" ? "80px" : "120px")};
  height: 40px;
  border-radius: 15px;

  cursor: pointer;

  font-size: ${({ theme }) => theme.typography.variants.button.xs.size};
  font-weight: ${({ theme }) => theme.typography.variants.button.xs.weight};
  font-family: ${({ theme }) => theme.typography.variants.button.family};

  color: ${({ theme, color = { palette: "neutral", tone: "050" } }) =>
    theme.colors[color.palette][color.tone]};
  background-color: ${({
    theme,
    background = { palette: "primary", tone: "100" },
  }) => theme.colors[background.palette][background.tone]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints["md"]}) {
    width: ${({ size = "default" }) =>
      size === "default" ? "120px" : "180px"};
    height: 60px;

    font-size: ${({ theme }) => theme.typography.variants.button.md.size};
    font-weight: ${({ theme }) => theme.typography.variants.button.md.weight};
  }

  ${({ inlineStyle }) => inlineStyle?.xs}
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["md"]}) {
    ${({ inlineStyle }) => inlineStyle?.md}
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["lg"]}) {
    ${({ inlineStyle }) => inlineStyle?.lg}
  }
`;

export default Button;
