import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Globe, Users, TrendingUp } from "lucide-react";

export function About() {
  return (
    <div id="about" className="py-20 sm:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758612214882-03f8a1d7211f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MjM5MTk5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Online Learning"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full border border-gray-300">
              <span className="text-sm text-gray-800">About Tutlo</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900">
              Breaking Barriers Through Language
            </h2>
            
            <p className="text-gray-600 text-lg">
              Established 10 years ago by two students-friends Damian & Tomasz, who were looking for the most effective way to learn to speak English. We believe in continuous personal and professional development.
            </p>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                Our mission is to help people break barriers, reach their full potential, and create better opportunities for themselves. English is the global language of business, and mastering it opens doors. By empowering individuals to improve their English skills, we help them unlock career advancement and enhance their quality of life.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: '#fdd100' }}>
                  <Globe className="w-6 h-6 text-gray-900" />
                </div>
                <div className="text-sm text-gray-600">Poland's #1 Platform</div>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: '#fdd100' }}>
                  <TrendingUp className="w-6 h-6 text-gray-900" />
                </div>
                <div className="text-sm text-gray-600">CEE Leader Goal</div>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: '#fdd100' }}>
                  <Users className="w-6 h-6 text-gray-900" />
                </div>
                <div className="text-sm text-gray-600">Global Vision</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}