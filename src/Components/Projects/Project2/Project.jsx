import React from "react";
import "./styles.scss";
const Project2 = () => {
  return (
    <div className="bg-container-project">
      <div className="card-title"><h3>Credr Ads Page - Responsive Lead Generation Page</h3></div>
      <div className="card-descrip">
        Project Description <br />{" "}
        <ul>
          <li>Developed and launched a responsive web ad platform connecting bike
          sellers with potential buyers, streamlining the process of selling
          bikes online.</li>
          <li>Leveraged React.js and Material-UI for a modern and
          user-friendly interface, ensuring a seamless experience across
          devices.</li>
          <li>Implemented media queries for optimal responsiveness on
          various screen sizes Key Features: User-friendly ad creation process
          Seamless integration of Material-UI for a polished UI/UX Responsive
          design for optimal viewing on mobile, tablet, and desktop devices</li>
          <li>Integration with backend APIs for lead generation Utilized React
          Router for efficient navigation </li>
        </ul>
        <ol>
        Impact:
        <li>Successfully launched and
          maintained a user-centric platform, resulting in increased engagement
          and lead generation.</li>
        <li> Empowered bike sellers to easily create and
          manage ads, enhancing the overall user experience.</li>
        <li> Contributed to the
          growth of the platform by attracting a diverse user base.</li>

         
        </ol>
      </div>
      <div className="card-video">
        <iframe
        title="Mockups"
          className="iframe-class"
          src="https://www.youtube.com/embed/VDcKEpr1Lhc"
          frameborder="0"
          allowfullscreen
          controls
        ></iframe>
      </div>
      <div className="card-git">Project Git Hub Link</div>
      <a href="https://www.google.com" target="_blank" rel="noreferrer"  className="card-git-link">Project Git Hub Link</a>
      <div className="card-live-project">Project Live Link</div>
      <a rel="noreferrer"  className="card-live-project-link" href="https://www.credr.com/ad-demand-leads" target="_blank">Project Live Link</a>
    </div>
  );
};

export default Project2;
