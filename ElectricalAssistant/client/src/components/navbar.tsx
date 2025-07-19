import { useState } from 'react';
import { Menu, X, Zap, Settings } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { LanguageToggle } from './language-toggle';
import { Link } from 'wouter';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
              <img 
                src="/attached_assets/22v3g5MpQ-mkSyXN95HSlQ_1752860251553.webp" 
                alt="Aadesh Electronic Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-poppins font-bold text-xl text-gray-800">Aadesh Electric Store</h1>
              <p className="text-sm text-gray-600 font-medium">Motor Repairing & Electrical Services</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-orange-500 transition-colors font-semibold px-3 py-2 rounded-lg hover:bg-orange-50"
            >
              {t('home')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-orange-500 transition-colors font-semibold px-3 py-2 rounded-lg hover:bg-orange-50"
            >
              {t('services')}
            </button>
            <button 
              onClick={() => scrollToSection('parts')}
              className="text-gray-700 hover:text-orange-500 transition-colors font-semibold px-3 py-2 rounded-lg hover:bg-orange-50"
            >
              {t('spareParts')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
            >
              {t('contact')}
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <Link href="/admin/login">
              <button className="hidden md:flex items-center space-x-1 text-gray-500 hover:text-orange-500 transition-colors">
                <Settings className="w-4 h-4" />
                <span className="text-sm">Admin</span>
              </button>
            </Link>
            <button 
              className="md:hidden text-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 py-6">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-orange-500 transition-colors font-semibold text-left px-4 py-3 rounded-lg hover:bg-orange-50"
              >
                {t('home')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-orange-500 transition-colors font-semibold text-left px-4 py-3 rounded-lg hover:bg-orange-50"
              >
                {t('services')}
              </button>
              <button 
                onClick={() => scrollToSection('parts')}
                className="text-gray-700 hover:text-orange-500 transition-colors font-semibold text-left px-4 py-3 rounded-lg hover:bg-orange-50"
              >
                {t('spareParts')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold text-left mx-4"
              >
                {t('contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
