import React from "react";
import "../Footer/Footer.css";
import linkedin from "../../images/footerimg/linkedin.png";
import github from "../../images/footerimg/github.png";
import facebook from "../../images/footerimg/facebook.png";
import arrow from "../../images/footerimg/arrow.png";
import Wave from "react-wavify";
function Footer() {
  return (
    <div className="marginbottom ">
      <footer class="footer items-center p-10  text-base-content bg-blue-50">
        <div class="items-center grid-flow-col">
          <p>Copyright © 2023 Shuva Chakraborty</p>
        </div>
        <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://www.linkedin.com/in/shuvacb/"
            target="_blank"
          >
            <img src={linkedin}></img>
          </a>
          <a href="https://github.com/Shuvapandit" target="_blank">
            <img src={github}></img>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100009952750113"
            target="_blank"
          >
            <img src={facebook}></img>
          </a>
        </div>
      </footer>

     
    </div>
  );
}

export default Footer;
