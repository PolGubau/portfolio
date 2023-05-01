import styled from "styled-components";

export const LoaderStyled = styled.div`
  --size: 15vw;

  --speed: 1.4s;
  --color: ${({ theme }) => theme.colors.text};
  --line-weight: 8px;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--line-weight);
  min-width: 200px;
  width: var(--size);
  border-radius: calc(var(--line-weight) / 2);
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--color);
    opacity: 0.1;
  }

  ::after {
    content: "";
    height: 100%;
    width: 100%;
    border-radius: calc(var(--line-weight) / 2);
    animation: loading var(--speed) ease-in-out infinite;
    transform: translateX(-100%);
    background-color: var(--color);
  }

  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const Loader = () => {
  return <LoaderStyled></LoaderStyled>;
};
export default Loader;
