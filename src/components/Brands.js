import React from "react";
import brand1 from "../assets/image/companies/23andMe-Logo.wine.png";
import brand2 from "../assets/image/companies/LOGO CITIBANK.png";
import brand3 from "../assets/image/companies/Dice.png";
import brand4 from "../assets/image/companies/R.png";
import brand5 from "../assets/image/companies/pngwing.com.png";
import brand6 from "../assets/image/companies/lemon.png";
import brands7 from "../assets/image/companies/BetterHelp.png";




const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brands7];



const Brands = () => (
  <section className="py-10 md:py-16">
    <div className="container max-w-screen-xl mx-auto px-4">
      <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Brands</h1>
      <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">Below is a summary of brands I have worked with or for</p>
      <div className="flex flex-wrap justify-center gap-12 items-center">
        {brands.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="Brand"
            className="object-contain w-56 h-56 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 bg-white p-4"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Brands;
