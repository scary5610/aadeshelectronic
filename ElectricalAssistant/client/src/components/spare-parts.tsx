import { Snowflake, Plug, Cable, Wrench, Search } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function SpareParts() {
  const { t } = useLanguage();

  const parts = [
    {
      icon: Snowflake,
      title: t('applianceParts'),
      description: t('appliancePartsDesc'),
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
      color: 'bg-primary'
    },
    {
      icon: Plug,
      title: t('electricalComponents'),
      description: t('electricalComponentsDesc'),
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
      color: 'bg-secondary'
    },
    {
      icon: Cable,
      title: t('wiresCables'),
      description: t('wiresCablesDesc'),
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
      color: 'bg-accent'
    },
    {
      icon: Wrench,
      title: t('toolsEquipment'),
      description: t('toolsEquipmentDesc'),
      image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
      color: 'bg-green'
    }
  ];

  return (
    <section id="parts" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-dark mb-4">
            {t('sparePartsTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('sparePartsSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {parts.map((part, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`w-20 h-20 ${part.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <part.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-2">{part.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{part.description}</p>
              <img 
                src={part.image} 
                alt={part.title} 
                className="rounded-lg w-full h-32 object-cover shadow-md"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Don't see what you're looking for? We can source specific parts for you!</p>
          <button className="btn-primary flex items-center justify-center gap-2 mx-auto">
            <Search className="w-5 h-5" />
            {t('requestQuote')}
          </button>
        </div>
      </div>
    </section>
  );
}
