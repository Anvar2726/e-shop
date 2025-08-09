import React, { useState } from "react";

import { faqData, stats, timeline } from "../../../data";

import "./style.scss";
import { FiChevronLeft } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="about container">
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <div className="about__intro">
          <h1>About Us</h1>
          <p>
            At ShopSmart, we connect people to high-quality products with speed, care, and
            innovation. We believe online shopping should be simple, secure, and enjoyable for
            everyone.
          </p>
        </div>
      </div>

      <div className="about__stats">
        {stats.map((item, i) => (
          <div data-aos="fade-up" key={i} data-aos-duration="1000">
            <div className="stat">
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="about__timeline">
        <h2>Our Journey</h2>
        <ul>
          {timeline.map((item, i) => (
            <li key={i}>
              <div className="icon">{<item.icon />} </div>
              <div className="text">
                <span className="year">{item.year}</span>
                <p>{item.event}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="about__map">
        <h2>Our Headquarters</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193884.4068564098!2d69.11455850954174!3d41.28247993081267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e1!3m2!1sen!2s!4v1753897462740!5m2!1sen!2s"
          title="Our Location"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="about__accordion">
        <h2>More About Us</h2>
        <div className="accordion__items">
          {/* {faqData.map((item, index) => (
            <div data-aos="fade-right" key={index}>
              <div
                className={`accordion__item ${activeIndex === index ? "active-accordion" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="accordion__question">
                  {item.question}
                </div>
                <div className="accordion__answer">
                  {activeIndex === index && <p>{item.answer}</p>}
                </div>
              </div>
            </div>
          ))} */}
          {faqData.map((item, index) => (
            <div data-aos="fade-right" key={index}>
              <div
                className={`accordion__item ${activeIndex === index ? "active-accordion" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="accordion__question">
                  <span className={`accordion__icon ${activeIndex === index ? "rotate" : ""}`}>
                    <FaChevronDown />
                  </span>
                  {item.question}
                </div>
                <div className="accordion__answer">
                  {activeIndex === index && <p>{item.answer}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
