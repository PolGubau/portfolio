import styled from "styled-components";

export const CentralActionsButtonsStyle = styled.section`
  position: fixed;
  width: 100%;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 20px;
  flex-wrap: wrap;
  flex-direction: row;
  z-index: 100;
  .search {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
    padding: 10px 20px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 10px;
    text-decoration: none;
    transition: 0.3s;
    svg {
      color: ${({ theme }) => theme.colors.background};
      fill: ${({ theme }) => theme.colors.background};
    }
  }
`;
