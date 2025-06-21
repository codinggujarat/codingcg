import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';
import RightSection from '../subcomponents/RightSection';
import { projects } from "../data/projectData";

const Contactus = () => {
  const sourceProjects = projects;

  const reversedProjects = [...sourceProjects].reverse();

  const contactItems = [
    {
      icon: <FiMail size={24} className="text-[#D44638]" />, // Gmail red
      title: 'Email',
      subtitle: 'iam.amanayak@gmail.com',
      link: 'mailto:iam.amanayak@gmail.com',
    },
    {
      icon: <FaLinkedinIn size={24} className="text-[#0077B5]" />, // LinkedIn blue
      title: 'LinkedIn',
      subtitle: 'Connect with me',
      link: 'https://www.linkedin.com/in/amanayak/',
    },
    {
      icon: <FaGithub size={24} className="text-black" />, // GitHub stays white
      title: 'GitHub',
      subtitle: 'Check out my code',
      link: 'https://github.com/codinggujarat',
    }
    ,
    {
      icon: <FaYoutube size={24} className="text-[#FF0000]" />, // YouTube red
      title: 'YouTube',
      subtitle: 'Watch my tutorials',
      link: 'https://www.youtube.com/@codinggujarat',
    }
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-0">
      {/* Section Title */}
      <div
        className="text-center my-10 group"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <h1 className="text-3xl md:text-4xl font-medium text-[#4553e7] capitalize tracking-wide cursor-pointer">
          contact us
        </h1>
        <div className="mt-2 mx-auto border-b-4 border-[#4553e7] w-24 transition-all duration-300 group-hover:w-40" />
      </div>

      {/* Projects Section */}

      <div className="flex flex-col lg:flex-row gap-8">
        
        <div className="w-full lg:w-2/3">
          
          
          <div className="min-h-screen  text-black flex items-top justify-start pb-6">
            <div className="space-y-4 w-full max-w-lg">
              <div className="relative mb-6">
                <div className="inline-block bg-black text-white px-4 py-1 uppercase text-sm tracking-widest font-semibold z-10 relative">
                  contact us
                </div>
                <div className="absolute left-0 bottom-0 w-full h-0.5 bg-black" />
              </div>
              {contactItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-5 border border-gray-700 rounded-md bg-gray-600/20 hover:border-black hover:scale-102 hover:border- transition-transform"
                >
                  <div className="text-black">{item.icon}</div>
                  <a href={item.link} className='' target='_blank'>
                    <div>
                      <h4 className="text-sm font-bold">{item.title}</h4>
                      <p className="text-sm text-black">{item.subtitle}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {reversedProjects.length > 0 && (
          <RightSection featured={reversedProjects[0]} />
        )}
      </div>
    </div>
  );
};

export default Contactus;
