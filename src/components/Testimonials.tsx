import { useEffect } from "react";
import { Badge } from "./ui/badge";

const Testimonials = () => {
  useEffect(() => {
    // Script add karna hoga taake widget load ho
    const scriptId = "EmbedSocialWidgetScript";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://embedsocial.com/cdn/aht.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ukb-darkblue">
            What Our Customers Say
          </h2>
          <p className="text-lg text-ukb-darkgray">
            Don't just take our word for it - hear from our real Google reviews.
          </p>
        </div>

        {/* EmbedSocial Google Reviews Widget */}
        <div
          className="embedsocial-widget"
          data-ref="4bde0a5bcb6d33689a369d30bdfdc51e"
        >
          <a
            href="https://embedsocial.com/google-reviews-widget/"
            title="Add Google reviews on a website"
            target="_blank"
            rel="noreferrer"
            className="powered-by-es es-slider"
          >
            <img
              src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp"
              alt="EmbedSocial"
            />
            <span> Google reviews widget </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
