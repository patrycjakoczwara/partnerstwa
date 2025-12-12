import { MapPin, HeadphonesIcon, TrendingUp, Lightbulb, DollarSign } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Benefits() {
  const benefits = [
    {
      icon: MapPin,
      title: "Country or Regional Exclusivity",
      description: "Secure your market territory with exclusive partnership rights in your region",
    },
    {
      icon: HeadphonesIcon,
      title: "Day 1 Support & Tailor-Made Program",
      description: "Get comprehensive support from day one with a partnership program customized to your needs",
    },
    {
      icon: TrendingUp,
      title: "Scalable Business Model",
      description: "Grow your business with our proven, scalable model designed for long-term success",
    },
    {
      icon: Lightbulb,
      title: "Future-Proof Innovation Platform",
      description: "Access to cutting-edge educational methodology and continuous platform innovation",
    },
    {
      icon: DollarSign,
      title: "Quick ROI - Risk Share Program",
      description: "Benefit from our shared risk model designed to accelerate your return on investment",
    },
  ];

  return (
    <div className="py-20 sm:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full border border-gray-300 mb-6">
              <span className="text-sm text-gray-800">Partner Benefits</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
              Why Partner with Tutlo?
            </h2>
            
            <p className="text-gray-600 text-lg mb-8">
              Partnering with Tutlo offers multiple benefits with a fast-track, ready-to-use market success formula. Join a proven platform that's ready to expand across Central and Eastern Europe.
            </p>
            
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759661659595-44917c3d9045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGdyb3d0aHxlbnwxfHx8fDE3NjI0NDM3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Global Business Growth"
              className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#fdd100' }}>
                      <Icon className="w-6 h-6 text-gray-900" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}