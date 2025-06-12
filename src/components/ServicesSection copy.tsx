import { BadgeCheck } from "lucide-react";

interface Service {
  title: string;
  description: string;
}

const ServicesSectionCopy: React.FC<{ services: Service[] }> = ({ services }) => {
  return (
    <section id="services" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Before & After Showcase */}
        <div className="max-w-5xl mx-auto mb-20 overflow-hidden animate-fade-in">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-ukb-lightblue text-ukb-blue text-sm font-medium rounded-full mb-4">
              Our Work
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-ukb-darkblue">See The Difference We Make</h3>
            <p className="text-lg text-ukb-darkgray max-w-3xl mx-auto">
              Real transformations from leaky chaos to perfect plumbing—handled by our expert team.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-elevated hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
              <img
                src="/lovable-uploads/waterleakage.png"
                alt="Before plumbing work"
                className="w-full md:w-1/2 h-auto rounded-xl shadow-md object-cover"
              />
              <img
                src="/lovable-uploads/servicesimage.png"
                alt="After plumbing work"
                className="w-full md:w-1/2 h-auto rounded-xl shadow-md object-cover"
              />
            </div>
            <div className="bg-white p-5 flex justify-between items-center">
              <div>
                {services.map((service, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-semibold text-ukb-darkblue">{service.title}</h4>
                  </div>
                ))}
                <p className="text-ukb-darkgray">Complete overhaul of damaged plumbing system</p>
              </div>
              <div className="flex items-center text-ukb-blue gap-1">
                <BadgeCheck className="w-5 h-5" />
                <span className="font-medium">Professional Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionCopy;
