import styled from "styled-components";
interface TextStyledProps {
  $weight?: string;
  $color?: string;
}
const TextStyled = styled.div<TextStyledProps>`
  h1 {
    font-size: 2.5rem;
    margin: 0;
    font-weight: ${(props) => props.$weight};
  }

  h2 {
    font-size: 2rem;
    margin: 0;
    font-weight: ${(props) => props.$weight};
  }

  h3 {
    font-size: 1.75rem;
    margin: 0;
    font-weight: ${(props) => props.$weight};
  }

  h4 {
    font-size: 1.5rem;
    margin: 0;
    font-weight: ${(props) => props.$weight};
  }

  h5 {
    font-size: 1.25rem;
    margin: 0;
    font-weight: ${(props) => props.$weight};
  }

  h6 {
    font-size: 1rem;
    margin: 0;
    font-weight: ${(props) => props.$weight};
  }

  p {
    font-size: 1rem;
    margin: 0;
    font-weight: ${(props) => props.$weight};
  }

  color: ${(props) => props.$color};
  margin: 0;
  padding: 0;
`;

export default TextStyled;
