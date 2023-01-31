import React, { useEffect } from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section id="home">
      <div className="bg-home">
        <div
          data-aos="fade-up"
          className=" h-screen flex  flex-col justify-center items-center"
        >
          <h2
            className=" title  text-yellow-600 -mb-8 max-lg:text-7xl"
            data-aos="fade-down"
            data-aos-delay="1000"
          >
            Welcome
          </h2>
          <h4 className="sub-title z-10 text-white max-lg:text-4xl max-lg:mt-1">
            The resto
          </h4>
          <p className="text-white text-lg py-2 max-lg:text-sm max-lg:text-center max-lg:px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            reprehenderit?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
