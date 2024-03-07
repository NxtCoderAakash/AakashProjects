import React from "react";
import "./styles.scss";
const Project1 = () => {
  return (
    <div className="bg-container-project">
      <div className="card-title"><h3>Pincode Management for Runners</h3></div>
      <div className="card-descrip">
        Project Description <br />{" "}
        <ul>
          <li>Developed and launched a Pincode Management Dashboard for controlling runner availability in different areas, along with their weekday availability</li>
          <li>Pincode Management: Comprehensive inclusion of existing and potential pincodes, with user-controlled toggles.</li>
          <li>Weekday Configuration: Implementation of a dynamic system allowing users to tailor service availability on different days.</li>
          <li>Integration with backend APIs for availability of existing pincodes and weekdays availability </li>
        </ul>
        <ol>
        Impact:
        <li>Operational Flexibility: Efficient pincode management enhances operational adaptability to varying demand patterns.</li>
        <li> Enhanced User Experience: The dynamic features contribute to an enriched and user-centric experience.</li>
        <li> Scalability and Adaptability: The platform is meticulously designed to accommodate both existing and potential pincodes, ensuring scalability for evolving service areas and user needs.</li>
        </ol>
      </div>
      <div className="card-video">
        <iframe
          className="iframe-class"
          src="https://www.youtube.com/embed/FccvzV89i3Q"
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
