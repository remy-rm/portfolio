import  { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-2xl font-bold bg-gradient-to-r from-frandroid-pink via-frandroid-blue to-frandroid-green bg-clip-text text-transparent">
            RM
          </span>
          
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex gap-8">
            {[
              { id: 'about', label: 'À Propos' },
              { id: 'projects', label: 'Projets' },
              { id: 'skills', label: 'Compétences' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <div key={item.id} className="group relative">
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className="py-2 text-gray-700 font-medium hover:text-frandroid-blue transition-colors"
                >
                  {item.label}
                </button>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-100">
                  <div className="h-full bg-gradient-to-r from-frandroid-pink to-frandroid-blue w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white">
            {[
              { id: 'about', label: 'À Propos' },
              { id: 'projects', label: 'Projets' },
              { id: 'skills', label: 'Compétences' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-frandroid-blue hover:bg-gray-50 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;