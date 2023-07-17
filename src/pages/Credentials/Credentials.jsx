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
      <div className="bubt flex flex-row mt-7">
        <div>
          <img src={bubtlogo} width="80 px" height="100 px" />
        </div>
        <div className="mt-7 ml-3">
          <div className="flex flex-row ">
            <div>
              <p className="font-semibold">
                BSc. in Computer Science & Engineering (CSE)
              </p>
            </div>
            <div className="ml-2">
              <a href="https://www.bubt.edu.bd/" target="_blank">
                <img src={link} width="14 px" height="4 px" />
              </a>
            </div>
          </div>
          <div className="flex flex-row text-slate-500 ">
            <div>
              <p>Bangladesh University of Business and Technology (BUBT)</p>
            </div>
            <div className="ml-6">
              <p>-July 2018 - July 2022</p>
            </div>
          </div>
        </div>
        <div className="zoom">
          <img src={university} />
        </div>
      </div>
      {/* bubt cre end */}
    </div>
  );
}
export default Credentials;
