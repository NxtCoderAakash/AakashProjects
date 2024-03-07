import React from "react";
import "./styles.scss";
const Nxtwatch = () => {
  return (
    <div className="bg-container-project-nxtwatch">
      <div className="card-title">
        <h3>Nxt Watch App (Youtube Clone)</h3>
      </div>
      <div className="card-descrip">
        Project Description <br />{" "}
        <ul>
          <li>
            , nxt Watch, a cutting-edge video streaming platform developed using
            React. This application provides users with a personalized
            experience to discover, save, and engage with their favorite videos.
            nxt Watch boasts four primary routes: login, home, trending, gaming,
            and saved videos, delivering a feature-rich environment for video
            enthusiasts. .
          </li>
          <li>
            Key Features: User Authentication: A secure login page ensures a
            personalized experience, allowing users to save and like videos
            based on their preferences. Video Discovery: Home Page: A central
            hub for users to explore a diverse range of videos tailored to their
            interests. Trending Page: Showcases the latest and most popular
            videos that are currently trending. Gaming Page: Dedicated to
            gaming-related content, providing a niche space for gaming
            enthusiasts. Search Functionality: Users can search for specific
            videos by entering keywords into the search bar, enhancing the
            discoverability of content. Video Interaction: Watch Videos:
            Seamless video playback for an uninterrupted viewing experience.
            Like Videos: Users can express their appreciation for videos by
            liking them. Save Videos: The option to save videos for later
            viewing, creating a personalized library.
          </li>
          <li>
            Technologies Used: React: Leveraged the power of React to build a
            dynamic and responsive user interface. HTML/CSS/JavaScript: Utilized
            fundamental web technologies to structure, style, and add
            interactivity. React Router: Implemented React Router for smooth
            navigation between different pages. State Management: Utilized state
            management techniques, potentially with React Context or a state
            management library, to efficiently manage application state.
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
          src="https://www.youtube.com/embed/JrXcbAFOC88"
          frameborder="0"
          allowfullscreen
          controls
        ></iframe>
      </div>
      <div className="card-git">Project Git Hub Link</div>
      <a
        className="card-git-link"
        href="https://github.com/NxtCoderAakash/NxtWatch-App.git"
        target="_blank"
      >
        Project Git Hub Link
      </a>
      <div className="card-live-project">Project Live Link</div>
      <a
        className="card-live-project-link"
        href="https://ReWatchAakash.ccbp.tech"
        target="_blank"
      >
        Project Live Link
      </a>
    </div>
  );
};

export default Nxtwatch;
