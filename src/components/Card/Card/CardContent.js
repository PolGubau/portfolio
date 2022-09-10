import { memo } from "react";
import { Title } from "src/components/Card/Title/Title";
import { Image } from "src/components/Card/Image/Image";
import Description from "src/components/Card/Description/Description";

import "./Card.css";
import "./Overlay.css";

import ChangeProjectButtons from "src/components/Card/ChangeProjectButtons";

export const CardContent = memo(
  ({ project, ids, lang, isSelected, mobile, setOpenBig, openBig }) => {
    return (
      <>
        <ChangeProjectButtons
          id={project.id}
          ids={ids}
          isSelected={isSelected}
        />
        <Title lang={lang} project={project} isSelected={isSelected} />

        <Image
          isSelected={isSelected}
          project={project}
          setOpenBig={setOpenBig}
          openBig={openBig}
        />

        <div className="content-container" style={{ originY: 0, originX: 0 }}>
          <Description lang={lang} project={project} />
        </div>
      </>
    );
  }
);
