import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Link to={"/"}>
        <a>Go Home</a>
      </Link>
      <h2>About me</h2>
      <p>lorem ipsum </p>
    </>
  );
};

export default About;
