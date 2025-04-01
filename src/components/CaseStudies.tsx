import { Star, BarChart3, Award, Users, Leaf, ThumbsUp, Clock, Beaker, FileSpreadsheet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Creating a custom chart bar icon component with a different name
const ChartBarCustom = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="12" width="4" height="8" rx="1" />
    <rect x="10" y="8" width="4" height="12" rx="1" />
    <rect x="17" y="4" width="4" height="16" rx="1" />
  </svg>
);

const CaseStudies = () => {
  const researchFeedback = [
    {
      quote: "If this drone can detect early signs of disease, it would save us from losing crops before we even notice a problem. I’m looking forward to seeing how well it works in real farm conditions.",
      author: "Mr. Wisdom",
      role: "Farmer and Teacher, Maame-Krobo",
      icon: Beaker,
      color: "from-blue-500 to-blue-700"
    },
    {
      quote: "Applying agrochemicals efficiently is a big challenge. If this technology can help us spray only where it's needed, it could cut costs and improve yields. I'm eager to see how accurate it is in the field.",
      author: "Boateng Twumasi",
      role: "Agricultural Biotechnology Student, KNUST",
      icon: FileSpreadsheet,
      color: "from-green-500 to-green-700"
    },
    
    {
      quote: "If SkyFarm's technology can truly help us identify the best planting areas and reduce wasted resources, it would be a game changer for farmers like me. I'm eager to see how it performs on our fields.",
      author: "Faustina Yeboah",
      role: "Farmer, Sunyani, Ghana",
      icon: ThumbsUp,
      color: "from-amber-500 to-amber-700"
    }
    
    
  ];

  const researchTargets = [
    { label: "Target Reduction in Chemical Use", value: "30%", icon: ChartBarCustom },
    { label: "Research Goal for Crop Yield", value: "20%", icon: ChartBarCustom },
    { label: "Target Water Efficiency", value: "25%", icon: ChartBarCustom },
    { label: "Potential Time Savings", value: "40%", icon: Clock }
  ];

  return (
    <section id="research-insights" className="section py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Market Insights</h2>
          <div className="w-24 h-1 bg-skyfarm-blue mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
          Explore our ongoing market research and see what our potential customers are saying about SkyFarm's developing drone technology.
           Discover how precision agriculture could transform farming efficiency and productivity across Africa.

          </p>
        </div>

        {/* Research Feedback */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {researchFeedback.map((feedback, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className={`h-3 bg-gradient-to-r ${feedback.color}`}></div>
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-6 flex justify-between items-center">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${feedback.color} text-white`}>
                    <feedback.icon className="h-6 w-6" />
                  </div>
                  <div className="bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-600 font-medium">
                    Research Phase
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic text-sm md:text-base">"{feedback.quote}"</p>
                <div className="border-t pt-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold mr-3">
                    {feedback.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{feedback.author}</p>
                    <p className="text-xs text-gray-500">{feedback.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Targets */}
        <div className="bg-gradient-to-r from-skyfarm-blue to-skyfarm-green text-white rounded-lg p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-2 text-center">Research Targets</h3>
          <p className="text-center text-white/80 mb-8 max-w-2xl mx-auto">
            Based on our current research and agricultural studies, these are the potential impact goals we're working toward with the SkyFarm technology:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {researchTargets.map((metric, index) => (
              <div key={index} className="text-center transform transition-all duration-300 hover:scale-110">
                <div className="bg-white/20 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 shadow-inner">
                  <metric.icon />
                </div>
                <p className="text-3xl md:text-4xl font-bold mb-2">{metric.value}</p>
                <p className="text-sm opacity-80">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Participation CTA */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg border border-gray-100 text-center">
          <Beaker className="h-12 w-12 mx-auto mb-4 text-skyfarm-blue" />
          <h3 className="text-2xl font-bold mb-3">Participate in Our Research</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Help shape the future of African agriculture by contributing to our research. 
            We're seeking innovative farmers and agricultural organizations to provide insights 
            and feedback during our development phase.
          </p>
          <Link to="/researchSignUp">
            <button
                className="bg-skyfarm-green hover:bg-skyfarm-green-dark text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg"
              >
                Join Research Initiative
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;