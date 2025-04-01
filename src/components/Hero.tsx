import { useEffect, useState, useRef } from 'react';
import { ChevronDown } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % featuresData.length);
      }, 5000);
    };

    startAutoSlide();
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [featuresData.length]);

  // Function to handle dot indicator clicks
  const goToSlide = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentSlide(index);
    
    // Restart auto-slide after manual navigation
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % featuresData.length);
    }, 5000);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <video className="absolute inset-0 w-full h-full object-cover" src="/src/images/video.mp4" autoPlay muted loop playsInline />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              <AnimatePresence mode="wait">
                <CarouselItem key={currentSlide} className="block relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center space-y-6 p-4"
                  >
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
                    >
                      {featuresData[currentSlide].title}
                    </motion.h1>
                    <motion.h2 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600"
                    >
                      {featuresData[currentSlide].highlight}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
                    >
                      {featuresData[currentSlide].description}
                    </motion.p>
                  </motion.div>
                </CarouselItem>
              </AnimatePresence>
            </CarouselContent>
          </Carousel>
          
          {/* Dots navigation instead of arrows */}
          <div className="flex justify-center mt-8 space-x-3">
            {featuresData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? "bg-green-400 w-6" 
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-500"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
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