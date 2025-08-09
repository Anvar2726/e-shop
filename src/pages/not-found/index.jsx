import React from "react";
import { useNavigate } from "react-router";

import "./style.scss";

import NotFoundImage from "../../assets/images/not-found-img.svg";

 const NotFoundPage = () => {
  const navigate = useNavigate();
  // This component renders a "Page Not Found" message with an image and a button to navigate back home.
  return (
    <div className="notfound">
      <img src={NotFoundImage} alt="Not Found" className="notfound__image" />
      <h1 className="notfound__title">404 - Page Not Found</h1>
      <p className="notfound__text">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <button className="notfound__button" onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
}
export  default NotFoundPage;
