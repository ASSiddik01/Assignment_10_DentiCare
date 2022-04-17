import React from "react";
import "./SocialLogin.css";
import google from "../../../../images/social/google.png";
import github from "../../../../images/social/github.png";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex theme_color">
        <hr style={{ width: "50%" }} />
        <p>or</p>
        <hr style={{ width: "50%" }} />
      </div>
      <div className=" d-flex justify-content-evenly ">
        <button type="submit" className="btn btn-outline-themeButton">
          <img className="px-2" src={google} alt="" />Sign in with Google
        </button>
        <button type="submit" className="btn btn-outline-themeButton">
          <img className="px-2" src={github} alt="" />Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
