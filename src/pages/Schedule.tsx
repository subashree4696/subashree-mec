import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

const Schedule = () => {
  const schedule = [
    { day: "Monday - Friday", hours: "7:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "7:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 4:00 PM" },
  ];

  const mealTimings = [
    { meal: "Breakfast", time: "7:00 AM - 10:00 AM" },
    { meal: "Lunch", time: "12:00 PM - 3:00 PM" },
    { meal: "Snacks", time: "3:00 PM - 6:00 PM" },
    { meal: "Dinner", time: "6:00 PM - 8:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">Schedule & Location</h1>
          <p className="text-muted-foreground text-lg">
            Visit us during these hours
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Operating Hours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Operating Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {schedule.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="font-medium text-foreground">{item.day}</span>
                  <span className="text-primary font-semibold">{item.hours}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Meal Timings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                Meal Timings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {mealTimings.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="font-medium text-foreground">{item.meal}</span>
                  <span className="text-secondary font-semibold">{item.time}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Location */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Location
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">MEC Food Court</h3>
              <p className="text-muted-foreground mb-3">
                Ground Floor, Main Building<br />
                Madras Engineering College<br />
                Chennai, Tamil Nadu
              </p>
              <p className="text-sm text-muted-foreground">
                Located near the main entrance, easily accessible from all academic blocks
              </p>
            </div>

            <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="h-12 w-12 mx-auto mb-3 text-primary" />
                <p className="text-muted-foreground">
                  Interactive campus map coming soon
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <p className="text-sm text-muted-foreground">+91 44 2235 0294</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">foodcourt@mec.edu.in</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Schedule;
