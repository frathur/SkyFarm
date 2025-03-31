
import { Star, BarChart3, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Creating a custom chart bar icon component with a different name
const ChartBarCustom = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="12" width="4" height="8" rx="1" />
    <rect x="10" y="8" width="4" height="12" rx="1" />
    <rect x="17" y="4" width="4" height="16" rx="1" />
  </svg>
);

const CaseStudies = () => {
  const testimonials = [
    {
      quote: "SkyFarm's technology has transformed how we manage our crops. We've seen a 30% reduction in pesticide use while maintaining excellent yields.",
      author: "James Mwangi",
      role: "Farm Manager, Kenya"
    },
    {
      quote: "The early disease detection saved our tomato crop last season, identifying an outbreak before it became visible to the human eye.",
      author: "Amina Okello",
      role: "Agricultural Cooperative Leader"
    },
    {
      quote: "The data insights provided by SkyFarm have allowed us to optimize our irrigation schedule, saving water and improving crop health.",
      author: "Dr. Samuel Nkosi",
      role: "Agricultural Researcher"
    }
  ];

  const impactMetrics = [
    { label: "Reduction in Chemical Use", value: "30%", icon: ChartBarCustom },
    { label: "Increase in Crop Yield", value: "20%", icon: ChartBarCustom },
    { label: "Water Efficiency Improvement", value: "25%", icon: ChartBarCustom },
    { label: "Labor Cost Reduction", value: "40%", icon: ChartBarCustom }
  ];

  return (
    <section id="case-studies" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies & Success Stories</h2>
          <div className="w-24 h-1 bg-skyfarm-blue mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            See how SkyFarm is making a real difference for farmers across Africa, with measurable 
            improvements in productivity and sustainability.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-card">
              <CardContent className="pt-6">
                <div className="mb-4 text-skyfarm-blue">
                  <Star className="inline-block h-5 w-5 fill-current" />
                  <Star className="inline-block h-5 w-5 fill-current" />
                  <Star className="inline-block h-5 w-5 fill-current" />
                  <Star className="inline-block h-5 w-5 fill-current" />
                  <Star className="inline-block h-5 w-5 fill-current" />
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="bg-gradient-to-r from-skyfarm-blue to-skyfarm-green text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Impact Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                  <metric.icon />
                </div>
                <p className="text-3xl font-bold mb-2">{metric.value}</p>
                <p className="text-sm opacity-80">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
