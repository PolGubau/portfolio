import { IBlogData } from "src/Models/Courses/CoursesData";
import { BlogStyled, OverlayStyled } from "./CourseStyled";
import { useRecoilValue } from "recoil";
import { baseTheme } from "src/styles/theme/baseTheme";
import { getTextByLang } from "src/utils/getTextByLang";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { userAlreadyRead } from "../../Functions/userAlreadyRead";
import { HiCheckCircle } from "react-icons/hi";

const Blog = ({ course }: { course: IBlogData }) => {
  const l = useRecoilValue(LanguageAtom);
  const name = getTextByLang(l.code, course.name);
  const url = `/blog/${course.path}`;

  return (
    <BlogStyled
      to={url}
      color={course.color ? course.color : baseTheme.colors.blue}
    >
      {userAlreadyRead(course.id) && (
        <span className="seenCheck">
          <HiCheckCircle />
        </span>
      )}
      <p className="name">{name}</p>
      <OverlayStyled>
        <span className="bigIcon">{course.icon ? course.icon : ""}</span>
      </OverlayStyled>
    </BlogStyled>
  );
};
export default Blog;
