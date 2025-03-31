import { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Hero = () => {
  const [scroll, setScroll] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);

  // Define background images for the hero slider
  const backgroundImages = [
    '/src/images/field1.jpg', // Replace with your actual image paths
    '/src/images/field5.jpg',
    '/src/images/field6.jpg'
  ];

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      setMousePosition({ x: (clientX - left) / width, y: (clientY - top) / height });
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Auto-slide: change slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);

  const featuresData = [
    {
      title: "AI-Powered Agricultural Drones",
      description: "Our cutting-edge drones use artificial intelligence to revolutionize farming practices, increasing yields while reducing resource usage.",
      highlight: "Precision. Intelligence. Efficiency."
    },
    {
      title: "Smart Crop Monitoring",
      description: "Real-time data analysis provides farmers with actionable insights about crop health, soil conditions, and optimal harvesting times.",
      highlight: "Data-Driven. Sustainable. Profitable."
    },
    {
      title: "Automated Field Management",
      description: "From planting to harvesting, our drones monitor and optimize every stage of the crop lifecycle with minimal human intervention.",
      highlight: "Automation. Precision. Results."
    }
  ];

  const handleSlideChange = (value) => {
    setCurrentSlide(value[0]);
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImages[currentSlide]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out, transform 0.5s ease-in-out',
        // Apply a subtle horizontal shift for a parallax effect based on current slide
        // transform: `translateX(${currentSlide * -20}px)`
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>

      {/* Additional animated background patterns (optional) */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-skyfarm-blue-dark/30 via-skyfarm-green-dark/20 to-skyfarm-earth/30"
          style={{ 
            transform: `translateY(${scroll * 0.2}px)`,
            opacity: 1 - scroll / 1000
          }}
        ></div>
      </div>

      {/* Main content with hero slider */}
      <div 
        className="container mx-auto px-4 md:px-6 relative z-20"
        style={{ 
          transform: `translateY(${-scroll * 0.4}px)`,
          opacity: 1 - scroll / 600
        }}
      >
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {featuresData.map((feature, index) => (
                <CarouselItem key={index}>
                  <div className="text-center space-y-6 p-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-0 text-white animate-fade-in [text-shadow:_0_2px_8px_rgba(0,0,0,0.6)]">
                      {feature.title}
                    </h1>
                    <h2 
                      className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-skyfarm-green-light to-skyfarm-green animate-fade-in [text-shadow:_0_1px_5px_rgba(0,0,0,0.4)]" 
                      style={{ animationDelay: "0.3s" }}
                    >
                      {feature.highlight}
                    </h2>
                    <p 
                      className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in [text-shadow:_0_1px_3px_rgba(0,0,0,0.3)] max-w-3xl mx-auto" 
                      style={{ animationDelay: "0.6s" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <div className="w-64">
                <Slider 
                  value={[currentSlide]} 
                  max={featuresData.length - 1} 
                  step={1} 
                  onValueChange={handleSlideChange}
                  className="mt-6"
                />
              </div>
            </div>
            <div className="absolute left-0 right-0 flex justify-between -mx-4 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="relative left-2" />
              <CarouselNext className="relative right-2" />
            </div>
          </Carousel>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in mt-8" style={{ animationDelay: "0.9s" }}>
            <Button className="bg-skyfarm-green hover:bg-skyfarm-green-dark text-white px-8 py-6 text-lg group transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2">
              Learn More 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm hover:backdrop-blur-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-500"
        style={{ opacity: 1 - scroll / 200 }}
        onClick={() => {
          const aboutSection = document.getElementById('about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform duration-300">
          <span className="text-white text-sm mb-2 opacity-80 animate-pulse">Discover More</span>
          <div className="w-8 h-14 rounded-full border-2 border-white/60 flex justify-center items-center p-1">
            <div className="w-1.5 h-3 bg-white/80 rounded-full animate-scroll-down"></div>
          </div>
          <ChevronDown className="text-white/80 mt-2 animate-bounce" size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
