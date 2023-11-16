import styled from "styled-components";
import { breakpoints } from "@/type";

interface ImageProps {
  width?: breakpoints<string>;
  height?: breakpoints<string>;
  maxWidth?: breakpoints<string>;
  maxHeight?: breakpoints<string>;
  inlineStyle?: breakpoints<string>;
}

const Image = styled.img.withConfig({
  shouldForwardProp: (props) =>
    !["width", "height", "maxWidth", "maxHeight", "inlineStyle"].includes(
      props
    ),
})<ImageProps>`
  width: ${({ width }) => width?.xs};
  height: ${({ height }) => height?.xs};
  max-width: ${({ maxWidth }) => maxWidth?.xs};
  max-height: ${({ maxHeight }) => maxHeight?.xs};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints["md"]}) {
    width: ${({ width }) => width?.md};
    height: ${({ height }) => height?.md};
    max-width: ${({ maxWidth }) => maxWidth?.md};
    max-height: ${({ maxHeight }) => maxHeight?.md};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints["lg"]}) {
    width: ${({ width }) => width?.lg};
    height: ${({ height }) => height?.lg};
    max-width: ${({ maxWidth }) => maxWidth?.lg};
    max-height: ${({ maxHeight }) => maxHeight?.lg};
  }

  ${({ inlineStyle }) => inlineStyle?.xs}
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["md"]}) {
    ${({ inlineStyle }) => inlineStyle?.md}
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints["lg"]}) {
    ${({ inlineStyle }) => inlineStyle?.lg}
  }
`;

export default Image;
