
import { useRef, useState, useEffect } from "react";
import { 
  Camera, 
  Plane, // Replace Drone with Plane 
  Globe2, 
  Flower2, // Replace Plant with Flower2
  Bug, 
  Zap, 
  LineChart, 
  Settings2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const DroneVisualization = () => {
  const [activeTab, setActiveTab] = useState<string>("visualization");
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scroll, setScroll] = useState(0);
  
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScroll(scrollTop);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the hero section
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      setMousePosition({ x, y });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const droneFeatures = [
    { 
      icon: Camera, 
      title: "HD Camera System",
      description: "Ultra-high resolution imaging capable of identifying individual plants and pest infestations."
    },
    { 
      icon: Plane, // Changed from Drone to Plane
      title: "Multi-Rotor Design",
      description: "Advanced stability control even in windy conditions, enabling precise movement and hovering."
    },
    { 
      icon: Flower2, // Changed from Plant to Flower2
      title: "Crop Health Monitoring",
      description: "Multispectral sensors detect early signs of disease and nutrient deficiencies before visible to the human eye."
    },
    { 
      icon: Bug, 
      title: "Pest Detection",
      description: "AI algorithms identify pest infestations allowing for targeted treatment application."
    },
    { 
      icon: Globe2, 
      title: "GPS Precision",
      description: "Centimeter-accurate positioning for perfect coverage and treatment application."
    },
    { 
      icon: Zap, 
      title: "Extended Battery",
      description: "Industry-leading flight time of up to 45 minutes per charge for maximum coverage."
    },
    { 
      icon: LineChart, 
      title: "Real-time Analytics",
      description: "Instant data processing and visualization during flight for immediate insights."
    },
    { 
      icon: Settings2, 
      title: "Modular Design",
      description: "Adaptable payload system for sprayers, sensors, and specialized equipment."
    }
  ];

  const galleryImages = [
    { 
      id: 1, 
      url: "https://images.unsplash.com/photo-1525618245009-e89f37bd1de2", 
      alt: "Agricultural drone flying over green field", 
      caption: "Precision monitoring of crop health"
    },
    { 
      id: 2, 
      url: "https://images.unsplash.com/photo-1579829366248-204fe8413f31", 
      alt: "Drone spraying crops", 
      caption: "Targeted agrochemical application"
    },
    { 
      id: 3, 
      url: "https://images.unsplash.com/photo-1508444845599-5c89863b1c44", 
      alt: "Drone in sunset over farmland", 
      caption: "End-of-day data collection flight"
    },
    { 
      id: 4, 
      url: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108", 
      alt: "Close-up of agricultural drone", 
      caption: "SkyFarm precision spraying system"
    },
    { 
      id: 5, 
      url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc", 
      alt: "Drone operator in the field", 
      caption: "User-friendly control systems"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero section with parallax and animation effects */}
      <section 
        ref={heroRef}
        className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden"
        style={{ 
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dynamic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated floating elements */}
          <div className="absolute inset-0">
            {/* Glowing orbs with parallax effect */}
            {Array(5).fill(0).map((_, i) => (
              <div 
                key={i} 
                className="absolute rounded-full bg-gradient-to-r from-skyfarm-green-light/30 to-skyfarm-blue/20 blur-xl animate-pulse-glow"
                style={{
                  width: `${Math.random() * 200 + 100}px`,
                  height: `${Math.random() * 200 + 100}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `translate(${(mousePosition.x - 0.5) * -20 * (i % 4 + 1)}px, ${(mousePosition.y - 0.5) * -20 * (i % 3 + 1)}px)`,
                  animationDuration: `${Math.random() * 8 + 8}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: 0.3 - (i % 3) * 0.05,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Main content with enhanced animations */}
        <div 
          className="container mx-auto px-4 md:px-6 relative z-10"
          style={{ 
            transform: `translateY(${-scroll * 0.2}px)`,
            opacity: 1 - scroll / 700
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white animate-fade-in [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]">
                Drone Visualization
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                Experience our cutting-edge agricultural drones in action
              </p>
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <Button 
                  className={`px-8 py-3 text-lg transition-all ${activeTab === "visualization" ? "bg-skyfarm-green hover:bg-skyfarm-green-dark" : "bg-white/10 hover:bg-white/20 text-white border border-white/30"}`}
                  onClick={() => setActiveTab("visualization")}
                >
                  Drone Specs
                </Button>
                <Button 
                  className={`px-8 py-3 text-lg transition-all ${activeTab === "gallery" ? "bg-skyfarm-green hover:bg-skyfarm-green-dark" : "bg-white/10 hover:bg-white/20 text-white border border-white/30"}`}
                  onClick={() => setActiveTab("gallery")}
                >
                  Image Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drone visualization and features section */}
      {activeTab === "visualization" && (
        <section className="section bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Drone Technology</h2>
              <div className="w-24 h-1 bg-skyfarm-blue mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                SkyFarm drones combine advanced hardware capabilities with cutting-edge AI software 
                to deliver comprehensive agricultural solutions that revolutionize farming practices.
              </p>
            </div>

            {/* 3D Drone visual representation */}
            <div className="mb-16 relative h-[300px] md:h-[500px] bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {Array(20).fill(0).map((_, i) => (
                    <line 
                      key={i} 
                      x1={Math.random() * 100} 
                      y1={Math.random() * 100} 
                      x2={Math.random() * 100} 
                      y2={Math.random() * 100}
                      stroke="white"
                      strokeWidth="0.1"
                    />
                  ))}
                </svg>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop"
                  alt="Agricultural drone" 
                  className="max-h-full object-contain animate-float"
                />
              </div>
              
              {/* Interactive hover points on the drone */}
              {[
                {top: "30%", left: "30%", label: "HD Camera"},
                {top: "20%", left: "55%", label: "GPS Module"},
                {top: "70%", left: "40%", label: "Battery Pack"},
                {top: "50%", left: "70%", label: "Spray System"},
                {top: "40%", left: "20%", label: "Multispectral Sensor"}
              ].map((point, index) => (
                <div 
                  key={index} 
                  className="absolute w-6 h-6 rounded-full bg-skyfarm-blue-light animate-pulse cursor-pointer group"
                  style={{top: point.top, left: point.left}}
                >
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded shadow text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {point.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Drone features grid */}
            <div 
              ref={featuresRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {droneFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className="hover-card border border-gray-100 shadow-sm"
                  style={{
                    opacity: featuresInView ? 1 : 0,
                    transform: featuresInView ? 'translateY(0)' : 'translateY(30px)',
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
      )}

      {/* Image gallery section */}
      {activeTab === "gallery" && (
        <section className="section bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Drones in Action</h2>
              <div className="w-24 h-1 bg-skyfarm-blue mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                See our agricultural drones at work across different fields and farming conditions, 
                demonstrating their versatility and precision in real-world applications.
              </p>
            </div>

            {/* Image carousel */}
            <div 
              ref={galleryRef}
              className="max-w-5xl mx-auto px-4"
              style={{
                opacity: galleryInView ? 1 : 0,
                transform: galleryInView ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              <Carousel className="w-full">
                <CarouselContent>
                  {galleryImages.map((image) => (
                    <CarouselItem key={image.id}>
                      <div className="p-1">
                        <div className="overflow-hidden rounded-lg shadow-lg">
                          <img 
                            src={`${image.url}?q=80&w=1080&auto=format`} 
                            alt={image.alt} 
                            className="w-full h-[300px] md:h-[500px] object-cover transition-all duration-500 hover:scale-105" 
                          />
                          <div className="p-4 bg-white">
                            <p className="text-lg font-medium">{image.caption}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8 gap-2">
                  <CarouselPrevious className="relative inset-auto translate-y-0" />
                  <CarouselNext className="relative inset-auto translate-y-0" />
                </div>
              </Carousel>
            </div>

            {/* Image grid for larger screens */}
            <div className="hidden lg:grid grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
              {galleryImages.slice(0, 4).map((image) => (
                <div 
                  key={image.id} 
                  className="overflow-hidden rounded-lg shadow-lg image-hover"
                  style={{
                    opacity: galleryInView ? 1 : 0,
                    transform: galleryInView ? 'translateY(0)' : 'translateY(30px)',
                    transition: `opacity 0.6s ease-out ${image.id * 0.15}s, transform 0.6s ease-out ${image.id * 0.15}s`
                  }}
                >
                  <img 
                    src={`${image.url}?q=80&w=600&auto=format`} 
                    alt={image.alt} 
                    className="w-full h-64 object-cover" 
                  />
                  <div className="p-4 bg-white">
                    <p className="font-medium">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-skyfarm-green py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to revolutionize your farming?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Schedule a demonstration to see our drones in action on your fields and discover 
            how SkyFarm technology can transform your agricultural practices.
          </p>
          <Button className="bg-white text-skyfarm-green hover:bg-gray-100 px-8 py-3 text-lg">
            Request a Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DroneVisualization;
