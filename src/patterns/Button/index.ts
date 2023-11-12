import styled from "styled-components";
import { color } from "@/type";

export interface ButtonProps {
  background?: color;
  color?: color;
}

const Button = styled.button.withConfig({
  shouldForwardProp: (props) => !["background", "color"].includes(props),
})<ButtonProps>`
  width: 80px;
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
    width: 120px;
    height: 60px;

    font-size: ${({ theme }) => theme.typography.variants.button.md.size};
    font-weight: ${({ theme }) => theme.typography.variants.button.md.weight};
  }
`;

export const LargeButton = styled(Button)`
  width: 120px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints["md"]}) {
    width: 180px;
  }
`;

export default Button;
