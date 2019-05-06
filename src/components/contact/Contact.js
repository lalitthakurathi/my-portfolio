import React from "react";
import Fade from "react-reveal/Fade";

export default function Contact() {
  return (
    <div className="contact-sec text-light p-3" id="contact">
      <div className="text-center">
        {" "}
        <b>Contact</b>
      </div>

      <section>
        <form method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        {/* <form
          name="contact"
          action=""
          className="form-group "
          method="POST"
          data-netlify="true"
        >
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <Fade bottom>
                <div className="my-4">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    name="first_name "
                    id="fName"
                    placeholder="*"
                    className="form-control border-top-0 border-left-0 border-right-0"
                  />
                </div>
              </Fade>
              <Fade bottom>
                <div className="my-4">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    name="last_name "
                    id="lName"
                    placeholder="*"
                    className="form-control border-top-0 border-left-0 border-right-0"
                  />
                </div>
              </Fade>
              <Fade bottom>
                <div className="my-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email "
                    id="email"
                    placeholder="*"
                    className="form-control border-top-0 border-left-0 border-right-0"
                  />
                </div>
              </Fade>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <Fade bottom>
                <div className="my-4">
                  {" "}
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="*"
                    className="form-control border-top-0 border-left-0 border-right-0"
                  />
                </div>
              </Fade>
              <Fade bottom>
                <div className="my-4">
                  <label htmlFor="messege">Your Messege</label>
                  <textarea
                    type="text-area"
                    rows="5"
                    cols="50"
                    placeholder="*"
                    className="form-control"
                    name="messege"
                  />
                </div>
              </Fade>

              <div className="d-flex justify-content-end">
                <Fade bottom>
                  <button
                    className="btn btn-info btn-margin py-2 px-5 d-flex justify-content-end align-items-end"
                    href="#projects"
                    type="submit"
                    value="Send"
                  >
                    Submit
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </form> */}
      </section>
    </div>
  );
}