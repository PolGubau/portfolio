import { motion } from "framer-motion";
import styled from "styled-components";

interface StyledProps {
  width: string;
  height: string;
  marginTop: string;
  color: string;
  placed: string;
  hasUpperTitle: boolean;
}
export const BlobStyled: any = styled(motion.div)<StyledProps>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.placed};

  article {
    position: relative;
    width: ${(props) => props.width};
    /* height: ${(props) => props.height}; */
    margin-top: ${(props) => props.marginTop};
    border: 1px solid ${(props) => props.color};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;

    align-items: center;
    border-radius: 90px;
    text-align: center;
    padding: 10px 30px 0 30px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    .titles {
      margin: 0;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: center;
      justify-content: center;
      h3 {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 1.5rem;
        width: fit-content;
        padding: 0 5px;
        line-height: 1;
        font-size: 1.5rem;
        font-weight: 700;
      }
    }
    .content {
      margin-bottom: 60px;
    }
    .date {
      position: absolute;
      bottom: 0;
      border: 1px solid ${(props) => props.color};
      border-radius: 10px 10px 0 0;
      padding: 5px 10px;
      border-bottom: 0;
    }
  }
`;
