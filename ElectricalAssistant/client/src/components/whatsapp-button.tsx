import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918799411070', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-colors hover:scale-110 transform duration-200"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
