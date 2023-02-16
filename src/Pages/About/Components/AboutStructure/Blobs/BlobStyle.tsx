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
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-top: ${(props) => props.marginTop};
    border: 1px solid ${(props) => props.color};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    .titles {
      margin-top: ${(props) => (props.hasUpperTitle ? "-40px" : "0px")};
      h3 {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 5px;
        font-size: 1.5rem;
        margin-top: -13px;
        width: fit-content;
        padding: 0 5px;
        line-height: 1;
        font-size: 1.5rem;
        font-weight: 700;
      }
      .upperTitle {
        margin-bottom: 20px;
        height: 20px;
      }
    }
  }
`;
