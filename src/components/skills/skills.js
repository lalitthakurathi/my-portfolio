import React from "react";
import pic2 from "./jquery.png";

import { ProgressBar } from "react-bootstrap";

export default function Skills() {
  return (
    <div className="">
      <section className="text-light  container-fluid p-0 " id="skills">
        <div className="skills-overlay pt-4 pb-5 ">
          <div className="text-center">
            <b>Skills</b>
          </div>

          <div className="row m-0 ">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="row icon-row">
                <div className="col-4">
                  <div className=" icon-wrapper ">
                    <i className="fab fa-react icon-color  fa-4x" />
                  </div>

                  <div className="ml-3">
                    {" "}
                    <small>ReactJs</small>
                  </div>
                </div>

                <div className="col-8 my-auto">
                  {" "}
                  <ProgressBar variant="secondary" animated now={85} />
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="row icon-row">
                <div className="col-4">
                  <div className=" icon-wrapper ">
                    <i className="fab fa-html5 icon-color fa-4x" />
                  </div>
                  <div className="ml-3">
                    {" "}
                    <small>HTML 5</small>
                  </div>
                </div>

                <div className="col-8 my-auto">
                  {" "}
                  <ProgressBar variant="secondary" animated now={95} />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="row icon-row">
                <div className="col-4">
                  <div className=" icon-wrapper ">
                    <i className="fab fa-js-square icon-color  fa-4x" />
                  </div>
                  <div className="ml-2">
                    {" "}
                    <small>JavaScript</small>
                  </div>
                </div>

                <div className="col-8 my-auto">
                  {" "}
                  <ProgressBar variant="secondary" animated now={75} />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="row icon-row">
                <div className="col-4">
                  <div className=" icon-wrapper ">
                    <i className="fab fa-css3-alt icon-color fa-4x" />
                  </div>
                  <div className="ml-4">
                    {" "}
                    <small>CSS</small>
                  </div>
                </div>

                <div className="col-8 my-auto">
                  {" "}
                  <ProgressBar variant="secondary" animated now={90} />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mx-auto">
              <div className="row icon-row">
                <div className="col-4">
                  <div className=" icon-wrapper ">
                    <i className="fab fa-bootstrap icon-color fa-4x" />
                  </div>
                  <div className="ml-2">
                    {" "}
                    <small>Bootstrap</small>
                  </div>
                </div>

                <div className="col-8 my-auto">
                  {" "}
                  <ProgressBar variant="secondary" animated now={95} />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mx-auto">
              <div className="row icon-row">
                <div className="col-4">
                  <div className=" icon-wrapper ">
                    <img src={pic2} alt="hami" />
                  </div>
                  <div className="ml-2">
                    {" "}
                    <small>JQuery</small>
                  </div>
                </div>

                <div className="col-8 my-auto">
                  {" "}
                  <ProgressBar variant="secondary" animated now={95} />
                </div>
              </div>
            </div>
          </div>

          {/* <img src={pic2} alt="hami" /> */}
        </div>
      </section>
    </div>
  );
}
