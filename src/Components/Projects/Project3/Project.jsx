import React from "react";
import "./styles.scss";
const Project3 = () => {
  return (
    <div className="bg-container-project">
      <div className="card-title">
        <h3>Refurbishment Vehicle Dashboard - Spare parts Calculation</h3>
      </div>
      <div className="card-descrip">
        Project Description <br />{" "}
        <ul>
          <li>
            Designed and implemented a comprehensive refurb dashboard as part of
            the old vehicle refurbishment team. The dashboard serves as a
            centralized hub for spare parts selection and cost estimation,
            streamlining the entire process. .
          </li>
          <li>Key Contributions</li>
          <li>
            Integration with Backend: Collaborated seamlessly with the backend
            team to integrate the dashboard with existing spare parts data. This
            integration enables real-time access to historical selections and
            facilitates the creation of new revisions.
          </li>
          <li>
            Enhanced Efficiency: The dashboard significantly improved the
            efficiency of the spare parts selection process, providing a
            systematic approach to cost estimation and aiding decision-making
            for refurbishment projects.
          </li>
          <li>
            User-Centric Features: Implemented features that enhance user
            experience, making it easy to identify and select spare parts for
            new revisions
          </li>
        </ul>
        <ol>
          Impact:
          <li>
            Successful Cart based calculation resulted in High savings (more
            than 40%) in Refurbishment cost to the team.
          </li>
          <li>
            {" "}
            Empowered Internal team to get diiference in calculation of Old vs
            New Cost
          </li>
          <li>
            {" "}
            Contributed to the growth of the platform by improving the internal
            workflow
          </li>
        </ol>
      </div>
      <div className="card-video">
        <iframe
        title="Mockups"
         className="iframe-class"
          src="https://www.youtube.com/embed/v8jFOTG573E"
          frameborder="0"
          allowfullscreen
          controls
        ></iframe>
      </div>
      <div className="card-git">Project Git Hub Link</div>
      <a href="https://www.google.com" target="_blank" rel="noreferrer"  className="card-git-link">Project Git Hub Link</a>
      <div className="card-live-project">Project Live Link</div>
      <a href="https://www.google.com" target="_blank" rel="noreferrer"  className="card-live-project-link">Project Live Link</a>
    </div>
  );
};

export default Project3;
