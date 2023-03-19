import styled from "styled-components";

export const PartnersStyled = styled.section`
  margin: 200px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
      margin-bottom: 90px;
    }
  }
`;
