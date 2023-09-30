import React from "react";
import "./Credentials.css";
import bubtlogo from "../../images/credintialimg/bubtlogo.png";
import link from "../../images/credintialimg/link.png";
import university from "../../images/credintialimg/university.jpg";
function Credentials() {
  return (
    <div>
      <p className="text-xl font-semibold font-serif mt-3">Credential</p>
      {/* bubt cre Start */}
      <div className="bubt flex flex-row mt-7 ">
        <div className="mt-12 sm:mt-12 lg:mt-0">
          <img src={bubtlogo} width="80 px" height="100 px" />
        </div>
        <div className="mt-7 ml-3">
          <div className="flex flex-row ">
            <div>
              <p className="lg:font-semibold font-medium sm:font-medium">
                BSc. in Computer Science & Engineering (CSE)
              </p>
            </div>
            <div className="lg:ml-2 ml-1 sm:ml-1 mt-2 sm:mt-2 lg:mt-0">
              <a href="https://www.bubt.edu.bd/" target="_blank">
                <img src={link} width="12 px" height="3 px" />
              </a>
            </div>
          </div>
          <div className="lg:flex lg:flex-row text-slate-500 ">
            <div>
              <p>Bangladesh University of Business and Technology (BUBT)</p>
            </div>
            <div className="lg:ml-6">
              <p>-July 2018 - July 2022</p>
            </div>
          </div>
        </div>
        <div className="zoom mt-12 sm:mt-12 lg:mt-0">
          <img src={university} />
        </div>
      </div>
      {/* bubt cre end */}
    </div>
  );
}
export default Credentials;
