import styled from "styled-components";
import { PatternProps, color } from "@/type";

interface TextProps extends PatternProps {
  variant?: "display_01" | "heading_01" | "heading_02" | "body_01" | "body_02";
  color?: color;
}

const Text = styled.p.withConfig({
  shouldForwardProp: (props) =>
    !["variant", "color", "inlineStyle"].includes(props),
})<TextProps>`
  color: ${({ theme, color = { palette: "neutral", tone: "250" } }) =>
    theme.colors[color.palette][color.tone]};

  font-family: ${({ theme, variant = "body_01" }) =>
    theme.typography.variants[variant].family};

  font-size: ${({ theme, variant = "body_01" }) =>
    theme.typography.variants[variant]["xs"].size};
  font-weight: ${({ theme, variant = "body_01" }) =>
    theme.typography.variants[variant]["xs"].weight};

  ${({ inlineStyle }) => inlineStyle?.xs}
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["md"]}) {
    font-size: ${({ theme, variant = "body_01" }) =>
      theme.typography.variants[variant]["md"]?.size};
    font-weight: ${({ theme, variant = "body_01" }) =>
      theme.typography.variants[variant]["md"]?.weight};

    ${({ inlineStyle }) => inlineStyle?.md}
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["lg"]}) {
    font-size: ${({ theme, variant = "body_01" }) =>
      theme.typography.variants[variant]["lg"]?.size};
    font-weight: ${({ theme, variant = "body_01" }) =>
      theme.typography.variants[variant]["lg"]?.weight};

    ${({ inlineStyle }) => inlineStyle?.lg}
  }
`;

export default Text;
