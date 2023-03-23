import styled from "styled-components";

export const PartnersStyled = styled.section`
  margin: 50px 0 150px 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      text-align: center;
      font-size: 2em;
      margin: 0;
      padding: 10px 20px;
      border-radius: 30px;
      background-color: rgba(0, 0, 180, 0.1);
      backdrop-filter: blur(5px);
      margin-bottom: 40px;
    }
  }
  .logosGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    width: 70%;
    justify-items: center;
    justify-content: center;
    align-items: center;
    align-content: center;
    svg {
      fill: ${({ theme }) => theme.colors.text};
    }
    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #982a2a;
      border-radius: 5px;
      height: 100px;
      width: 100px;
    }
  }
`;
