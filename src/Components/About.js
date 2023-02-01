import React from "react";
import "./style.css";

const About = () => {
  return (
    <section id="about" className="flex p-32 max-lg:flex-col max-lg:p-4">
      <div
        className="w-1/2 flex flex-col items-center max-lg:w-full "
        data-aos="fade-up-right"
        data-aos-delay="500"
      >
        <h2 className="title -mb-8 max-lg:text-6xl max-lg:text-center">
          Discover
        </h2>
        <h4 className="sub-title z-10 max-lg:text-5xl max-lg:mt-1 max-lg:text-center">
          our store
        </h4>

        <span className="text-lg mt-12 mb-4  text-gray-400">* * *</span>

        <p className="text-center text-gray-400 text-sm px-16 leading-relaxed">
          Selamat datang di website Makan KuY restoran yang menyajikan berbagai
          makanan khas indonesia dari segala penjuru. tidak lupa juga tempat
          yang nyaman dan pelayanan yang ramah, sehingga pelanggan makan dengan
          santai di Makan KuY
        </p>

        <div className="btn-about py-8">
          <a
            href="#"
            className="uppercase border-b-2 border-black transition duration-200 hover:border-yellow-400"
          >
            About
          </a>
        </div>
      </div>
      <div
        className="w-1/2 flex justify-center max-lg:w-full"
        data-aos="fade-up-left"
        data-aos-delay="500"
      >
        <img
          src="https://demos.onepagelove.com/html/resto/img/img_1.jpg"
          alt="gambar orang"
          className="w-5/6 object-cover"
        />
      </div>
    </section>
  );
};

export default About;
