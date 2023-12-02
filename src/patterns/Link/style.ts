import styled from "styled-components";
import NextLink from "next/link";
import { PatternProps } from "@/type";

export const LinkStyle = styled.a.withConfig({
  shouldForwardProp: (props) => !["inlineStyle"].includes(props),
})<PatternProps>`
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
})<PatternProps>`
  ${({ inlineStyle }) => inlineStyle?.xs}
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["md"]}) {
    ${({ inlineStyle }) => inlineStyle?.md}
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["lg"]}) {
    ${({ inlineStyle }) => inlineStyle?.lg}
  }
`;
