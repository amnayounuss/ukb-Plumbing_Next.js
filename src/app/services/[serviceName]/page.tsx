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
import AnnouncementBar from '@/components/AnnouncementBar';

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

  // Roadmap data for the service
  const roadmapSteps = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We assess your needs and provide a detailed plan tailored to your requirements.',
      icon: '📞',
    },
    {
      step: '2',
      title: 'Service Scheduling',
      description: 'Our team schedules a convenient time to perform the service with minimal disruption.',
      icon: '📅',
    },
    {
      step: '3',
      title: 'Professional Execution',
      description: 'Certified plumbers use advanced tools to deliver high-quality service.',
      icon: '🔧',
    },
    {
      step: '4',
      title: 'Follow-Up & Support',
      description: 'We ensure your satisfaction with post-service support and maintenance tips.',
      icon: '✅',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBar />
      <Header />
      <ServicesHero
        title={service.title}
        description={service.description}
        image={service.image}
      />
      <main className="container mx-auto px-4 py-16">
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-ukb-darkblue animate-fade-in">
            About {service.title}
          </h2>
          <p className="text-lg text-ukb-darkgray mb-8 leading-relaxed">
            Our expert team provides high-quality {service.title.toLowerCase()} services to ensure your
            plumbing system works efficiently. We use modern tools and techniques to deliver exceptional
            results every time.
          </p>
          <h3 className="text-2xl font-bold mb-6 text-ukb-darkblue">
            Why Choose UKB for {service.title}?
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-ukb-darkgray">
            {[
              'Available 24/7 for emergency callouts',
              'Fully qualified and certified plumbers',
              'Transparent pricing with no hidden fees',
              'Satisfaction guaranteed',
              'Latest tools and technology',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-ukb-blue">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Roadmap Section */}
        <section className="max-w-5xl mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-10 text-ukb-darkblue">
            Our {service.title} Process
          </h2>
          <div className="relative">
            {/* Vertical Line for Roadmap */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-ukb-blue hidden md:block"></div>
            {roadmapSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-full md:w-1/2 px-6">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-semibold text-ukb-darkblue mb-2">
                      Step {step.step}: {step.title}
                    </h3>
                    <p className="text-ukb-darkgray">{step.description}</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-ukb-blue text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                  {step.step}
                </div>
                <div className="w-full md:w-1/2 px-6 hidden md:block"></div>
              </div>
            ))}
          </div>
        </section>
      </main>
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