
import { Leaf, PieChart, CheckCircle, Warehouse } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

const Solutions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutionCards = [
    {
      icon: Leaf,
      title: "Precision Agrochemical Application",
      description: "Target application of fertilizers and pesticides only where needed, reducing waste and environmental impact."
    },
    {
      icon: Warehouse,
      title: "Early Disease Detection",
      description: "Identify crop diseases and pest infestations at the earliest stages, enabling prompt intervention."
    },
    {
      icon: PieChart,
      title: "Yield Prediction & Optimization",
      description: "Data-driven forecasting to help optimize planting, harvesting, and resource allocation."
    }
  ];

  const benefits = [
    "Reduce operational costs by 25%",
    "Minimize chemical usage and environmental impact",
    "Increase crop yields through data-driven decisions",
    "Save time with automated field monitoring",
    "Early detection of crop health issues",
    "Detailed crop mapping and field analysis"
  ];

  return (
    <section id="solutions" className="section bg-gradient-to-b from-white to-gray-300 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="leaf-1 absolute top-20 left-10 text-skyfarm-green-light/20 animate-float">
          <Leaf size={120} />
        </div>
        <div className="leaf-2 absolute bottom-40 right-10 text-skyfarm-green/20 animate-float" style={{ animationDelay: '1s' }}>
          <Leaf size={80} />
        </div>
        <div className="chart absolute top-1/2 left-1/4 text-skyfarm-blue/10 animate-float" style={{ animationDelay: '1.5s' }}>
          <PieChart size={100} />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Solutions & Applications</h2>
          <div className="w-24 h-1 bg-skyfarm-green-dark mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our innovative solutions address the key challenges in modern agriculture, helping farmers 
            optimize resources and increase productivity.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {solutionCards.map((card, index) => (
            <Card 
              key={index} 
              className={`hover-card transform transition-all duration-500 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-6">
                <div className="mb-4 bg-skyfarm-green/10 w-16 h-16 rounded-full flex items-center justify-center transform transition-transform hover:scale-110 duration-300">
                  <card.icon className="text-skyfarm-green h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-700 text-sm">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm bg-white/95 border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-skyfarm-green-dark">Benefits for Farmers</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start group hover:bg-gray-50 p-3 rounded-md transition-colors duration-200"
              >
                <CheckCircle className="text-skyfarm-green mr-3 h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
