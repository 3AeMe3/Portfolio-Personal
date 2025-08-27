import React, { useEffect, useState } from "react";
import { Award, Coffee } from "lucide-react";

import reactDark from "../assets/icons/React_dark.svg";
import astro from "../assets/icons/Astro_dark.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import css from "../assets/icons/css_old.svg";
import figma from "../assets/icons/figma.svg";
import github from "../assets/icons/GitHub_dark.svg";
import html5 from "../assets/icons/html5.svg";
import javaScript from "../assets/icons/javascript.svg";
import tailwind from "../assets/icons/tailwindcss.svg";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    {
      name: "HTML 5",
      icon: html5,
      size: "w-9",
      bgColor: "bg-[#E34F26]/80 dark:bg-[#FF7A45]",
    },
    {
      name: "CSS",
      icon: css,
      size: "w-10",
      bgColor: "bg-[#1572B6]/80 dark:bg-[#1E88E5]",
    },
    {
      name: "JavaScript",
      icon: javaScript,
      color: "text-yellow-500",
      bgColor: "bg-[#F7DF1E] dark:bg-[#F7DF1E]",
    },
    {
      name: "React",
      icon: reactDark,
      size: "w-10",
      bgColor: "bg-[#1A1A1A]/90 dark:bg-[#1E293B]",
    },
    {
      name: "Tailwind",
      icon: tailwind,
      size: "w-10",
      bgColor: "bg-[#1A1A1A]/90 dark:bg-[#1E293B]",
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
      size: "w-12",
      bgColor: "bg-[#1A1A1A]/90 dark:bg-[#1E293B]",
    },
    {
      name: "Astro",
      icon: astro,
      size: "w-8",
      bgColor: "bg-[#000000] dark:bg-[#1A1A1A]",
    },
    {
      name: "GitHub",
      icon: github,
      size: "w-8",
      bgColor: "bg-[#000000] dark:bg-[#1A1A1A]",
    },
    {
      name: "Figma",
      icon: figma,
      size: "w-8",
      bgColor: "bg-[#000000] dark:bg-[#1A1A1A]",
    },
  ];

  const stats = [
    { icon: Award, value: "1+", label: "Años de experiencia" },
    { icon: Coffee, value: "100+", label: "Tazas de café" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Sobre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Mí
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Soy un desarrollador frontend autodidacta
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                  Soy un desarrollador frontend autodidacta con un enfoque
                  obsesivo por los detalles y una mentalidad de crecimiento
                  constante. Desde hace un año vengo creando interfaces web
                  modernas, buscando siempre equilibrar estética y
                  funcionalidad. Trabajo principalmente con{" "}
                  <strong> HTML, CSS , JavaScript y React </strong> y tengo
                  planeado seguir aprendiendo herramientas como{" "}
                  <strong> Next.js y TypeScript</strong> .
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Me apasiona construir experiencias que no solo se vean bien,
                  sino que también se sientan bien al usarlas. Busco formar
                  parte de un equipo donde pueda aportar valor, seguir creciendo
                  y aprender de personas que estén tan comprometidas como yo :).
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300"
                  >
                    <stat.icon
                      className="mx-auto mb-3 text-blue-600"
                      size={32}
                    />
                    <div className="text-3xl font-bold text-slate-800 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">
                Stack Tecnológico
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`flex flex-col items-center p-4 rounded-xl ${
                      tech.bgColor
                    } transform hover:scale-105 transition-all duration-300 group ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`flex justify-center items-center w-12 h-12 ${tech.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <img src={tech.icon} alt="" className={`${tech.size}`} />
                    </div>
                    <span className="text-sm font-medium text-white dark:text-white text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
