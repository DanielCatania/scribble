import styled from "styled-components";
import NextLink from "next/link";
import { breakpoints } from "@/type";

export interface LinkStyleProps {
  inlineStyle?: breakpoints<string>;
}

export const LinkStyle = styled.a.withConfig({
  shouldForwardProp: (props) => !["inlineStyle"].includes(props),
})<LinkStyleProps>`
  ${({ inlineStyle }) => inlineStyle?.xs}
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["md"]}) {
    ${({ inlineStyle }) => inlineStyle?.md}
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["lg"]}) {
    ${({ inlineStyle }) => inlineStyle?.lg}
  }
`;

export const NextLinkStyle = styled(NextLink).withConfig({
  shouldForwardProp: (props) => !["inlineStyle"].includes(props),
})<LinkStyleProps>`
  ${({ inlineStyle }) => inlineStyle?.xs}
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["md"]}) {
    ${({ inlineStyle }) => inlineStyle?.md}
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["lg"]}) {
    ${({ inlineStyle }) => inlineStyle?.lg}
  }
`;
