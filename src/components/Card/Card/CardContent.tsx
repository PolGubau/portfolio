import { memo } from "react";
import { Title } from "src/components/Card/Title/Title";
import { Image } from "src/components/Card/Image/Image";
import Description from "src/components/Card/Description/Description";
import { CartInterface } from "src/Interfaces";

import "./Card.css";
import "./Overlay.css";

import ChangeProjectButtons from "src/components/Card/ChangeProjectButtons";
import FooterNav from "../FooterNav/FooterNav";

export const CardContent = memo(
  ({ project, ids, lang, isSelected, mobile, allData }: CartInterface) => {
    return (
      <>
        <ChangeProjectButtons
          allData={allData}
          id={project.id}
          ids={ids}
          isSelected={isSelected}
        />
        <Title lang={lang} project={project} isSelected={isSelected} />

        <div
          className={`imageAndDescription ${
            mobile ? "imageAndDescriptionMobile" : ""
          }`}
        >
          <Image isSelected={isSelected} project={project} mobile={mobile} />

          <div
            className={`${
              mobile && isSelected ? "card-content-Mobile" : "card-content-PC"
            } `}
          >
            <Description lang={lang} project={project} />
          </div>
          {mobile && (
            <FooterNav
              allData={allData}
              id={project.id}
              ids={ids}
              isSelected={isSelected}
            />
          )}
        </div>
      </>
    );
  }
);
