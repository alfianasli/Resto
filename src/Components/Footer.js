/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <section id="footer " className="max-lg:flex-col max-lg:w-full">
      <div className="flex py-14 h-3/4 bg-slate-700">
        <div className="flex flex-col justify-center px-20 w-full max-lg:px-4">
          <h2 className=" w-1/2 text-base uppercase tracking-widest text-white">
            Location
          </h2>
          <div className="flex flex-row  flex-wrap py-2 text-gray-400">
            <h4 className="text-base tracking-wide uppercase m-5">
              Serang Baru, Bekasi, West Java
            </h4>
            <h4 className="text-base tracking-wide uppercase m-5">
              Bandung, West Java
            </h4>
            <h4 className="text-base tracking-wide uppercase m-5">
              Surabaya, Central Java
            </h4>
            <h4 className="text-base tracking-wide uppercase m-5">
              Cikarang, West Java
            </h4>
          </div>
          <div className="flex flex-col justify-center  w-full max-lg:px-1">
            <h2 className=" w-1/2 text-base uppercase tracking-widest text-white">
              Open Hours
            </h2>
            <div className=" flex flex-row flex-wrap py-2 text-gray-400">
              <h4 className="text-base tracking-wide uppercase m-3">
                Mon-Wed 10:00-20:00 WIB
              </h4>
              <h4 className="text-base tracking-wide uppercase m-3">
                Thu 10:00-21:00 WIB
              </h4>
              <h4 className="text-base tracking-wide uppercase m-3">
                Fri 13:00-22:00 WIB
              </h4>
              <h4 className="text-base tracking-wide uppercase m-3">
                Weekend 10:00-18:00 WIB
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center copyright w-full h-1/4 py-10 px-20 bg-black text-gray-500">
        <h1>
          <span className="text-gray-400">&#169;2022</span> MakanKuy{" "}
          <span className="text-gray-400">All Rights Reserved. Images by</span>{" "}
          GraphicBurger & Unsplash
        </h1>
      </div>
    </section>
  );
};

export default Footer;
