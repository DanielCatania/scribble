import styled from "styled-components";
import { breakpoints } from "@/type";

interface BoxProps {
  inlineStyle?: breakpoints<string>;
}

const Box = styled.div.withConfig({
  shouldForwardProp: (props) => !["inlineStyle"].includes(props),
})<BoxProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ inlineStyle }) => inlineStyle?.xs}
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["md"]}) {
    ${({ inlineStyle }) => inlineStyle?.md}
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["lg"]}) {
    ${({ inlineStyle }) => inlineStyle?.lg}
  }
`;

export default Box;
