import { memo } from "react";
import { Title } from "src/components/Card/Title/Title";
import { Image } from "src/components/Card/Image/Image";
import Description from "src/components/Card/Description/Description";
import { CardInterface } from "src/Interfaces";

import "./Card.css";
import "./Overlay.css";

import ChangeProjectButtons from "src/components/Card/ChangeProjectButtons";
import FooterNav from "../FooterNav/FooterNav";
import { useAppSelector } from "src/redux/app/hooks";
import { actualLanguage } from "src/redux/features/languageSlice";

export const CardContent = memo(
  ({ project, ids, isSelected, mobile, allData }: CardInterface) => {
    const lang = useAppSelector(actualLanguage);

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
          <Image isSelected={isSelected} project={project} />

          <div
            className={`${
              mobile && isSelected ? "card-content-Mobile" : "card-content-PC"
            } `}
          >
            <Description project={project} />
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
