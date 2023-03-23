import styled from "styled-components";

interface Props {
  narrowLayout: boolean;
}

export const BlogListStyled = styled.section<Props>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ narrowLayout }) => (narrowLayout ? "180px" : "250px")}, 1fr)
  );
  gap: 20px;
`;
