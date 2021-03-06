import React from "react";
import Fade from "react-reveal/Fade";

import pic3 from "./lalit.png";

export default function About() {
  return (
    <div className="">
      <section className="about border  container-fluid">
        <div className="text-center text-light pt-3 pb-2 mx-auto">
          {" "}
          <b>About Me</b>
        </div>
        <div className="row about-overlay px-3 p-4">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-5 mt-0 my-auto">
            <img src={pic3} alt="" className="img-fluid align-pic" />
          </div>

          <Fade bottom>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-7 mt-2 text-light my-auto about-padding text-center">
              <h5>
                {" "}
                Hi, I am Lab Raj Thakurathi a Front-End-Developer based on San
                Francisco Bay Area. Focused on developing pixel perfect
                responsive UI's. I believe in power of Visual representation,
                hence been working as a front-end-developer for over 2 years.
              </h5>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}
