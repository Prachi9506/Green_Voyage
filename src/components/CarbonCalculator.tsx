import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Plane, Train, Car, TreePine } from "lucide-react";

const CarbonCalculator = () => {
  const [distance, setDistance] = useState("");
  const [transport, setTransport] = useState("");
  const [result, setResult] = useState(null);

  // Carbon emission factors (kg CO2 per km)
  const emissionFactors = {
    flight: 0.255,
    train: 0.041,
    car: 0.171,
    bus: 0.089
  };

  const calculateCarbon = () => {
    if (!distance || !transport) return;
    
    const km = parseFloat(distance);
    const emissions = km * emissionFactors[transport];
    const costToOffset = emissions * 2.5; // ₹2.5 per kg CO2
    
    setResult({
      emissions: emissions.toFixed(2),
      distance: km,
      transport,
      offsetCost: costToOffset.toFixed(0)
    });
  };

  const getTransportIcon = (type) => {
    const icons = {
      flight: Plane,
      train: Train,
      car: Car,
      bus: Car
    };
    return icons[type] || Car;
  };

  const getAlternatives = () => {
    if (!transport || !distance) return [];
    
    const km = parseFloat(distance);
    const alternatives = [];
    
    Object.entries(emissionFactors).forEach(([mode, factor]) => {
      if (mode !== transport) {
        const altEmissions = km * factor;
        const reduction = ((emissionFactors[transport] - factor) / emissionFactors[transport] * 100);
        if (reduction > 0) {
          alternatives.push({
            mode,
            emissions: altEmissions.toFixed(2),
            reduction: reduction.toFixed(0)
          });
        }
      }
    });
    
    return alternatives.sort((a, b) => a.emissions - b.emissions);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Calculator className="h-8 w-8 text-forest-green" />
          <h2 className="text-3xl font-bold">Carbon Footprint Calculator</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Calculate your travel emissions and discover greener alternatives for sustainable journeys.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Calculate Your Impact</CardTitle>
            <CardDescription>Enter your travel details to estimate carbon emissions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="distance">Distance (km)</Label>
              <Input
                id="distance"
                type="number"
                placeholder="Enter distance in kilometers"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="transport">Mode of Transport</Label>
              <Select value={transport} onValueChange={setTransport}>
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
            
            <Button 
              onClick={calculateCarbon}
              className="w-full"
              disabled={!distance || !transport}
            >
              Calculate Carbon Footprint
            </Button>
          </CardContent>
        </Card>

        {result && (
          <Card className="shadow-soft bg-gradient-to-br from-accent/20 to-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {(() => {
                  const Icon = getTransportIcon(result.transport);
                  return <Icon className="h-5 w-5" />;
                })()}
                Your Carbon Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-forest-green">
                  {result.emissions} kg CO₂
                </div>
                <p className="text-sm text-muted-foreground">
                  For {result.distance} km by {result.transport}
                </p>
              </div>
              
              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <TreePine className="h-4 w-4 text-forest-green" />
                  <span className="font-medium">Offset Cost: ₹{result.offsetCost}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Plant trees to neutralize your carbon footprint
                </p>
              </div>

              {getAlternatives().length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium">Greener Alternatives:</h4>
                  {getAlternatives().slice(0, 2).map((alt, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="capitalize">{alt.mode}</span>
                      <span className="text-forest-green font-medium">
                        -{alt.reduction}% ({alt.emissions} kg CO₂)
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CarbonCalculator;