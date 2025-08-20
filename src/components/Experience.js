

import React from "react";

const skills = [
  { category: "Languages", items: ["Java", "Golang", "Python", "PHP", "Javascript", "Typescript", "C#", "SQL"] },
  { category: "Platforms", items: ["Unix", "Linux", "Mac", "Windows"] },
  { category: "Architecture", items: ["REST", "SASS", "BUS", "ETL", "AWS Lambda", "MVC"] },
  { category: "Databases", items: ["Mongo", "Postgres", "Oracle", "Redis", "Netezza", "DynamoDB"] },
  { category: "Misc", items: ["Docker", "Ruby on Rails", "Git", "Nodejs", "Bash", "Unity"] },
  { category: "AI", items: ["Langchain", "gemini"] }
];

const SkillsChart = () => (
  <section className="py-10 md:py-16">
    <div className="container max-w-screen-xl mx-auto px-4">
      <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Skills Chart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-gray-50 px-8 py-10 rounded-md">
            <h4 className="font-semibold text-gray-700 text-lg mb-4">{skill.category}</h4>
            <ul className="list-disc list-inside text-gray-500 text-md">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsChart;
