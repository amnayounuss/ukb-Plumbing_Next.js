// File: src/app/services/[serviceName]/page.tsx
import { NextPage } from 'next';
import { notFound } from 'next/navigation';
import { getServiceMetadata } from '@/utils/metadataHelpers';
import { servicesList } from '@/data/servicesData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import CallToAction from '@/components/CallToAction';
import ServicesHero from '@/components/ServicesHero';

interface Props {
  params: { serviceName: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: Props) {
  return getServiceMetadata(params.serviceName);
}

const ServicePage: NextPage<Props> = ({ params }) => {
  const service = servicesList.find((s) => s.slug === params.serviceName);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServicesHero
        title={service.title}
        description={service.description}
        image={service.image}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-ukb-darkblue">About {service.title}</h2>
          <p className="text-lg text-ukb-darkgray mb-8">
            Our expert team provides high-quality {service.title.toLowerCase()} services to ensure your plumbing system works efficiently.
            We use modern tools and techniques to deliver exceptional results every time.
          </p>
          <h3 className="text-xl font-bold mb-4 text-ukb-darkblue">Why Choose UKB for {service.title}</h3>
          <ul className="list-disc pl-6 mb-8 text-ukb-darkgray space-y-2">
            <li>Available 24/7 for emergency callouts</li>
            <li>Fully qualified and certified plumbers</li>
            <li>Transparent pricing with no hidden fees</li>
            <li>Satisfaction guaranteed</li>
            <li>Latest tools and technology</li>
          </ul>
        </div>
      </div>
      <CallToAction />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ServicePage;

export async function generateStaticParams() {
  return servicesList.map((service) => ({
    serviceName: service.slug,
  }));
}