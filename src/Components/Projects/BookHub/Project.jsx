import React from "react";
import "./styles.scss";
import { GitImage } from "../../../core/utility/iconHelper";
const Bookhub = () => {
  return (
    <div className="bg-container-project-bookhub">
      <div className="card-title">
        <h3>BookHub App (Goodreads Clone)</h3>
      </div>
      <div className="card-descrip">
        <p style={{ position: "stick" }}>Project Description </p>
        <br />{" "}
        <ul>
          <li>
            Developed and launched a responsive web application which serves as
            a comprehensive platform for users to explore and discover
            information about various books, including reviews, author details,
            and book descriptions.
          </li>
          <ul>
            Libraries Used
            <li>REACT,JAVASCRIPT,HTML,CSS,GIT,RestfulAPI,</li>
          </ul>
          <ul>
            Features
            <li>
              Four Distinct Routes: Login Page: A secure login page for user
              authentication. Home Page: The central hub for users to navigate
              through the application. Book List: Displays a curated list of
              books with essential details. Book Details Page: Provides in-depth
              information about a selected book, including reviews and author
              details.
            </li>
          </ul>

          <li>
            Implemented media queries for optimal responsiveness on various
            screen sizes
          </li>
          <li>
            Integration with backend APIs for lead generation Utilized React
            Router for efficient navigation{" "}
          </li>
        </ul>
        <ol></ol>
      </div>
      <div className="card-video">
        <iframe
          title="Mockups"
          className="iframe-class"
          src="https://www.youtube.com/embed/5buQb1q2kUo"
          frameborder="0"
          allowfullscreen
          controls
        ></iframe>
      </div>
      <div className="card-git">Project Git Hub Link</div>
      <a
        className="card-git-link"
        href="https://github.com/NxtCoderAakash/BookHub.git"
        target="_blank"
      >
       <div>
        <button style={{background:"black",paddin:"5px",marginRight:"10px", borderRadius:"5px",width:"fit-content"}}><img src={GitImage} style={{width:"40px"}}/></button>
        Project Git Hub Link
        </div>
      </a>
      <div className="card-live-project">Project Live Link</div>
      <a
        className="card-live-project-link"
        href="https://BookHubAakash.ccbp.tech"
        target="_blank"
      >
        Project Live Link
      </a>
    </div>
  );
};

export default Bookhub;
// https://github.com/NxtCoderAakash/AakashProjects.git
