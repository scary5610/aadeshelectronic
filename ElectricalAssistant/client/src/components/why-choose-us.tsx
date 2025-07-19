import { Award, Shield, Clock } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function WhyChooseUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Award,
      title: t('experience'),
      description: t('experienceDesc'),
      color: 'bg-primary'
    },
    {
      icon: Shield,
      title: t('quality'),
      description: t('qualityDesc'),
      color: 'bg-secondary'
    },
    {
      icon: Clock,
      title: t('quickService'),
      description: t('quickServiceDesc'),
      color: 'bg-accent'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-dark mb-4">
            {t('whyChooseTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('whyChooseSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-20 h-20 ${reason.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <reason.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Customer Testimonial Style Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <blockquote className="text-xl font-medium mb-4">
              "Excellent service! Fixed my water pump motor in just 2 hours. Very reliable and honest pricing."
            </blockquote>
            <cite className="text-sm opacity-90">- Happy Customer from Palitana</cite>
          </div>
        </div>
      </div>
    </section>
  );
}
