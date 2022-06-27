import * as React from "react";
import { motion } from "framer-motion";
import { Languages } from "../../Service/Consts";
import "./Footer.css";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

//

export default function Footer({ lang }) {
  return (
    <>
      <footer>
        <section>
          <article>
            <h2>Pol Gubau Amores</h2>

            <p>
              {lang === Languages[0] && "Thank you :)"}
              {lang === Languages[1] && "Muchas gracias :)"}
              {lang === Languages[2] && "Moltes gràcies :)"}
            </p>
          </article>
          <article>
            <a href="files/cv2022.pdf" download>
              <div className="cv">
                {lang === Languages[0] && "Download my CV"}
                {lang === Languages[1] && "Descarga mi CV"}
                {lang === Languages[2] && "Descarrega el meu CV"}
              </div>
            </a>
          </article>
          {/*  */}
          <article>
            <ul>
              <li>
                <a href="mailto:gubaupol@gmail.com">
                  <span className="icon">
                    <MdOutlineAlternateEmail />
                  </span>
                  {lang === Languages[0] && "Send me an Email"}
                  {lang === Languages[1] && "Envíame un Email"}
                  {lang === Languages[2] && "Envia'm un Email"}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/pol-gubau-amores-398898184/"
                >
                  <span className="icon">
                    <RiLinkedinLine />
                  </span>
                  {lang === Languages[0] && "My Linkedin"}
                  {lang === Languages[1] && "Mi Linkedin"}
                  {lang === Languages[2] && "El meu Linkedin"}
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/gubaupol">
                  <span className="icon">
                    <RiGithubLine />
                  </span>
                  {lang === Languages[0] && "My GitHub"}
                  {lang === Languages[1] && "Mi GitHub"}
                  {lang === Languages[2] && "El meu GitHub"}
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/polgubi02/">
                  <span className="icon">
                    <FaInstagram />
                  </span>
                  {lang === Languages[0] && "My Instagram"}
                  {lang === Languages[1] && "Mi Instagram"}
                  {lang === Languages[2] && "El meu Instagram"}
                </a>
              </li>
            </ul>
          </article>
        </section>
      </footer>
    </>
  );
}
