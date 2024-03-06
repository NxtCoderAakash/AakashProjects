import React from "react";
import "./styles.scss";
const Project1 = () => {
  return (
    <div className="bg-container-project">
      <div className="card-title"><h3>Pincode Management for Runners</h3></div>
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
          width="640"
          height="360"
          src="https://www.youtube.com/embed/VDcKEpr1Lhc"
          frameborder="0"
          allowfullscreen
          controls
        ></iframe>
      </div>
      <div className="card-git">Project Git Hub Link</div>
      <a className="card-git-link" href="https://github.com/NxtCoderAakash/AakashProjects.git" target="_blank">Project Git Hub Link</a>
      <div className="card-live-project">Project Live Link</div>
      <a className="card-live-project-link" href="http://localhost:3000/pincodeMapping" target="_blank">Project Live Link</a>
    </div>
  );
};

export default Project1;
