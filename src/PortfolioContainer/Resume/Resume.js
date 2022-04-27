import React, {useState, useEffect} from 'react';
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
      return (
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span><b>{props.heading ? props.heading : ""}</b></span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          { props.description
            ?
            <div className="resume-heading-description">
              <span>{props.description}</span>
            </div>
            :
            <></>
          }
          { props.link 
            ?
            <div className="resume-heading-description">
              <span><a href={props.link}>{props.link }</a></span>
            </div>
            :
            <></>
          }
          <br />
        </div>
      );
    };
  
  const resumeBullets = [
      { label: "Education", logoSrc: "education.svg" },
      { label: "Work History", logoSrc: "work-history.svg" },
      { label: "Front-end Skills", logoSrc: "programming-skills.svg" },
      { label: "Back-end Skills", logoSrc: "programming-skills.svg" },
      { label: "Projects", logoSrc: "projects.svg" },
      { label: "Interests", logoSrc: "interests.svg" },
    ];
  
  const frontEndSkillsDetails = [
      { skill: "HTML", ratingPercentage: 90 },
      { skill: "CSS", ratingPercentage: 85 },
      { skill: "Javascript", ratingPercentage: 90 },
      { skill: "React", ratingPercentage: 95 },
      { skill: "Vue", ratingPercentage: 70 },
      { skill: "Redux", ratingPercentage: 65 },
      { skill: "WordPress", ratingPercentage: 80 },
    ];
  
  const backEndSkillsDetails = [ 
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "Express", ratingPercentage: 90 },
    { skill: "JAVA", ratingPercentage: 70 },     
    { skill: "Spring Boot", ratingPercentage: 75 },     
    { skill: "SQL Server", ratingPercentage: 75 },
    { skill: "PHP", ratingPercentage: 74 },
    { skill: "Python", ratingPercentage: 65 },
  ];

  const projectsDetails = [
      {
        title: "Backend management system",
        duration: { fromDate: "2022/03", toDate: "present" },
        subHeading: "Technologies Used: Vue, Mockjs., echart package, github-pages deploy ",
        link:"https://sgao056.github.io/backend-management-system/"
      },
      {
        title: "Original core of chatroom",
        duration: { fromDate: "2022/03", toDate: "present" },
        subHeading:
          "Technologies Used: React.js, Socket.io., Node.js, express.js,",
        link:"https://sgao056.github.io/chatroom/"
      },
      {
        title: "Shoes management system",
        duration: { fromDate: "2021/06", toDate: "2021/07"},
        subHeading:
          "Technologies Used: React.js, node.js, express",
          link:"https://sgao056.github.io/shoes-shop/"
      },
      {
        title: "Amazon clone",
        duration: { fromDate: "2021/01", toDate: "2021/04"},
        subHeading:
          "Technologies Used: React.js React Hook, Firebase",
          link:"https://sgao056.github.io/amazon-mirror/"
        },
    ];
  
  const resumeDetails = [
      <div className="resume-screen-container" key="education">
        <ResumeHeading
          heading={"University of Ottawa, Canada"}
          subHeading={"MASTER of Engineering, Mechanical Engineering"}
          fromDate={"2019/09"}
          toDate={"2021/06"}
        />
        <ResumeHeading
          heading={"Ucareer Bootcamp, Canada(on-line)"}
          subHeading={"Certificate, Web development"}
          fromDate={"2021/05"}
          toDate={"2021/10"}
        />
        <ResumeHeading
          heading={"Beijing University of Technology, China"}
          subHeading={"BACHELOR of Material science and Engineering"}
          fromDate={"2015/09"}
          toDate={"2019/06"}
        />
      </div>,
  
      /* WORK EXPERIENCE */
      <div className="resume-screen-container" key="work-experience">
        <div className="experience-container" >
          <ResumeHeading
            heading={"WS & Company Ltd."}
            subHeading={"Web Developer"}
            fromDate={"2021/11 "}
            toDate={" 2021/12"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              - Supported the ERP system’s migration from PHP to react, and independently implemented plan to support site-wide front-end development strategy by React.js and React Hooks.
            </span>
            <br />
            <span className="resume-description-text">
              - Developed back-end Restful API by node.js.; performed MySQL Database backup and maintenance.
            </span>
          </div>
          <br />
          <ResumeHeading
            heading={"Alba Inc."}
            subHeading={"Web Development Intern"}
            fromDate={"2021-08 "}
            toDate={" 2021/10"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              - Assisted the outsourced development team with ERP renovation using HTML, CSS, JavaScript, PHP, and MySQL, enabling features such as appointment scheduling, push notifications, and file uploads.
            </span>
            <br />
            <span className="resume-description-text">
              - Applied version control software (Git) to track, test, and update pre-existing source code.
            </span>
            <br />
          </div>
        </div>
      </div>,
  
      /* PROGRAMMING SKILLS */
      <div className="resume-screen-container programming-skills-container" key="programming-skills">
        {frontEndSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>,

      /* Application SKILLS */
      <div className="resume-screen-container application-skills-container" key="application-skills">
        {backEndSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>,

      /* PROJECTS */
      <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            // description={projectsDetails.description}
            link={projectsDetails.link}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
          />
        ))}
      </div>,
  
      /* Interests */
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Games & development "
          description="Developed some tiny RPG games and card games."
        />
        <ResumeHeading
          heading="Traveling"
          description="Have been traveled to UK, Japan, Singapore and so on, the routes are still on extending."
        />
        <ResumeHeading
          heading="Investment"
          description="Started to invest in stocks purchasing and will go into real estate field."
        />
      </div>,
    ];

  const handleCarousal = (index) => {
      let offsetHeight = 500;
  
      let newCarousalOffset = {
        style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
      };
  
      setCarousalOffsetStyle(newCarousalOffset);
      setSelectedBulletIndex(index);
    };

  const getBullets = () => {
      return resumeBullets.map((bullet, index) => (
        <div
          onClick={() => handleCarousal(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          <img
            className="bullet-logo"
            src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
            alt="B"
          />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      ));
    };

  const getResumeScreens = () => {
      return (
        <div
          style={carousalOffsetStyle.style}
          className="resume-details-carousal"
        >
          {resumeDetails.map((ResumeDetail) => ResumeDetail)}
        </div>
      );
    };
  
  return (
      <div className="resume-container screen-container fade-in" id={props.id || ""}>
          <div className="resume-content">
              <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
              <div className="resume-card">
                  <div className="resume-bullets">
                      <div className="bullet-container">
                          <div className="bullet-icons"></div>
                              <div className="bullets">{getBullets()}</div>
                      </div>
                  </div>
                  <div className="resume-bullet-details">{getResumeScreens()}</div>
              </div>
          </div>
      </div>
  );
};

export default Resume;

