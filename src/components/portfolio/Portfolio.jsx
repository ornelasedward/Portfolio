import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 2,
    image: IMG2,
    title: "Hypno CryptoCurrency Exchange",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Twitch Clone w/ NextJS & TailWindCSS",
    github: "https://github.com/ornelasedward/twitch_clone",
    demo: "https://dribbble.com",
  },
  {
    id: 1,
    image: IMG1,
    title: "HTML/CSS/JavaScript Calculator",
    github: "https://github.com/ornelasedward/Calculator",
    demo: "https://codepen.io/ornelasedward/pen/zYRMXzg",
  },

  {
    id: 4,
    image: IMG4,
    title: "CryptoCurrency Dashboard & Finance",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },

  {
    id: 5,
    image: IMG5,
    title: "CryptoCurrency Dashboard & Finance",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },

  {
    id: 6,
    image: IMG6,
    title: "CryptoCurrency Dashboard & Finance",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Experience</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <div class="words">
                <h3>{title}</h3>
              </div>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" targets="_blank">
                  GIthub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
