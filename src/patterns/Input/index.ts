import styled from "styled-components";
import { PatternProps } from "@/type";

const Input = styled.input.withConfig({
  shouldForwardProp: (props) => !["inlineStyle"].includes(props),
})<PatternProps>`
  width: 240px;
  height: 60px;

  padding: 3px 1em;
  border: 1px solid ${({ theme }) => theme.colors.neutral["250"]};
  border-radius: 15px;

  font-family: ${({ theme }) => theme.typography.variants.button.family};
  font-size: ${({ theme }) => theme.typography.variants.button.md.size};
  font-weight: ${({ theme }) => theme.typography.variants.button.md.weight};

  ${({ inlineStyle }) => inlineStyle?.xs}
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["md"]}) {
    ${({ inlineStyle }) => inlineStyle?.md}
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["lg"]}) {
    ${({ inlineStyle }) => inlineStyle?.lg}
  }
`;

export default Input;
