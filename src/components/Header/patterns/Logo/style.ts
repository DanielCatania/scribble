import styled from "styled-components";

const Image = styled.img`
  width: 150px;
  height: 50px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 300px;
    height: 100px;
  }
`;

export default Image;
