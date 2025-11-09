import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Clock, MapPin, ThumbsUp, MessageSquare, Utensils, Shield } from "lucide-react";
import heroImage from "@/assets/hero-canteen.jpg";

const Index = () => {
  const features = [
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Diverse Menu",
      description: "Wide variety of breakfast, lunch, snacks, and beverages",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Convenient Hours",
      description: "Open throughout the day to serve you better",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assured",
      description: "Fresh ingredients and high hygiene standards",
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      title: "Student Friendly",
      description: "Affordable prices for MEC students and staff",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-hero-gradient-start/90 to-hero-gradient-end/90" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Welcome to MEC Food Court
          </h1>
          <p className="text-xl text-white/95 mb-8">
            Your favorite campus dining destination at Madras Engineering College
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" variant="default" className="text-lg">
                View Menu
              </Button>
            </Link>
            <Link to="/feedback">
              <Button size="lg" variant="secondary" className="text-lg">
                Give Feedback
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Choose MEC Food Court?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="transition-all hover:shadow-lg hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Quick Links
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/schedule">
              <Card className="h-full transition-all hover:shadow-lg hover:bg-card-hover cursor-pointer">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    Schedule & Location
                  </h3>
                  <p className="text-muted-foreground">
                    Find our timings and campus location
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/hygiene">
              <Card className="h-full transition-all hover:shadow-lg hover:bg-card-hover cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-secondary" />
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    Hygiene & Quality
                  </h3>
                  <p className="text-muted-foreground">
                    Learn about our quality standards
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/feedback">
              <Card className="h-full transition-all hover:shadow-lg hover:bg-card-hover cursor-pointer">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    Feedback
                  </h3>
                  <p className="text-muted-foreground">
                    Share your experience with us
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 MEC Food Court - Madras Engineering College. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
