import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FooterTextInterface } from "src/Interfaces";
import { getTextByLang } from "src/utils/getTextByLang";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilValue } from "recoil";
import { footerText } from "src/Models/Texts/PagesText/home.text";
import { Divider, JustifyContents, Link, Stack, Text, Variants } from "pol-ui";
export default function Footer() {
  const l = useRecoilValue(LanguageAtom);
  const text: FooterTextInterface = getTextByLang(l.code, footerText);
  return (
    <footer
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        textAlign: "center",
        marginBottom: "6rem",
      }}
    >
      <Divider margin="lg" />

      <Stack as="ul" justify={JustifyContents.center}>
        <li>
          <Link
            variant={Variants.text}
            href="mailto:gubaupol@gmail.com"
            icon={<MdOutlineAlternateEmail />}
          >
            <Text>{text.email}</Text>
          </Link>
        </li>
        <li>
          <Link
            variant={Variants.text}
            href="https://www.linkedin.com/in/polgubauamores/"
            icon={<RiLinkedinLine />}
          >
            <Text>{text.linkedin}</Text>
          </Link>
        </li>
        <li>
          <Link
            variant={Variants.text}
            href="https://github.com/polgubau"
            icon={<RiGithubLine />}
          >
            <Text>{text.github}</Text>
          </Link>
        </li>
        <li>
          <Link
            variant={Variants.text}
            href="https://www.instagram.com/polgubau/"
            icon={<FaInstagram />}
          >
            <Text>{text.instagram}</Text>
          </Link>
        </li>
      </Stack>

      <h3>Pol Gubau Amores</h3>
      <p>{text.greeting}</p>
      <a href="files/cv2023.pdf" download>
        {text.curriculum}
      </a>
    </footer>
  );
}
