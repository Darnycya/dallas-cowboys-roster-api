import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo() {
  return (
    <Link to="/players">
      <img
        className="logo-banner"
        alt="dallas-logo"
        src="https://res.cloudinary.com/darnycya/image/upload/v1638082372/Screen_Shot_2021-11-28_at_1.52.22_AM_gvkxex.png"
      ></img>
    </Link>
  );
}
