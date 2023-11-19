import styled from "styled-components";
import { breakpoints } from "@/type";

interface SectionProps {
  inlineStyle?: breakpoints<string>;
}

const Section = styled.section.withConfig({
  shouldForwardProp: (props) => !["inlineStyle"].includes(props),
})<SectionProps>`
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

export default Section;
