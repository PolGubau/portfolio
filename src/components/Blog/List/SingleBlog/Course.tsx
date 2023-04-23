import { IBlogData } from "src/Models/Courses/CoursesData";
import { BlogStyled, OverlayStyled } from "./CourseStyled";
import { useRecoilValue } from "recoil";
import { baseTheme } from "src/styles/theme/baseTheme";
import { getTextByLang } from "src/utils/getTextByLang";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { userAlreadyRead } from "../../Functions/userAlreadyRead";
import { BiCheckCircle } from "react-icons/bi";

const Blog = ({ course }: { course: IBlogData }) => {
  const l = useRecoilValue(LanguageAtom);
  const name = getTextByLang(l.code, course.name);
  const url = `/courses/${course.path}`;

  return (
    <BlogStyled
      to={url}
      color={course.color ? course.color : baseTheme.colors.blue}
    >
      {userAlreadyRead(course.id) && (
        <span className="seenCheck">
          <BiCheckCircle size={40} />
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
