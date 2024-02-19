"use client";

import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Developer from "./component/Developer/Developer";
import CountUp from "react-countup";
import HomeShow from './component/HomeShow/HomeShow';
import Business from "./component/Businesse/Business";
import Launch from './component/Launch/Launch';
import Leading from "./component/Leading/Leading";
import SliderDevelop from "./component/SliderDevelop/SliderDevelop";
// import Home from "./component/HomeVideo/HomeVideo";


export default function page() {


  return (

    <>

      <HomeShow/>
      <Developer />

      <section class="counter-wrapper py-5 mb-4">
        <Image
          src="/counter.png"
          className="imageStyle"
          style={{ height: "100%", width: "100%" }}
          fill
          alt=""
        />
      </section>

       <Leading/>
      {/* Counter */}
      <section class="counter-wrapper mb-4">
        <Image src="/counter.png" className="imageStyle" alt="" fill />
        <div class="counter-inner">
          <div class="container p-4" style={{ maxWidth: "none" }}>
            <div className="text-white text-center fs-5">WHO WE ARE</div>
            <div className="row d-flex justify-content-center ">
                <div className="col-12 col-md-3 ">
                  <div className="py-5 text-center text-white media">
                    <div>
                      <i className="bi bi-building count-icon"></i>
                    </div>
                    <div className="py-2 count fonts">
                      <div className="fontStyle fonts">Land Area Of projects</div>
                      <span className="counters">
                        <span>+</span>
                        <CountUp start={0} end={7}></CountUp>
                      </span>
                      <span className="counter-m"> M</span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3">
                  <div className="py-5 text-center text-white media">
                    <div>
                      <i className="bi bi-people count-icon"></i>
                    </div>
                    <div class="py-2 count">
                      <div className="fontStyle fonts">BUA</div>
                      <span className="counters">
                        <span>+</span>
                        <CountUp start={0} end={12}></CountUp>
                      </span>
                      <span className="counter-m"> M</span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3">
                  <div class="py-5 text-center text-white media">
                    <div>
                      <i class="bi bi-trophy count-icon"></i>
                    </div>
                    <div class="py-2 count">
                      <div className="fontStyle fonts">Years of experiance</div>
                      <span className="counters">
                        <span>+</span>
                        <CountUp start={0} end={7}></CountUp>
                      </span>
                      <span className="counter-m"> M</span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 ">
                  <div class="py-5 text-center text-white media">
                    <div>
                      <i class="bi bi-graph-up count-icon"></i>
                    </div>
                    <div class="py-2 count">
                      <div className="fontStyle fonts">Projects Completed</div>
                      <span className="counters">
                        <span>+</span>
                        <CountUp start={0} end={8}></CountUp>
                      </span>
                      <span className="counter-m"> M</span>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS TO DO */}
      <div class="Business-sec1 pt-4">
        <div className="d-flex justify-content-center align-items-center  ">
          <div className="first">1</div>
          <div className="st">st</div>
          <div className="business">in the business to do</div>
        </div>
      </div>

      <Business/>
      <Launch/>

    </>
  );
}
