import { motion } from "framer-motion";
import styled from "styled-components";

interface StyledProps {
  color: string;
  hasUpperTitle: boolean;
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
    text-align: center;
    justify-content: flex-start;
    align-items: center;
    border-radius: 30px;
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    .titles {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;

      h3 {
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
        padding: 0 5px;
        line-height: 1;
        font-weight: 600;
      }
    }
    .description {
      margin: 20px 0;
    }
  }
`;
