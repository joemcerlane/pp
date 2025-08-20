import React from "react";
// ...existing code...

const Footer = () => (
  <footer className="py-10 md:py-16 mb-20 md:mb-40 lg:mb-52">
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="text-center">
        <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-5">Contact</h1>
        <p className="font-normal text-gray-400 text-md md:text-lg mb-20">I’m open to new opportunities and collaborations reach me here <a href="mailto:joemcerlane@gmail.com" className="text-gray-600 hover:underline">here</a>.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
