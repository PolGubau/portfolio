import { motion } from "framer-motion";
import styled from "styled-components";

interface StyledProps {
  color: string;
}
export const BlobMobileStyled: any = styled(motion.div)<StyledProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  article {
    padding: 10px;
    width: 100%;
    min-height: 50px;
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
      h3 {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 5px;
        font-size: 1.5rem;
        width: fit-content;
        padding: 0 5px;
        line-height: 1;
        font-size: 1.5rem;
        font-weight: 700;
      }
    }
  }
`;
