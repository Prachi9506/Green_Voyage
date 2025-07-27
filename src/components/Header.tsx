import { Leaf, Calculator, Lightbulb, MapPin, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = ({ activeSection, setActiveSection }: { activeSection: string; setActiveSection: (section: string) => void }) => {
  const navItems = [
    { id: "calculator", label: "Carbon Calculator", icon: Calculator },
    { id: "tips", label: "Eco Tips", icon: Lightbulb },
    { id: "planner", label: "Trip Planner", icon: MapPin },
    { id: "collaborations", label: "Collaborations", icon: Users },
    { id: "blog", label: "Blog", icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-forest-green" />
            <h1 className="text-2xl font-bold bg-gradient-nature bg-clip-text text-transparent">
              EcoVoyage
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveSection(item.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;