import styled from "styled-components";
import { color } from "@/type";

interface TextProps {
  variant?: "display_01" | "heading_01" | "heading_02" | "body_01" | "body_02";
  color?: color;
}

const Text = styled.p.withConfig({
  shouldForwardProp: (props) => !["variant", "color"].includes(props),
})<TextProps>`
  color: ${({ theme, color = { palette: "neutral", tone: "250" } }) =>
    theme.colors[color.palette][color.tone]};

  font-family: ${({ theme, variant = "body_01" }) =>
    theme.typography.variants[variant].family};

  font-size: ${({ theme, variant = "body_01" }) =>
    theme.typography.variants[variant]["xs"].size};
  font-weight: ${({ theme, variant = "body_01" }) =>
    theme.typography.variants[variant]["xs"].weight};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints["md"]}) {
    font-size: ${({ theme, variant = "body_01" }) =>
      theme.typography.variants[variant]["md"]?.size};
    font-weight: ${({ theme, variant = "body_01" }) =>
      theme.typography.variants[variant]["md"]?.weight};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints["lg"]}) {
    font-size: ${({ theme, variant = "body_01" }) =>
      theme.typography.variants[variant]["lg"]?.size};
    font-weight: ${({ theme, variant = "body_01" }) =>
      theme.typography.variants[variant]["lg"]?.weight};
  }
`;

export default Text;
