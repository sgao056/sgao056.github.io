import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "An aspiring Full Stack Web Developer with a strong passion for producing robust, well-designed web solutions throughout the Web Development Life Cycle.",
    highlights: {
      bullets: [
        "System design, developing, and maintenance",
        "UI/UX designer(Wordpress)",
        "Experienced React.js and Vue.js developer.",
        "SQL Database Development",
        "Building REST-API with Node.Js, PHP and Java",
        "Hardware helper and reliable IT support",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return( 
      SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight " key={i}>
        <div className="highlight-blob "></div>
        <span>{value}</span>
      </div>
      ))
    )
  };

  return (
    <div
      className="about-me-container screen-container fade-in "
      id={props.id || ""}
    >
      <div className="about-me-parent ">
        <ScreenHeading title={"About Me"} subHeading={"My Portfolio Overview"} />
        <div className="about-me-card ">
          <div className="about-me-profile "></div>
          <div className="about-me-details ">
            <span className="about-me-description ">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights ">
              <div className="highlight-heading ">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options ">
            <button className="btn primary-btn"
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    > Let's Discuss! </button>
              <a href="My_CV_2_0.pdf" download="Sean Gao's Portfolio.pdf">
                <button className="btn highlighted-btn ">Get CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
