import { breakpoints } from "@/type";
import styled from "styled-components";

interface BoxProps {
  inlineStyle?: breakpoints<string>;
}

const Box = styled.section<BoxProps>`
  display: flex;

  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  gap: 1em;
  margin: 2em;

  ${({ inlineStyle }) => inlineStyle?.xs}
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["md"]}) {
    ${({ inlineStyle }) => inlineStyle?.md}
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["lg"]}) {
    ${({ inlineStyle }) => inlineStyle?.lg}
  }
`;

export default Box;
