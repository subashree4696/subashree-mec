import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Droplets, Users, Award, CheckCircle2, Thermometer } from "lucide-react";

const Hygiene = () => {
  const standards = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "FSSAI Certified",
      description: "Licensed by the Food Safety and Standards Authority of India",
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Regular Sanitization",
      description: "Kitchen and dining areas cleaned and sanitized multiple times daily",
    },
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Temperature Control",
      description: "Proper storage and cooking temperature maintenance for all food items",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Trained Staff",
      description: "All staff members trained in food safety and hygiene practices",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Ingredients",
      description: "Fresh, high-quality ingredients sourced from certified suppliers",
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: "Daily Inspections",
      description: "Regular quality checks and inspections by management",
    },
  ];

  const practices = [
    "Fresh ingredients sourced daily from trusted suppliers",
    "Vegetables thoroughly washed and cleaned",
    "Separate areas for vegetarian and non-vegetarian food preparation",
    "Regular pest control and waste management",
    "Staff undergo mandatory health checkups",
    "Use of food-grade utensils and cookware",
    "Filtered water for cooking and drinking",
    "Proper waste segregation and disposal",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">Hygiene & Quality Standards</h1>
          <p className="text-muted-foreground text-lg">
            Your health and safety are our top priorities
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {standards.map((standard, index) => (
            <Card key={index} className="transition-all hover:shadow-lg hover:scale-105">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-primary">
                    {standard.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {standard.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {standard.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Hygiene Practices */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-secondary" />
              Our Hygiene Practices
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {practices.map((practice, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{practice}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Commitment Statement */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment</h2>
            <p className="text-foreground/90 text-lg max-w-3xl mx-auto">
              At MEC Food Court, we are committed to maintaining the highest standards of food safety and hygiene. 
              We understand that providing clean, safe, and nutritious food is essential for the well-being of our 
              students, faculty, and staff. Our team works diligently every day to ensure that every meal served 
              meets stringent quality and safety standards.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Hygiene;
