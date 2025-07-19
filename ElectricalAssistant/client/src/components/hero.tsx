import { Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function Hero() {
  const { t } = useLanguage();

  const handleCallNow = () => {
    window.location.href = 'tel:+918799411070';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918799411070', '_blank');
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-red-400 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                ⚡ 24/7 Emergency Service Available
              </span>
            </div>
            
            <h1 className="font-poppins font-bold text-5xl lg:text-7xl mb-6 leading-tight">
              <span className="block text-yellow-300">AADESH</span>
              <span className="block text-white">ELECTRIC</span>
              <span className="block text-orange-300 text-3xl lg:text-4xl">STORE</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-lg">
              Professional Motor Repair & Electrical Services in Palitana, Gujarat
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">13+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">500+</div>
                <div className="text-sm">Motors Fixed</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleCallNow}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Call: +91 87994 11070
              </button>
              <button 
                onClick={handleWhatsApp}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Now
              </button>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Service Cards */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Motor Repair</h3>
                <p className="text-sm opacity-80">Expert motor rewinding & repair services</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Home Wiring</h3>
                <p className="text-sm opacity-80">Complete electrical wiring solutions</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💧</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Water Pump</h3>
                <p className="text-sm opacity-80">Pump installation & repair service</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
                <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Emergency</h3>
                <p className="text-sm opacity-80">24/7 emergency repair services</p>
              </div>
            </div>

            {/* Floating contact info */}
            <div className="mt-8 bg-white/20 backdrop-blur-lg rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-4 text-center">📍 Visit Our Store</h4>
              <p className="text-sm text-center opacity-90">
                Saddi bhuvan no khacho shop no.12<br/>
                Palitana taleti, Palitana, Bhavnagar<br/>
                Gujarat - 364270
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-xs mt-2 text-center">Scroll down</p>
        </div>
      </div>
    </section>
  );
}
