import Madefor from "./MadeFor/MadeFor";
import { getTextByLang } from "src/utils/getTextByLang";
import { IProject } from "src/Interfaces";
import { DescriptionStyled } from "./DescriptionStyled";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilValue } from "recoil";
import { RxCopy } from "react-icons/rx";
import { useState } from "react";
import { CgCheckO } from "react-icons/cg";
import { Button, Text } from "pol-ui";
export default function Description({ project }: { project: IProject }) {
  const l = useRecoilValue(LanguageAtom);
  const descriptionText = getTextByLang(l.code, project.description);
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(project.npmComand ?? "");
    setCopied(true);
  };
  return (
    <DescriptionStyled>
      <header>
        <Madefor madeFor={project.madeFor} />
      </header>
      <Text isMarkdown value={descriptionText} />

      {project.npmComand && (
        <Button
          icon={copied ? <CgCheckO /> : <RxCopy />}
          onClick={handleCopyCommand}
        >
          {project.npmComand}
        </Button>
      )}
    </DescriptionStyled>
  );
}
