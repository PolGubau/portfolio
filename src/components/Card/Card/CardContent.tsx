import { memo, useEffect } from "react";
import { Image } from "src/components/Card/Image/Image";
import Description from "src/components/Card/Description/Description";
import { CardInterface } from "src/Interfaces";
import { Title } from "../Title/Title";

export const CardContent = memo(({ project, mobile }: CardInterface) => {
  const isAProjectSelected = project.title !== "";
  const show = isAProjectSelected;
  useEffect(() => {
    show && document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [show]);

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
