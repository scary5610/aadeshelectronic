import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { CtaSection } from '@/components/cta-section';
import { SpareParts } from '@/components/spare-parts';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { EmergencyButton } from '@/components/emergency-button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <CtaSection />
      <SpareParts />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <EmergencyButton />
    </div>
  );
}
