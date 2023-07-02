import React from "react";
import Typewriter from "typewriter-effect";
import bgimg from "../../images/coding.gif";
import profilep from "../../images/profilepic.jpg";
import cvlogo from "../../images/resume24.png";
import location from "../../images/location.png";
import "./Home.css";
import Professionalism from "../Professionalism/Professionalism";
function Home() {
  return (
    <div>
      <div className=" -space-y-9">
        <div>
          <img className="bgimgwh" src={bgimg}></img>
        </div>
        <div className="named flex flex-row">
          <div class="avatar ml-28">
            <div class="w-36 rounded-full">
              <img src={profilep} />
            </div>
          </div>
          <div className="mt-14 ml-3 ">
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
                  href="https://drive.google.com/file/d/1uuwKBKD6-2rh0s7kCDAEAr17pcZZpDYy/view"
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
          <div className="ml-28">
            <p>
              <a href="mailto:chakrabortyshuva216@gmail.com">
                chakrabortyshuva216@gmail.com
              </a>
            </p>
          </div>
          {/*  email part end */}
        </div>
        <div>
          <div className="flex flex-row ml-5">
            <div>
              <img src={location}></img>
            </div>
            <div>
              <p  className="text-base">Dhaka,Bangladesh</p>
            </div>
          </div>
         
        </div>
        
      </div>
      <p className="text-slate-500 text-xl ml-28">Front-end developer.</p>
      <div className="proflism ml-28 mt-12">
      <Professionalism/>
      </div>
      

    
    </div>
  );
}

export default Home;