import React from "react";
import homeImg from "../assets/image/PXL_20240316_134524871.jpg";

const Hero = () => (
    <>
  <section className="py-10 md:py-16">
    <div className="container max-w-screen-xl mx-auto px-4 text-center">
      <div className="flex justify-center mb-16">
  <img src={homeImg} alt="William Joe McErlane portrait" className="rounded-full" />
      </div>
      <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">William 'Joe' McErlane</h6>
      <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">AI / Software Engineer</h1>
      <p className="font-normal text-gray-600 text-md md:text-xl mb-16">Software Engineer with 10+ years of experience, working in various fields from banking, Internet of Things, healthcare. I have a strong 
passion for learning and improving. Always in search of new challenges, be that on or offline.</p>
  <button type="button" className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Hire me</button>
    </div>
  </section>
  </>
);

export default Hero;
