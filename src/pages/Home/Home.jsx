import Typewriter from "typewriter-effect";
import bgimg from "../../images/coding.gif";
import profilep from "../../images/profilepic.jpg";
import cvlogo from "../../images/resume24.png";
import location from "../../images/location.png";
import "./Home.css";
import Professionalism from "../Professionalism/Professionalism";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Teach from "../Teach/Teach";
import Contact from "../Contact/Contact";
import Map from "../Map/Map";
import Credentials from "../Credentials/Credentials";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
function Home() {
  return (
    <div>
      <div className=" -space-y-9">
        <div>
          <img className="bgimgwh" src={bgimg}></img>
        </div>

        <div className="named flex flex-row">
          {/*  nav start */}
          <div className=" navtop ml-2 ">
            <div class="navbar-start  ">
              <div class="dropdown ">
                <label tabindex="0" class="btn  btn-neutral  btn-circle ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
                <ul
                  tabindex="0"
                  class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  text-white text-7xl font-medium rounded-box w-52"
                >
                  <li>
                    <a href="#">Home ()</a>
                  </li>
                  <li>
                    <a href="#about">About () </a>
                  </li>
                  <li>
                    <a href="#services"> Services () </a>
                  </li>
                  <li>
                    <a href="#contact">Contact () </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* nav end */}
          <div class="avatar lg:ml-12 -ml-14 sm:-ml-14">
            <div class="w-36 rounded-full">
              <img src={profilep} />
            </div>
          </div>
          <div className="mt-14 lg:ml-3 ">
            <div className="font-semibold text-2xl ">
              {/* typewriter start */}
              <Typewriter
                options={{
                  strings: ["Shuva Chakraborty", "Shuva Chakraborty"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            {/* typewriter end */}
            <div className="flex flex-row">
              <div>
                <img src={cvlogo}></img>
              </div>
              <div className="font-normal text-base">
                <a
                  href="https://drive.google.com/file/d/16WRxXyvu5jRydhHkdGOThoeg-2Xe0txf/view?usp=sharing"
                  target="_blank"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div>
          {/* email part start */}
          <div className="lg:ml-28 ml-3 sm:ml-3">
            <p>
              <a href="mailto:chakrabortyshuva216@gmail.com">
                chakrabortyshuva216@gmail.com
              </a>
            </p>
          </div>
          {/*  email part end */}
        </div>
        <div>
          <div className="flex flex-row lg:ml-5">
            <div>
              <img src={location}></img>
            </div>
            <div>
              <p className="text-base">Dhaka,Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-slate-500 text-xl lg:ml-28 ml-3 sm:ml-3">
        Front-end developer.
      </p>
      <div className="proflism lg:ml-28 ml-3 sm:ml-3 mt-12">
        <Professionalism />
      </div>
      <div className="Aboutsection lg:ml-28 ml-3 sm:ml-3 " id="about">
        <About />
      </div>
      {/*   hr line */}
      <div class="border-b-2 border-slate-300 mt-9 ml-28 mr-20"></div>
      <div className="TeachSection lg:ml-28 ml-3 sm:ml-3">
        <Teach />
      </div>
      {/*   hr line */}
      <div class="border-b-2 border-slate-300 mt-9 ml-28 mr-20"></div>
      <div className="credentialsection lg:ml-28 ml-3 sm:ml-3">
        <Credentials />
      </div>
      {/*   hr line */}
      <div class="border-b-2 border-slate-300 mt-9 ml-28 mr-20"></div>
      <div id="services">
        <p className="text-center mt-5 text-2xl font-semibold">Services</p>
        <p className="text-center text-slate-500 text-xl font-semibold mt-3">
          What I will do for you?
        </p>
        <div className="ml-28 mr-28">
          <Services />
        </div>
      </div>
      {/*   hr line */}
      <div class="border-b-2 border-slate-300 mt-9 ml-28 mr-20"></div>
      <div className="fprojects mt-6 ">
        <Projects />
      </div>
      {/*   hr line */}
      <div class="border-b-2 border-slate-300 mt-9 ml-28 mr-20"></div>
      <div className="contact " id="contact">
        <p className="text-center text-2xl font-semibold mt-5">GET IN TOUCH!</p>
        <p className="text-center terxt-base ">
          Please email at{" "}
          <a
            className="text-red-600"
            href="mailto:chakrabortyshuva216@gmail.com"
          >
            chakrabortyshuva216@gmail.com{" "}
          </a>{" "}
          for any business queries
        </p>
        <div className="ml-28 ">
          <Contact />
        </div>
      </div>
      <div className="mapsection">
        <Map />
      </div>
      <div className="footersection  mbottom ">
        <Footer />
      </div>
    </div>
  );
}
export default Home;
