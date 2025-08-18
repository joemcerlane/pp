import React from "react";
import { Activity, Codesandbox, Coffee } from "react-feather";

const features = [
  {
    icon: <Activity />,
    title: "High experience",
    desc: "Cross industry experience in fields including banking, IoT, and healthcare."
  },
  {
    icon: <Codesandbox />,
    title: "Useful sandboxes",
    desc: "I play around in code agnostic to technology stack."
  },
  {
    icon: <Coffee />,
    title: "Self-motivated",
    desc: "Being proactive and taking initiative in projects. Be it as a individual contributor or leading a team."
  }
];

const Features = () => (
    <>
  <section className="py-10 md:py-16">
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-gray-50 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4 text-gray-700">
              {feature.icon}
            </div>
            <h4 className="font-medium text-gray-700 text-lg mb-4">{feature.title}</h4>
            <p className="font-normal text-gray-500 text-md">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  </>
);

export default Features;
