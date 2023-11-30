import styled from "styled-components";

const Input = styled.input`
  width: 240px;
  height: 60px;

  padding: 3px 1em;
  border: 1px solid ${({ theme }) => theme.colors.neutral["250"]};
  border-radius: 15px;

  font-family: ${({ theme }) => theme.typography.variants.button.family};
  font-size: ${({ theme }) => theme.typography.variants.button.md.size};
  font-weight: ${({ theme }) => theme.typography.variants.button.md.weight};
`;

export default Input;
