import React from "react";
import "./projects.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "E-Commerce",
    github: "https://github.com/minasamir1401/blue-ecommerce-main.git",
    demo: "https://minasamir1401.github.io/blue-ecommerce-main/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Portfolio",
    github: "https://github.com/minasamir1401/my-vite-portfolio",
    demo: "https://minasamir1401.github.io/my-vite-portfolio/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Food-Lover",
    github: "https://github.com/minasamir1401/Food-Lover-main",
    demo: "https://minasamir1401.github.io/Food-Lover-main/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Juicy-GSAP",
    github: "https://github.com/minasamir1401/Juicy-GSAP",
    demo: "https://chimerical-syrniki-135224.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Next.js Dashboard Project",
    github: "https://github.com/minasamir1401/Next.js-Dashboard-Project",
    demo: "https://nextui-dashboard.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Landing Page",
    github: "#",
    demo: "https://dynamic-pavlova-830596.netlify.app/",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="top_section">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
      </div>

      <div className="container projects_container">
        {portfolioData.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-img">
              <img src={image} alt={title} loading="lazy" />
            </div>

            <h3>{title}</h3>

            <div className="portfolio_item-btns">
              <a href={github} target="_blank" className="btn" id={`github-btn-${id}`}>
                Github
              </a>
              <a href={demo} target="_blank" className="btn btn-primary" id={`demo-btn-${id}`}>
                Live demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
