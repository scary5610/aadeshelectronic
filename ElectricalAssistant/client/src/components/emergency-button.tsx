import { Phone, Zap } from 'lucide-react';

export function EmergencyButton() {
  const handleEmergencyCall = () => {
    window.location.href = 'tel:+918799411070';
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={handleEmergencyCall}
        className="bg-gradient-to-r from-red-500 to-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-110 animate-pulse"
        aria-label="Emergency Call"
      >
        <div className="relative">
          <Phone className="w-6 h-6" />
          <Zap className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300" />
        </div>
      </button>
      <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full animate-bounce">
        24/7
      </div>
      <div className="text-center mt-2">
        <div className="bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
          Emergency
        </div>
      </div>
    </div>
  );
}