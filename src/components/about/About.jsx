import React from "react";
import "./aobut.css";
import { AiFillGithub } from "react-icons/Ai";

const About = () => {
  return (
    <section className="about-container">
      {/* <div>About Page</div> */}
      <div className="info-container">
        <div>
          The products and information displayed are from the Fake Store API
        </div>
        <div>
          Here's the link to the API that was used to create the shop items:
        </div>
        <div>
          <a
            className="api-link"
            target="_blank"
            href="https://fakestoreapi.com/"
          >
            Fake Store API
          </a>
        </div>
        <div>GitHub Repository:</div>
        <div>
          <a
            href="https://github.com/gerardoh085/shopping-cart"
            target="_blank"
            className="githubLinnk"
          >
            <AiFillGithub className="github"></AiFillGithub>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
