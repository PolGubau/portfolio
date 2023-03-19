import courseData from "src/Models/Courses/CoursesData";
export const getCourses = () => {
  return courseData;
};
export const getCourseByName = (name: string) => {
  const courses = getCourses();
  return courses.find((course) => course.name === name);
};
export const getCourseByPath = (path: string) => {
  const courses = getCourses();
  return courses.find((course) => course.path === path);
};
export const getCoursesWithSameTags = (tags: string[], maximum?: number) => {
  const courses = getCourses();
  const coursesWithSameTags = courses.filter((course) => {
    return course.tags.some((tag) => tags.includes(tag));
  });
  if (maximum) {
    return coursesWithSameTags.slice(0, maximum);
  }
  return coursesWithSameTags;
};
