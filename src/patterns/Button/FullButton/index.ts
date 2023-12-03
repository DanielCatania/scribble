import styled from "styled-components";
import Button, { ButtonProps } from "..";

export interface FullButtonProps extends ButtonProps {
  size?: "default" | "large";
}

const FullButton = styled(Button).withConfig({
  shouldForwardProp: (props) =>
    !["background", "color", "size", "width", "height", "inlineStyle"].includes(
      props
    ),
})<FullButtonProps>`
  width: ${({ width, size = "default" }) =>
    width?.xs || (size === "default" ? "70px" : "120px")};
  height: ${({ height }) => height?.xs || "40px"};
  border-radius: 15px;

  background-color: ${({
    theme,
    background = { palette: "primary", tone: "100" },
  }) =>
    background !== "transparent"
      ? theme.colors[background.palette][background.tone]
      : background};

  ${({ inlineStyle }) => inlineStyle?.xs}
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["md"]}) {
    width: ${({ width, size = "default" }) =>
      width?.xs || (size === "default" ? "100px" : "150px")};
    height: ${({ height }) => height?.xs || "50px"};

    ${({ inlineStyle }) => inlineStyle?.md}
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["lg"]}) {
    ${({ inlineStyle }) => inlineStyle?.lg}
  }
`;

export default FullButton;
