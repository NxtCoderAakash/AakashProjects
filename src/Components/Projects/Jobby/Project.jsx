import React from "react";
import "./styles.scss";
const Jobby = () => {
  return (
    <div className="bg-container-project-jobby">
      <div className="card-title">
        <h3>Jobby App (Job Search)</h3>
      </div>
      <div className="card-descrip">
        Project Description <br />{" "}
        <ul>
          <li>
            Jobby App, a robust job portal developed using React that provides
            users with a comprehensive platform to explore job descriptions,
            company profiles, and key information about tech stacks and ratings.
            This project encompasses four main routes: login, home, jobs, and
            job details pages.
          </li>
          <li>
            Key Features: User Authentication: Implemented a secure login page
            for user authentication, ensuring a personalized experience
            throughout the job search process. Search and Filters: Keyword
            Search: Users can easily find specific jobs by entering keywords in
            the search bar. Category Filters: Implemented category filters to
            allow users to narrow down job searches. Salary Range Filters:
            Provided the option to filter jobs based on salary range for more
            targeted results. Jobs Page: Displays a curated list of jobs with
            essential details, including job titles, companies, and salary
            information. Users can explore job listings and make informed
            decisions about potential opportunities. Job Details Page: Offers
            in-depth information about a specific job, including detailed job
            descriptions, required skills, and company profiles. Users can view
            the tech stacks used by the company and company ratings to assess
            their compatibility with the job. Contact Company: Provided a
            feature for users to contact the company directly by using the
            mentioned company email on the job details page. Enables seamless
            communication between job seekers and companies.
          </li>
          <li>
            Technologies Used: React: Leveraged React to create a dynamic and
            intuitive user interface. HTML/CSS/JavaScript: Utilized foundational
            web technologies for structure, styling, and interactivity. React
            Router: Implemented React Router for smooth navigation between
            different pages. State Management: Utilized state management
            techniques, possibly with React Context or a state management
            library, to efficiently manage application state.
          </li>
          <li>
            Integration with backend APIs for lead generation Utilized React
            Router for efficient navigation{" "}
          </li>
        </ul>
      </div>
      <div className="card-video">
        <iframe
          className="iframe-class"
          src="https://www.youtube.com/embed/6_fJpr69_tw"
          frameborder="0"
          allowfullscreen
          controls
        ></iframe>
      </div>
      <div className="card-git">Project Git Hub Link</div>
      <a
        className="card-git-link"
        href="https://github.com/NxtCoderAakash/JobbyApp.git"
        target="_blank"
      >
        Project Git Hub Link
      </a>
      <div className="card-live-project">Project Live Link</div>
      <a
        className="card-live-project-link"
        href="https://ReJobAakash.ccbp.tech"
        target="_blank"
      >
        Project Live Link
      </a>
    </div>
  );
};

export default Jobby;
