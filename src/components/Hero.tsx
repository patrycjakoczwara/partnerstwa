import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "10+", label: "Years of Excellence" },
    { value: "#1", label: "Platform in Poland" },
    { value: "90%+", label: "Customer Satisfaction" },
    { value: "50M EUR", label: "Annual Revenue 2024" },
    { value: "85K+", label: "Users" },
    { value: "3,500+", label: "Tutors" },
    { value: "CEE", label: "Expansion Ready" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(stats.length / 2));
    }, 3000);
    return () => clearInterval(timer);
  }, [stats.length]);

  return (
    <div className="relative bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[60px] pb-20 sm:pb-32">
        {/* Logo at the top center */}
        <div className="flex justify-center mb-12">
          <img 
            src="https://tutlo.com/wp-content/uploads/2025/10/LogoGeneral.svg" 
            alt="Tutlo Logo" 
            className="h-10 sm:h-12"
          />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full border border-gray-300">
              <span className="text-sm text-gray-800">Leading English Learning Platform in Poland</span>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg sm:text-xl tracking-wide" style={{ color: '#fdd100' }}>
                Be a part of Tutlo International - be part of our success
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 tracking-tight">
                Partner with <span style={{ color: '#fdd100' }}>Tutlo</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 max-w-2xl">
              Join us in shaping the future of language learning. Together, we can expand across Central and Eastern Europe and create opportunities without borders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="text-gray-900 gap-2 hover:opacity-90"
                style={{ backgroundColor: '#fdd100' }}
              >
                Explore Partnership
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 hover:bg-opacity-10"
                style={{ borderColor: '#fdd100', color: '#fdd100', backgroundColor: 'transparent' }}
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>
            
            {/* Mobile Carousel */}
            <div className="block sm:hidden pt-8 border-t border-gray-200">
              <div className="relative">
                <div className="flex gap-4 justify-center transition-all duration-500">
                  {stats.slice(currentSlide * 2, currentSlide * 2 + 2).map((stat, index) => (
                    <div key={`${currentSlide}-${index}`} className="flex-1 text-center animate-fadeIn">
                      <div className="text-2xl text-gray-900">{stat.value}</div>
                      <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {Array.from({ length: Math.ceil(stats.length / 2) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{ 
                        backgroundColor: currentSlide === index ? '#fdd100' : '#d1d5db',
                        opacity: currentSlide === index ? 1 : 0.5
                      }}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden sm:grid grid-cols-4 gap-4 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur-2xl opacity-20"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc2MjQzNTczNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Partnership"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}