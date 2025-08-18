import React from "react";
import * as Icons from "react-feather";
import { Twitter, Dribbble, Facebook, Codepen, AtSign, Instagram } from "react-feather";

const socials = [
  { icon: <Twitter />, href: "#" },
  { icon: <Dribbble />, href: "#" },
  { icon: <Facebook />, href: "#" },
  { icon: <Codepen />, href: "#" },
  { icon: <AtSign />, href: "#" },
  { icon: <Instagram />, href: "#" }
];

const Footer = () => (
  <footer className="py-10 md:py-16 mb-20 md:mb-40 lg:mb-52">
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="text-center">
        <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-5">Contact</h1>
        <p className="font-normal text-gray-400 text-md md:text-lg mb-20">I’m not currently taking on new client work but feel free to contact me for any <br /> other inquiries.</p>
        <div className="flex items-center justify-center space-x-8">
          {socials.map((social, idx) => (
            <a key={idx} href={social.href} className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <span className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
