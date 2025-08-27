import React, { useEffect, useState } from 'react';
import { ChevronDown, Code2,Clipboard } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCopy,setIsCopy] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Frontend Developer',
    'React Developer',
    'Continuous Learner' 
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail =  () => {
    navigator.clipboard.writeText("fm792086@gmail.com")
    setIsCopy(true)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                <Code2 size={48} className="text-blue-600" />
              </div>
            </div>
          </div>

          <div className={`mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-4">
              ¡Hola! Soy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Frank
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-6 h-12 flex items-center justify-center">
              <span className="animate-fade-in-out">
                {roles[currentRole]}
              </span>
            </div>
          </div>

          <div className={`mb-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Desarrollador frontend apasionado por crear experiencias web extraordinarias. 
              
            </p>
          </div>

          <div className={`mb-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex justify-center items-center space-x-2">
                  
                <div className=" p-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center ">
                <span className="text-sm  text-slate-600 dark:text-slate-400 ">fm792086@gmail.com</span>
                </div >

              <div className="flex flex-row  items-center  group">
                  <div className=" p-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                  <Clipboard className={isCopy ? 'text-green-600 ' : `text-blue-600`}  size={20} onClick={copyEmail} />

                </div>

              </div>
              

           
            </div>
          </div>

          <div className={`mb-16 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToAbout}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Conoce mi trabajo
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl font-semibold border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contáctame
              </button>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-slate-400 hover:text-blue-600 transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;