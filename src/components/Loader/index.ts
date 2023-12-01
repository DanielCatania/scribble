import styled from "styled-components";

const Loader = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 300px;
  border: 15px solid ${({ theme }) => theme.colors.secondary["100"]};
  border-top-color: ${({ theme }) => theme.colors.neutral["100"]};

  animation: rolling 0.5s infinite;

  @keyframes rolling {
    to {
      transform: rotate(1turn);
    }
  }
`;

export default Loader;
