import React from "react";
import "./services.css";
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

function Services() {
  return (
    <search className="services" id="services">
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container services_container">
        <article className="card">
          <MdDesignServices className="icon"/>
          <h3>Web Design</h3>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nobis repellat debitis accusantium sapiente eligendi.
          </p>
        </article>

        <article className="card">
          <IoIosRocket className="icon"/>
          <h3>Web Design</h3>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nobis repellat debitis accusantium sapiente eligendi.
          </p>
        </article>

                <article className="card">
          <FaCode className="icon"/>
          <h3>Web Design</h3>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nobis repellat debitis accusantium sapiente eligendi.
          </p>
        </article>

      </div>
    </search>
  );
}

export default Services;
