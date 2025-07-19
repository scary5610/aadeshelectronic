import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function CtaSection() {
  const { t } = useLanguage();

  const handleCall = () => {
    window.location.href = 'tel:+918799411070';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918799411070', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-4 border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Need Electrical Help Right Now?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Don't wait! Our expert electricians are ready to solve your problems immediately.
            Available 24/7 for emergency services in Palitana.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Call Instantly</h3>
              <p className="text-sm opacity-90">Direct line to our experts</p>
              <p className="font-bold mt-2">+91 87994 11070</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">WhatsApp Chat</h3>
              <p className="text-sm opacity-90">Quick response guaranteed</p>
              <p className="font-bold mt-2">Message Now</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Visit Our Shop</h3>
              <p className="text-sm opacity-90">Located in Palitana market</p>
              <p className="font-bold mt-2">Shop No. 12</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={handleCall}
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Call Now: +91 87994 11070
            </button>
            <button 
              onClick={handleWhatsApp}
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Now
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg font-medium">
              ⚡ Emergency Response Time: <span className="text-yellow-300 font-bold">Under 2 Hours</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}