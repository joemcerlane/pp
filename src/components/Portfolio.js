import React from "react";

const portfolioItems = [
  {
    number: "01",
    title: "2FA hardware key",
    desc: "Designed created and implemented a 2FA hardware key integration solution using the FIDO2 standard"
  },
  {
    number: "02",
    title: "Automated API Testing",
    desc: "Scriptable Integration Tests: Using Postman and Newman to create a robust automated testing framework for APIs"
  },
  {
    number: "03",
    title: "Content Repository Service",
    desc: "Created a content repository service using Java Spring and MongoDB used to store user files and photos"
  }
];

const Portfolio = () => (
    <>
  <section className="py-10 md:py-16">
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="mb-10 lg:mb-0">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Portfolio</h1>
          <p className="font-normal text-gray-500 text-xs md:text-base">Some fun things I got to make as a professional.</p>
        </div>
        <div className="space-y-24">
          {portfolioItems.map((item, idx) => (
            <div key={idx} className="flex space-x-6">
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">{item.number}</h1>
              <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
              <div>
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">{item.title}</h1>
                <p className="font-normal text-gray-500 text-sm md:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  </>
);

export default Portfolio;
