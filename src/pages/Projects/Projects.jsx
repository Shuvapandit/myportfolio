import React from "react";
import proj1 from "../../images/projectsimg/portone.png";
import link from "../../images/projectsimg/link.png";

function Projects() {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold ">Featured Projects</h1>
      <div className="ml-56 mr-56">
        <div class="border-b-4 border-dashed border-slate-300 mt-2 ml-96 mr-96"></div>
      </div>

      <div class="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:ml-12 ml-2 sm:ml-2 mt-4 ">
        <div className="cardproj">
          <div>
            <div class="card sm:w-full w-full lg:w-96 bg-inherit shadow-xl image-full  ">
              <figure>
                <img src="https://i.ibb.co/ZN0k96M/Screenshot-17.png" alt="portfoliooneimg" />
              </figure>
              <div class="card-body">
                <h2 class="card-title ">LetsLearn</h2>
                <p className=" overflow-y-scroll h-32">This EdTech website offers insights into course features and modules on its Home page. Students can enroll by accepting terms, signing up, and access their courses anytime through regular login or Google account authentication.</p>
                <div class="flex justify-right gap-1 my-1 w-full">
                  <kbd class="kbd bg-primary">html</kbd>
                  <kbd class="kbd bg-primary">CSS</kbd>
                  <kbd class="kbd bg-primary">React js</kbd>
                  <kbd class="kbd bg-primary">firebase</kbd>
                </div>
                <div class="card-actions justify-end">
                  <div className="">
                    <a href="https://github.com/Shuvapandit/letsLearn" target="_blank">
                      <img src={link} width="20" height="20 " />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cardproj">
          <div>
            <div class="card sm:w-full w-full lg:w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img src="https://i.ibb.co/KDKgWbg/Screenshot-12.png" alt="portfoliooneimg" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">E-shop Shop</h2>
                <p className="overflow-y-scroll h-32">The Inventory Shop is a client-side website where users can purchase products using the "bag" button and view details with the "eye" button. While checkout and bag functions are under construction, users can sign up, log in with email and password, or use Google login to access their private add-to-bag products.</p>
                <div class="flex justify-right gap-1 my-1 w-full">
                  <kbd class="kbd bg-primary">html</kbd>
                  <kbd class="kbd bg-primary">CSS</kbd>
                  <kbd class="kbd bg-primary">React js </kbd>
                  <kbd class="kbd bg-primary">firebase</kbd>
                </div>
                <div class="card-actions justify-end">
                  <div className="">
                    <a href="https://github.com/Shuvapandit/inventory_shop" target="_blank">
                      <img src={link} width="20" height="20 " />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cardproj">
          <div>
            <div class="card sm:w-full w-full lg:w-96 bg-base-100 shadow-xl image-full">
              <figure>
              {/*   <img src="https://i.ibb.co/KDKgWbg/Screenshot-12.png" alt="portfoliooneimg" /> */}
              </figure>
              <div class="card-body">
                <h2 class="card-title">Coming Soon..</h2>
                <p className="overflow-y-scroll h-32"></p>
                <div class="flex justify-right gap-1 my-1 w-full">
                  <kbd class="kbd bg-primary">..</kbd>
                  <kbd class="kbd bg-primary">..</kbd>
                  <kbd class="kbd bg-primary">..</kbd>
                  <kbd class="kbd bg-primary">..</kbd>
                </div>
                <div class="card-actions justify-end">
                  <div className="">
                   {/*  <a href="https://github.com/Shuvapandit/inventory_shop" target="_blank">
                      <img src={link} width="20" height="20 " />
                    </a> */}
                    ..
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
     
      
      </div>
    </div>
  );
}

export default Projects;
