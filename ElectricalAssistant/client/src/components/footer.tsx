import { Zap, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { key: 'home', section: 'home' },
    { key: 'services', section: 'services' },
    { key: 'spareParts', section: 'parts' },
    { key: 'contact', section: 'contact' },
  ];

  const serviceLinks = [
    { key: 'motorRepairOption', href: '#' },
    { key: 'fanRepairOption', href: '#' },
    { key: 'houseWiring', href: '#' },
    { key: 'waterPumpService', href: '#' },
  ];

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Zap className="text-white w-5 h-5" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl">Aadesh Electric</h3>
                <p className="text-gray-400 text-sm">Motor Repairing</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">{t('footerTagline')}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/918799411070" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="hover:text-white transition-colors"
                  >
                    {t(link.key as any)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">{t('services')}</h4>
            <ul className="space-y-2 text-gray-400">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {t(link.key as any)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">{t('contactInfo')}</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <span>📍</span> Palitana, Gujarat
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span> +91 87994 11070
              </p>
              <p className="flex items-center gap-2">
                <span>🕒</span> 24/7 Service
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
