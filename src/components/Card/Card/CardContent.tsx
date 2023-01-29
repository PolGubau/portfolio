import { memo } from "react";
import { Image } from "src/components/Card/Image/Image";
import Description from "src/components/Card/Description/Description";
import { CardInterface } from "src/Interfaces";

import "./Card.css";
import { Title } from "../Title/Title";

export const CardContent = memo(({ project, ids, mobile }: CardInterface) => {
  return (
    <>
      <article
        className={`imageAndDescription ${
          mobile ? "imageAndDescriptionMobile" : ""
        }`}
      >
        <>
          {project.tags.map((tag: string) => {
            <p>{tag}</p>;
          })}
          <Title isSelected={true} project={project} />
          <Image project={project} />

          <div
            className={`${mobile ? "card-content-Mobile" : "card-content-PC"} `}
          >
            <Description project={project} />
          </div>
        </>
      </article>
    </>
  );
});
