import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Frank<span className="text-blue-400">Dev</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              Desarrollador frontend especializado en crear experiencias web modernas y funcionales. 
              Siempre en busca de nuevos desafíos y oportunidades para crecer.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:fm792086@gmail.com"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Sobre mí
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Proyectos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-slate-300">
              <li>fm792086@gmail.com</li>
              <li>+51 933 883 344</li>
              <li>Lima , Perú</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-slate-400 mb-4 md:mb-0">
              <span>© {currentYear} FrankDev. Hecho con</span>
              <Heart className="text-red-500" size={16} />
              <span>por Frank Mendoza</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors duration-300"
            >
              <ArrowUp size={16} />
              <span>Volver arriba</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;