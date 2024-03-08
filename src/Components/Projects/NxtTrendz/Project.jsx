import React from "react";
import "./styles.scss";
import { GitImage } from "../../../core/utility/iconHelper";
const Nxttrendz = () => {
  return (
    <div className="bg-container-project-nxttrendz">
      <div className="card-title">
        <h3>Nxttrendz App (Flipkart and Shopping clone)</h3>
      </div>
      <div className="card-descrip">
        Project Description <br />{" "}
        <ul>
          <li>
            nxtTrenz, a dynamic online marketplace built using React that mimics
            the functionality of popular e-commerce platforms like Flipkart.
            This project provides users with a seamless shopping experience,
            featuring four primary routes: login, home, product, and cart
            checkout pages.
          </li>
          <li>
            Key Features: User Authentication: Implemented a secure login page
            to authenticate users and personalize their shopping journey. Search
            and Filters: Keyword Search: Users can easily find products by
            entering keywords in the search bar. Category Filters: Implemented
            category filters to allow users to narrow down their search. Rating
            Filters: Provided the option to filter products based on user
            ratings for an enhanced shopping experience. Product Page: Displays
            a wide array of products with detailed information, including
            images, descriptions, and prices. Users can interact with the
            product page to view additional details and make informed purchase
            decisions. Cart and Checkout: Shopping Cart: Integrated a robust
            shopping cart feature that allows users to add, remove, and adjust
            quantities of products. Price Calculation: Implemented a feature to
            dynamically calculate the total price of items in the cart. Quantity
            Adjustment: Users can easily increase or decrease the quantity of
            items in the cart on the checkout page.
          </li>
          <li>
            React: Leveraged React to create a dynamic and responsive user
            interface. HTML/CSS/JavaScript: Utilized foundational web
            technologies for structure, styling, and interactivity. React
            Router: Employed React Router to manage navigation between the
            different pages of the application. State Management: Utilized state
            management techniques, potentially with React Context or a state
            management library, to maintain the application's state efficiently.
          </li>
          <li>
            Integration with backend APIs for lead generation Utilized React
            Router for efficient navigation{" "}
          </li>
        </ul>
      </div>
      <div className="card-video">
        <iframe
          title="Mockups"
          className="iframe-class"
          src="https://www.youtube.com/embed/_aY43cTWu0w"
          frameborder="0"
          allowfullscreen
          controls
        ></iframe>
      </div>
      <div className="card-git">Project Git Hub Link</div>
      <a
        className="card-git-link"
        href="https://github.com/NxtCoderAakash/NxtTrendzApp.git"
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
        href="https://ReShoppingWeb.ccbp.tech"
        target="_blank"
      >
        Project Live Link
      </a>
    </div>
  );
};

export default Nxttrendz;
