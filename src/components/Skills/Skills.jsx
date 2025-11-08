import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

import Html from "../../assets/html-icon.svg";
import Css from "../../assets/css3.svg";
import Javascript from "../../assets/javascript.svg";
import TypeScript from "../../assets/typescript.svg";
import ReactJS from "../../assets/react.svg";
import NextJS from "../../assets/nextjs-icon.svg";

const SkillsData = [
  {
    id: 1,
    image: Html,
    title: "HTML",
    disc: "Markup Languag",
  },
  {
    id: 2,
    image: Css,
    title: "CSS",
    disc: "User Interface",
  },
  {
    id: 3,
    image: Javascript,
    title: "JavaScript",
    disc: "Interaction",
  },
  {
    id: 4,
    image: TypeScript,
    title: "TypeScript",
    disc: "Type Safety",
  },
  {
    id: 5,
    image: ReactJS,
    title: "React",
    disc: "Framework",
  },
  {
    id: 6,
    image: NextJS,
    title: "Next.js",
    disc: "React Framework",
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>

      <div className="container container_skills">
        {SkillsData.map(({ id, image, title, disc }) => {
          return (
            <article key={id} className="card_skills" id={`skill-card-${id}`}>
              <div className="icon">
                <img src={image} alt={title} />
              </div>

              <div className="content">
                <h4>{title}</h4>
                <p className="text-light">{disc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
