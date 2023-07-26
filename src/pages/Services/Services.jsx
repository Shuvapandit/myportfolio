import React from "react";
import html from "../../images/servicesimg/html.png";
import frontend from "../../images/servicesimg/front-end.png";
import reactjs from "../../images/servicesimg/reactjs.png";
function Services() {
  return (
    <div className="mt-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-3">
        <div className="gd1">
          <div class="card w-80  bg-base-100 shadow-2xl hover:bg-blue-50 ">
            <figure class="px-10 pt-10">
              <img
                src={html}
                width="40"
                height="40"
                alt="psdtohtml"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">PSD TO HTML</h2>
              <p>
                I will convert your PSD to HTML5 with Latest Bootstrap. It will
                be fully responsive. Pixel-perfect code and fresh hand code are
                my power. If you have any design or idea I can make it a
                website.
              </p>
            </div>
          </div>
        </div>
        <div className="gd2">
          <div class="card w-80 bg-base-100 shadow-2xl hover:bg-blue-50">
            <figure class="px-10 pt-10">
              <img
                src={frontend}
                width="50"
                height="50"
                alt="psdtohtml"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">FRONT-END DEVELOPER</h2>
              <p>
                I’m a Front End Web developer who is passionate about making
                error-free websites with 100% client satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div className="gd3">
          <div class="card w-80 bg-base-100 shadow-2xl hover:bg-blue-50">
            <figure class="px-10 pt-10">
              <img
                src={reactjs}
                width="50"
                height="50"
                alt="psdtohtml"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">REACT JS DEVELOPER</h2>
              <p className="">
                As a React.js developer, I build efficient and dynamic user
                interfaces with reusable components, delivering seamless web
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
