import styled from "styled-components";

interface ImageProps {
  width?: string;
  height?: string;
}

const Image = styled.img.withConfig({
  shouldForwardProp: (props) => !["width", "height"].includes(props),
})<ImageProps>`
  width: ${({ width = "" }) => width};
  height: ${({ height = "" }) => height};
`;

export default Image;
