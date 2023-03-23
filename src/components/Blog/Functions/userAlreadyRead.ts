import { IBlogData } from "src/Models/Courses/CoursesData";

export const getArrayOfAlreadyReadBlogs = () => {
  const context = localStorage.getItem("context");
  if (context) {
    const parsedContext = JSON.parse(context);
    return parsedContext.blogsAlreadyRead;
  }
  return [];
};

export const userAlreadyRead = (idOfTheBlog: string) => {
  // if the id of the blog is in the array of blogsAlreadyRead, return true, that means the user already read it
  const blogsAlreadyRead = getArrayOfAlreadyReadBlogs();
  return blogsAlreadyRead.includes(idOfTheBlog);
};

export const addBlogToAlreadyRead = (blog: IBlogData) => {
  const blogsAlreadyRead = getArrayOfAlreadyReadBlogs();
  blogsAlreadyRead.push(blog.id);
  localStorage.setItem(
    "context",
    JSON.stringify({
      blogsAlreadyRead: blogsAlreadyRead,
    })
  );
};

export const addBlogToAlreadyRedIfNotAlreadyRead = (blog: IBlogData) => {
  if (!userAlreadyRead(blog.id)) {
    addBlogToAlreadyRead(blog);
  }
};
