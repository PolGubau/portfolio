import styled from "styled-components";
import {
  TbBrandBitbucket,
  TbBrandCss3,
  TbBrandFigma,
  TbBrandGit,
  TbBrandGithub,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandNotion,
  TbBrandPhp,
  TbBrandPython,
  TbBrandReact,
  TbBrandRedux,
  TbBrandSass,
  TbBrandStorybook,
  TbBrandTypescript,
} from "react-icons/tb";
import { TbBrandMysql } from "react-icons/tb";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { getTextByLang } from "src/utils/getTextByLang";
import {
  aboutYouText,
  IAboutYouText,
} from "src/Models/Texts/PagesText/aboutYou.text";
const LogosStyled = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #222;
      border-radius: 5px;
      aspect-ratio: 1/1;
      height: 100%;
      color: white;
    }
  }
`;

const logos = [
  <TbBrandTypescript size={30} />,
  <TbBrandFigma size={30} />,
  <TbBrandReact size={30} />,
  <TbBrandNotion size={30} />,
  <TbBrandNextjs size={30} />,
  <TbBrandSass size={30} />,
  <TbBrandPython size={30} />,
  <TbBrandBitbucket size={30} />,
  <TbBrandCss3 size={30} />,
  <TbBrandGit size={30} />,
  <TbBrandGithub size={30} />,
  <TbBrandStorybook size={30} />,
  <TbBrandMongodb size={30} />,
  <TbBrandPhp size={30} />,
  <TbBrandRedux size={30} />,
  <TbBrandMysql size={30} />,
];
const InfiniteCarousel = () => {
  const l = useRecoilValue(LanguageAtom);
  const text: IAboutYouText = getTextByLang(l.code, aboutYouText);
  return (
    <LogosStyled>
      <p>{text.someTechnologies}</p>
      <section>
        {logos.map((logo, index) => (
          <div key={index}>{logo}</div>
        ))}
      </section>
    </LogosStyled>
  );
};

export default InfiniteCarousel;
