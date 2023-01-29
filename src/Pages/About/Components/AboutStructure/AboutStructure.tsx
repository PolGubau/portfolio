import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import { AboutStructureStyled } from "./AboutStructureStyled";

const AboutStructure = () => {
  const yearsSince2018 = new Date().getFullYear() - 2018;
  return (
    <AboutStructureStyled>
      <div className="box b1">
        <article>
          <p>Focused .{yearsSince2018}. Based in Barcelona.</p>
        </article>
      </div>
      <div className="dreamsBox">
        <h3>Dreams that I have achieved</h3>
        <ul>
          <li>
            <RiCheckboxCircleLine />
            Learn and work as a Graphic designer
          </li>
          <li>
            <RiCheckboxCircleLine />
            Become a Software Developer
          </li>
          <li>
            <RiCheckboxCircleLine />
            Work in small and international companies
          </li>
          <li>
            <RiCheckboxCircleLine />
            Create a portfolio using React
          </li>
          <li>
            <RiCheckboxCircleLine />
            Teach code to college students
          </li>
          <li>
            <RiCheckboxBlankCircleLine />
            Write a book
          </li>
          <li>
            <RiCheckboxBlankCircleLine />
            Publish a .npm package
          </li>
          <li>
            <RiCheckboxBlankCircleLine />
            Design fonts and publish them
          </li>
          <li>
            <RiCheckboxBlankCircleLine />
            Develop a mobile application with a team
          </li>
        </ul>
      </div>
      <div className="box b2">
        <article>
          <h3>
            <span>Istituto</span> <br /> Tecnico Superiore
          </h3>
          <p>lorem lorem lorem lorem lorem</p>
          <p>2020-2020</p>
        </article>
      </div>
      <div className="box b3">
        <article>
          <h3>LCI Barcelona</h3>
          <p>lorem lorem lorem lorem lorem</p>
          <p>2020-2020</p>
        </article>
      </div>
      <div className="box b4">
        <article>
          <h3>
            <span>Universitat</span> <br /> Autònoma de Barcelona
          </h3>
          <p>lorem lorem lorem lorem lorem</p>
          <p>2020-2020</p>
        </article>
      </div>
      <div className="box b5">
        <article>
          <h3>Linnaeus Universitet</h3>
          <p>lorem lorem lorem lorem lorem</p>
          <p>2020-2020</p>
        </article>
      </div>
      <div className="box b6">
        <article>
          <h3>Nuwe</h3>
          <p>lorem lorem lorem lorem lorem</p>
          <p>2020-2020</p>
        </article>
      </div>
      <div className="box b7">
        <article>
          <h3>Almato Iberia</h3>
          <p>lorem lorem lorem lorem lorem</p>
          <p>2020-2020</p>
        </article>
      </div>
    </AboutStructureStyled>
  );
};

export default AboutStructure;
