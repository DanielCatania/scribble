import styled from "styled-components";

export const Box = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0.5em 0.75em;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 2em;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 0.5em;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 2em;
  }
`;
