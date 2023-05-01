import styled from "styled-components";
import Loader from "./Loader";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { getTextByLang } from "src/utils/getTextByLang";
import loadingText from "src/Models/Texts/PagesText/loading.text";

export const CenteredLoaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  height: 100%;
  min-height: 500px;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
`;

const CenteredLoader = () => {
  const { code } = useRecoilValue(LanguageAtom);
  const { text } = getTextByLang(code, loadingText);
  return (
    <CenteredLoaderStyled>
      <Loader />
      <p>{text}</p>
    </CenteredLoaderStyled>
  );
};
export default CenteredLoader;
