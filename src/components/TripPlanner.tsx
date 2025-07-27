import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  MapPin, 
  Leaf, 
  TreePine, 
  Star, 
  IndianRupee,
  Calendar,
  Users,
  Award
} from "lucide-react";

const TripPlanner = () => {
  const [formData, setFormData] = useState({
    distance: "",
    transport: "",
    accommodation: "",
    duration: "",
    travelers: ""
  });
  const [result, setResult] = useState(null);

  const transportEmissions = {
    flight: 0.255,
    train: 0.041,
    car: 0.171,
    bus: 0.089
  };

  const accommodationImpact = {
    luxury: 1.5,
    standard: 1.0,
    hostel: 0.7,
    camping: 0.3,
    homestay: 0.5
  };

  const calculateSustainabilityScore = () => {
    if (!formData.distance || !formData.transport || !formData.accommodation || !formData.duration) return;

    const distance = parseFloat(formData.distance);
    const days = parseInt(formData.duration);
    const travelers = parseInt(formData.travelers) || 1;

    // Transport emissions (per person)
    const transportCO2 = distance * transportEmissions[formData.transport];
    
    // Accommodation emissions (rough estimate: 20kg CO2/night for standard hotel)
    const accommodationCO2 = days * 20 * accommodationImpact[formData.accommodation];
    
    // Total emissions
    const totalCO2 = (transportCO2 + accommodationCO2) * travelers;
    
    // Calculate sustainability score (0-100)
    let score = 100;
    
    // Deduct points based on transport choice
    if (formData.transport === "flight") score -= 30;
    else if (formData.transport === "car") score -= 20;
    else if (formData.transport === "bus") score -= 10;
    // Train gets no deduction (most sustainable)
    
    // Deduct points based on accommodation
    if (formData.accommodation === "luxury") score -= 25;
    else if (formData.accommodation === "standard") score -= 10;
    else if (formData.accommodation === "camping") score += 10;
    else if (formData.accommodation === "homestay") score += 5;
    
    // Distance impact
    if (distance > 1000) score -= 15;
    else if (distance > 500) score -= 10;
    else if (distance > 200) score -= 5;
    
    score = Math.max(0, Math.min(100, score));
    
    const offsetCost = totalCO2 * 2.5; // ₹2.5 per kg CO2
    
    setResult({
      score: Math.round(score),
      totalCO2: totalCO2.toFixed(1),
      offsetCost: offsetCost.toFixed(0),
      transportCO2: transportCO2.toFixed(1),
      accommodationCO2: accommodationCO2.toFixed(1),
      suggestions: generateSuggestions(formData, score)
    });
  };

  const generateSuggestions = (data, score) => {
    const suggestions = [];
    
    if (data.transport === "flight") {
      suggestions.push({
        icon: "🚆",
        text: "Consider train travel if distance permits - up to 80% less emissions",
        impact: "High"
      });
    }
    
    if (data.accommodation === "luxury") {
      suggestions.push({
        icon: "🏠",
        text: "Try eco-certified hotels or homestays for authentic local experience",
        impact: "Medium"
      });
    }
    
    if (parseFloat(data.distance) > 500) {
      suggestions.push({
        icon: "📍",
        text: "Explore nearby destinations to reduce travel distance",
        impact: "High"
      });
    }
    
    suggestions.push({
      icon: "🌱",
      text: "Pack reusable items to minimize waste during your trip",
      impact: "Medium"
    });
    
    suggestions.push({
      icon: "🍽️",
      text: "Eat at local restaurants serving seasonal, regional cuisine",
      impact: "Medium"
    });
    
    return suggestions;
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "text-forest-green";
    if (score >= 60) return "text-leaf-green";
    if (score >= 40) return "text-sunset-orange";
    return "text-destructive";
  };

  const getScoreLabel = (score) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 40) return "Fair";
    return "Needs Improvement";
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="h-8 w-8 text-forest-green" />
          <h2 className="text-3xl font-bold">Green Trip Planner</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Plan your journey sustainably and get personalized recommendations to minimize your environmental impact.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Trip Details</CardTitle>
            <CardDescription>Enter your travel information to get sustainability insights</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="distance">Distance (km)</Label>
                <Input
                  id="distance"
                  type="number"
                  placeholder="Total distance"
                  value={formData.distance}
                  onChange={(e) => setFormData({...formData, distance: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (days)</Label>
                <Input
                  id="duration"
                  type="number"
                  placeholder="Trip duration"
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="transport">Primary Transport</Label>
              <Select value={formData.transport} onValueChange={(value) => setFormData({...formData, transport: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select transport mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flight">Flight ✈️</SelectItem>
                  <SelectItem value="train">Train 🚆</SelectItem>
                  <SelectItem value="car">Car 🚗</SelectItem>
                  <SelectItem value="bus">Bus 🚌</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="accommodation">Accommodation Type</Label>
              <Select value={formData.accommodation} onValueChange={(value) => setFormData({...formData, accommodation: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select accommodation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="luxury">Luxury Hotel 🏨</SelectItem>
                  <SelectItem value="standard">Standard Hotel 🏩</SelectItem>
                  <SelectItem value="hostel">Hostel 🏠</SelectItem>
                  <SelectItem value="homestay">Homestay 🏡</SelectItem>
                  <SelectItem value="camping">Camping ⛺</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="travelers">Number of Travelers</Label>
              <Select value={formData.travelers} onValueChange={(value) => setFormData({...formData, travelers: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select travelers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 person</SelectItem>
                  <SelectItem value="2">2 people</SelectItem>
                  <SelectItem value="3">3 people</SelectItem>
                  <SelectItem value="4">4+ people</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              onClick={calculateSustainabilityScore}
              className="w-full"
              disabled={!formData.distance || !formData.transport || !formData.accommodation || !formData.duration}
            >
              <Leaf className="h-4 w-4 mr-2" />
              Calculate Sustainability Score
            </Button>
          </CardContent>
        </Card>

        {result && (
          <div className="space-y-6">
            <Card className="shadow-soft bg-gradient-to-br from-accent/20 to-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-forest-green" />
                  Sustainability Score
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-2">
                  <div className={`text-4xl font-bold ${getScoreColor(result.score)}`}>
                    {result.score}/100
                  </div>
                  <Badge variant="secondary" className="bg-background/50">
                    {getScoreLabel(result.score)}
                  </Badge>
                  <Progress value={result.score} className="w-full" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-lg font-semibold text-forest-green">
                      {result.totalCO2} kg
                    </div>
                    <div className="text-xs text-muted-foreground">Total CO₂</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg font-semibold text-forest-green">
                      ₹{result.offsetCost}
                    </div>
                    <div className="text-xs text-muted-foreground">Offset Cost</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TreePine className="h-5 w-5 text-forest-green" />
                  Improvement Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {result.suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                    <span className="text-lg">{suggestion.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm">{suggestion.text}</p>
                      <Badge 
                        variant="secondary"
                        className={suggestion.impact === "High" ? "bg-forest-green text-white text-xs" : "bg-leaf-green text-white text-xs"}
                      >
                        {suggestion.impact} Impact
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripPlanner;