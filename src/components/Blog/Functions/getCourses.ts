import courseData, { IBlogData } from "src/Models/Courses/CoursesData";
export const getCourses = () => {
  return courseData;
};
export const getCourseByName = (nameInEnglish: string) => {
  const courses = getCourses();
  return courses.find((course) => course.name.en === nameInEnglish);
};
export const getCourseByPath = (path: string) => {
  const courses = getCourses();
  return courses.find((course) => course.path === path);
};
export const getCoursesWithSameTags = (
  blog: IBlogData,
  maximum?: number,
  deleteCurrent: boolean = true
) => {
  const courses = getCourses();
  const coursesWithSameTags = courses.filter((course) => {
    return course.tags.some((tag) => blog.tags.includes(tag));
  });

  // delete the currentBlog from the list
  if (deleteCurrent) {
    const index = coursesWithSameTags.findIndex(
      (course) => course.name.en === blog.name.en
    );
    if (index !== -1) {
      coursesWithSameTags.splice(index, 1);
    }
  }

  // mix the array to get a random order
  coursesWithSameTags.sort(() => Math.random() - 0.5);

  if (maximum) {
    return coursesWithSameTags.slice(0, maximum);
  }
  return coursesWithSameTags;
};
