
import { CheckCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [impactRef, impactInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const impactPoints = [
    "Reducing chemical usage by up to 30% through precision application",
    "Improving crop yields by 20% with early disease detection",
    "Providing data-driven insights for informed decision making",
    "Supporting sustainable farming practices across Africa"
  ];

  return (
    <section id="about" className="section bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-skyfarm-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-skyfarm-blue/5 rounded-full blur-3xl"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234caf50' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
    
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">About SkyFarm</h2>
          <div className="w-24 h-1 bg-skyfarm-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={contentRef}
            style={{
              opacity: contentInView ? 1 : 0,
              transform: contentInView ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient-to-r from-skyfarm-green to-skyfarm-green-dark">Our Story</h3>
            <p className="text-gray-700 mb-6">
              SkyFarm was founded with a mission to revolutionize agriculture in Africa through cutting-edge technology. 
              We recognized the challenges faced by farmers in optimizing crop management, detecting diseases early, 
              and applying resources efficiently.
            </p>
            <p className="text-gray-700 mb-6">
              Our team of agricultural experts, drone specialists, and AI engineers came together to develop 
              a comprehensive solution that addresses these challenges head-on, empowering farmers to increase 
              productivity while reducing environmental impact.
            </p>
          </div>

          <div 
            ref={impactRef}
            className="bg-white p-8 rounded-lg shadow-md border border-gray-100"
            style={{
              opacity: impactInView ? 1 : 0,
              transform: impactInView ? 'translateX(0)' : 'translateX(50px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient-to-r from-skyfarm-blue to-skyfarm-blue-dark">Our Impact</h3>
            <ul className="space-y-4">
              {impactPoints.map((point, index) => (
                <li 
                  key={index} 
                  className="flex items-start"
                  style={{
                    opacity: impactInView ? 1 : 0,
                    transform: impactInView ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.5s ease-out ${index * 0.2}s, transform 0.5s ease-out ${index * 0.2}s`
                  }}
                >
                  <CheckCircle className="text-skyfarm-green mr-3 h-6 w-6 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
