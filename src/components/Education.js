import React from "react";

const educationItems = [
  {
    title: "University of Ulster, UK",
    degree: "BEng Hons Computer Games Development",
    details: [
      "1st Class Honors (4.0 GPA)",
      "Studied abroad at Dominican University",
    ],
    location: "London/Derry, UK"
  },
  {
    title: "Google",
    degree: "Gen AI Intensive Course",
    details: [
      "Week long course on gemini by Google’s ML researchers and engineers."
    ],
    location: "SF, CA"
  },
  {
    title: "CodePath",
    degree: "AI/LLM Bootcamp",
    details: [
      "6-week course learning and utilizing LLM and RAG.",
      "Created a therapist chatbot to help others identify underlying emotions as a final project."
    ],
    location: "SF, CA"
  }
];

const Education = () => (
    <>
  <section className="py-10 md:py-16">
    <div className="container max-w-screen-xl mx-auto px-4">
      <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Education</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationItems.map((item, idx) => (
          <div key={idx} className="bg-gray-50 px-8 py-10 rounded-md">
            <h4 className="font-medium text-gray-700 text-lg mb-2">{item.year}</h4>
            <h5 className="font-semibold text-gray-800 text-md mb-2">{item.title}</h5>
            <p className="font-normal text-gray-600 text-md mb-2">{item.degree}</p>
            <ul className="list-disc list-inside text-gray-500 text-sm mb-4">
              {item.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <div className="relative">
              <h6 className="font-semibold text-gray-500 text-md relative z-10">{item.location}</h6>
              <br/>
              <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  </>
);

export default Education;
