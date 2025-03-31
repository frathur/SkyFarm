import { Laptop, Layers, Database, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

const Technology = () => {
  const [techFeaturesRef, techFeaturesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [diagramRef, diagramInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const techFeatures = [
    {
      icon: Laptop,
      title: "Multi-Rotor Drones",
      description: "State-of-the-art drones equipped with precision sensors and cameras for detailed field analysis and targeted applications."
    },
    {
      icon: Layers,
      title: "Advanced Sensor Suite",
      description: "Multispectral and thermal imaging capabilities to identify crop health issues, moisture levels, and nutrient deficiencies."
    },
    {
      icon: Database,
      title: "AI Analytics Platform",
      description: "Powerful machine learning algorithms that process field data to provide actionable insights and predictive analytics."
    },
    {
      icon: Settings,
      title: "Integrated System",
      description: "Seamless integration between hardware and software components for a comprehensive agricultural management solution."
    }
  ];

  const architectureElements = [
    {
      name: "Drone Fleet",
      image: "/src/images/dronefleet.jpg",
      alt: "Agricultural drones flying over farmland"
    },
    {
      name: "Sensor Suite",
      image: "/src/images/sensor suit.jpg",
      alt: "Agricultural sensors and monitoring devices"
    },
    {
      name: "Data Transmission",
      image: "/src/images/data transmission.jpg",
      alt: "Wireless data transmission system"
    },
    {
      name: "Cloud Processing",
      image: "/src/images/cloud processing.jpg",
      alt: "Cloud computing infrastructure"
    },
    {
      name: "AI Analytics",
      image: "/src/images/ai.jpg",
      alt: "AI data analysis visualization"
    },
    {
      name: "Mobile App",
      image: "/src/images/mobileapp.jpg",
      alt: "SkyFarm mobile application on a smartphone"
    }
  ];

  return (
    <section id="technology" className="section relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="tech-circle absolute top-20 right-10 w-80 h-80 rounded-full bg-skyfarm-blue/5 blur-3xl animate-pulse-glow"></div>
        <div className="tech-circle absolute bottom-40 left-10 w-96 h-96 rounded-full bg-skyfarm-green/5 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(to right, #4CAF50 1px, transparent 1px), linear-gradient(to bottom, #4CAF50 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Technology & Features</h2>
          <div className="w-24 h-1 bg-skyfarm-blue mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            SkyFarm combines cutting-edge drone technology, advanced sensors, and artificial intelligence 
            to provide a comprehensive solution for modern agriculture.
          </p>
        </div>

        {/* Tech Architecture Diagram with enhanced animations */}
        <div 
          ref={diagramRef}
          className={`bg-white p-6 rounded-xl mb-16 shadow-sm transform transition-all duration-1000 ${
            diagramInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-8 text-center">System Architecture</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative">
              {/* Connect lines between architecture elements */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                <line x1="100" y1="100" x2="200" y2="100" className="stroke-skyfarm-green/30" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="300" y1="100" x2="400" y2="100" className="stroke-skyfarm-green/30" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="500" y1="100" x2="600" y2="100" className="stroke-skyfarm-green/30" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="700" y1="100" x2="800" y2="100" className="stroke-skyfarm-green/30" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
              
              {/* Architecture elements with staggered animations and LARGER images */}
              {architectureElements.map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center relative z-10"
                  style={{
                    opacity: diagramInView ? 1 : 0,
                    transform: diagramInView ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.5s ease-out ${index * 0.15}s, transform 0.5s ease-out ${index * 0.15}s`
                  }}
                >
                  <div className="mb-4 overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={item.image} 
                      alt={item.alt}
                      className="w-48 h-48 md:w-64 md:h-64 object-cover transition-transform hover:scale-110 duration-300"
                    />
                  </div>
                  <span className="font-medium text-lg">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Features with enhanced animations */}
        <div 
          ref={techFeaturesRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {techFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-card border border-gray-100 shadow-sm"
              style={{
                opacity: techFeaturesInView ? 1 : 0,
                transform: techFeaturesInView ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`
              }}
            >
              <CardContent className="pt-6">
                <div className="mb-4 bg-gradient-to-br from-skyfarm-blue/10 to-skyfarm-blue/5 w-14 h-14 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="text-skyfarm-blue h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;