import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  Recycle, 
  Utensils, 
  ShoppingBag, 
  TreePine, 
  Droplets,
  MapPin,
  Heart,
  Leaf,
  Sun
} from "lucide-react";

const EcoTips = () => {
  const tipCategories = [
    {
      title: "Packing Smart",
      icon: ShoppingBag,
      tips: [
        {
          title: "Pack Light",
          description: "Bring only essentials. Every extra kg increases fuel consumption and emissions.",
          impact: "Reduces emissions by 2-5%",
          icon: ShoppingBag
        },
        {
          title: "Reusable Water Bottle",
          description: "Carry a reusable bottle to avoid buying plastic bottles during travel.",
          impact: "Saves 20+ plastic bottles per trip",
          icon: Droplets
        },
        {
          title: "Eco-Friendly Toiletries",
          description: "Use biodegradable soaps and bamboo toothbrushes.",
          impact: "Reduces water pollution",
          icon: Leaf
        }
      ]
    },
    {
      title: "Sustainable Transport",
      icon: MapPin,
      tips: [
        {
          title: "Choose Direct Flights",
          description: "Direct flights consume less fuel than connecting flights.",
          impact: "Reduces emissions by 25%",
          icon: MapPin
        },
        {
          title: "Use Public Transport",
          description: "Trains, buses, and metros have lower per-person emissions.",
          impact: "Up to 80% less emissions",
          icon: MapPin
        },
        {
          title: "Walk or Cycle",
          description: "Explore destinations on foot or by bicycle when possible.",
          impact: "Zero emissions",
          icon: Heart
        }
      ]
    },
    {
      title: "Responsible Consumption",
      icon: Utensils,
      tips: [
        {
          title: "Eat Local & Seasonal",
          description: "Choose locally sourced, seasonal foods to reduce transport emissions.",
          impact: "Supports local economy",
          icon: Utensils
        },
        {
          title: "Reduce Food Waste",
          description: "Order only what you can finish and compost when possible.",
          impact: "Prevents methane emissions",
          icon: Recycle
        },
        {
          title: "Plant-Based Options",
          description: "Try local vegetarian and vegan dishes - they have lower carbon footprints.",
          impact: "Reduces emissions by 50%",
          icon: TreePine
        }
      ]
    },
    {
      title: "Energy Conservation",
      icon: Sun,
      tips: [
        {
          title: "Choose Eco-Certified Hotels",
          description: "Stay at accommodations with green certifications and renewable energy.",
          impact: "Supports sustainable tourism",
          icon: Sun
        },
        {
          title: "Turn Off Lights & AC",
          description: "Be mindful of energy usage in your accommodation.",
          impact: "Saves 10-20% energy",
          icon: Sun
        },
        {
          title: "Shorter Showers",
          description: "Reduce water and energy consumption with shorter showers.",
          impact: "Saves 50+ liters per day",
          icon: Droplets
        }
      ]
    }
  ];

  const getImpactColor = (impact: string) => {
    if (impact.includes("Zero") || impact.includes("80%")) return "bg-forest-green text-white";
    if (impact.includes("50%") || impact.includes("25%")) return "bg-leaf-green text-white";
    return "bg-accent text-accent-foreground";
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Lightbulb className="h-8 w-8 text-forest-green" />
          <h2 className="text-3xl font-bold">Sustainable Travel Tips</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Simple yet effective ways to reduce your environmental impact while traveling and support local communities.
        </p>
      </div>

      <div className="grid gap-8">
        {tipCategories.map((category, categoryIndex) => {
          const CategoryIcon = category.icon;
          return (
            <div key={categoryIndex} className="space-y-4">
              <div className="flex items-center gap-3">
                <CategoryIcon className="h-6 w-6 text-forest-green" />
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {category.tips.map((tip, tipIndex) => {
                  const TipIcon = tip.icon;
                  return (
                    <Card key={tipIndex} className="shadow-soft hover:shadow-nature transition-all duration-300 border-l-4 border-l-forest-green">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <TipIcon className="h-5 w-5 text-forest-green" />
                            <CardTitle className="text-lg">{tip.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <CardDescription className="text-sm leading-relaxed">
                          {tip.description}
                        </CardDescription>
                        <Badge 
                          variant="secondary" 
                          className={`${getImpactColor(tip.impact)} text-xs`}
                        >
                          💚 {tip.impact}
                        </Badge>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <Card className="bg-gradient-to-r from-accent/20 to-secondary/20 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TreePine className="h-5 w-5 text-forest-green" />
            Remember: Every Small Action Counts!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Sustainable travel isn't about perfection - it's about making conscious choices that collectively make a big difference. 
            Start with one or two tips and gradually incorporate more sustainable practices into your journeys.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EcoTips;