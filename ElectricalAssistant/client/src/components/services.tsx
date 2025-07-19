import { Settings, Fan, Home, Droplets, AlertTriangle, Wrench, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Settings,
      title: t('motorRepair'),
      description: t('motorRepairDesc'),
      color: 'bg-primary'
    },
    {
      icon: Fan,
      title: t('fanRepair'),
      description: t('fanRepairDesc'),
      color: 'bg-secondary'
    },
    {
      icon: Home,
      title: t('homeElectrical'),
      description: t('homeElectricalDesc'),
      color: 'bg-accent'
    },
    {
      icon: Droplets,
      title: t('waterPump'),
      description: t('waterPumpDesc'),
      color: 'bg-green'
    },
    {
      icon: AlertTriangle,
      title: t('emergency'),
      description: t('emergencyDesc'),
      color: 'bg-red-500'
    },
    {
      icon: Wrench,
      title: t('maintenance'),
      description: t('maintenanceDesc'),
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            🔧 Our Professional Services
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            Expert Electrical Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From motor repairs to complete electrical installations, we provide reliable services with 13+ years of experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group hover:scale-105 transition-transform duration-300">
              <div className={`icon-circle ${service.color} mb-4 shadow-lg`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">Our Achievement Numbers</h3>
            <p className="text-gray-300">Trusted by customers across Palitana</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-sm text-gray-300 font-medium">Motors Repaired</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300 font-medium">Emergency Service</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-blue-400 mb-2">13+</div>
              <div className="text-sm text-gray-300 font-medium">Years Experience</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-red-400 mb-2">100%</div>
              <div className="text-sm text-gray-300 font-medium">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
