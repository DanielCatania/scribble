import styled from "styled-components";
import { PatternProps, breakpoints, color } from "@/type";

export interface ButtonProps extends PatternProps {
  background?: color | "transparent";
  color?: color;
  width?: breakpoints<string>;
  height?: breakpoints<string>;
}

const Button = styled.button.withConfig({
  shouldForwardProp: (props) =>
    !["background", "color", "width", "height", "inlineStyle"].includes(props),
})<ButtonProps>`
  width: ${({ width }) => width?.xs};
  height: ${({ height }) => height?.xs};

  cursor: pointer;

  font-size: ${({ theme }) => theme.typography.variants.button.xs.size};
  font-weight: ${({ theme }) => theme.typography.variants.button.xs.weight};
  font-family: ${({ theme }) => theme.typography.variants.button.family};

  color: ${({ theme, color = { palette: "neutral", tone: "050" } }) =>
    theme.colors[color.palette][color.tone]};
  background-color: ${({ theme, background = "transparent" }) =>
    background !== "transparent"
      ? theme.colors[background.palette][background.tone]
      : background};

  ${({ inlineStyle }) => inlineStyle?.xs}
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["md"]}) {
    width: ${({ width }) => width?.md};
    height: ${({ height }) => height?.md};

    font-size: ${({ theme }) => theme.typography.variants.button.md.size};
    font-weight: ${({ theme }) => theme.typography.variants.button.md.weight};

    ${({ inlineStyle }) => inlineStyle?.md}
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["lg"]}) {
    height: ${({ height }) => height?.lg};
    width: ${({ width }) => width?.lg};

    ${({ inlineStyle }) => inlineStyle?.lg}
  }
`;

export default Button;
