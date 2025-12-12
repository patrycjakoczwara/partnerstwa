import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Partnership() {
  return (
    <div className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full border border-gray-300 mb-6">
            <span className="text-sm text-gray-800">Partnership Program</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
            Tutlo Resale Partnership Program
          </h2>
          
          <p className="text-gray-600 text-lg">
            At Tutlo, we believe in combining our partners' expertise in the local market with Tutlo's proven business model. We are seeking long-term partnerships focused on building a profitable and sustainable business for both our partners and Tutlo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-blue-100 bg-white">
            <CardHeader>
              <CardTitle>Fast-Track Success Formula</CardTitle>
              <CardDescription>Ready-to-use market success with proven results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Significantly less investment compared to starting a similar business from scratch</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Save between 12-24 months of valuable go-to-market time</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Proven educational methodology and platform</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-blue-100 bg-white">
            <CardHeader>
              <CardTitle>Long-Term Growth</CardTitle>
              <CardDescription>Building sustainable success together</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Combine local market expertise with proven business model</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Focus on profitable and sustainable business growth</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Scalable platform ready for future innovation</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-8 sm:p-12 text-white text-center border border-gray-700 shadow-2xl">
          <p className="text-xl sm:text-2xl mb-4">
            "We are committed to scalable growth and excellence — and now, we invite you to become part of our Tutlo family as a valued partner."
          </p>
          <div className="inline-block px-4 py-2 rounded-full" style={{ backgroundColor: '#fdd100', color: '#1f2937' }}>
            <span className="text-sm">Join us on this journey</span>
          </div>
        </div>
      </div>
    </div>
  );
}