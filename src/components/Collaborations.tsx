import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  ExternalLink, 
  TreePine, 
  Waves, 
  Mountain, 
  Leaf,
  Globe,
  Heart,
  Shield,
  Target
} from "lucide-react";

const Collaborations = () => {
  const ngos = [
    {
      name: "Tree Foundation India",
      focus: "Marine Conservation",
      description: "Indian NGO with primary focus on marine conservation, founded by Dr. Supraja Dharini in 2002, guided by Dr. Jane Goodall DBE.",
      website: "https://treefoundationindia.org",
      location: "Chennai, Tamil Nadu",
      icon: Waves,
      established: "2002",
      keyWork: ["Sea Turtle Conservation", "Marine Ecosystem Protection", "Community Engagement"],
      impact: "Protected 50+ turtle nesting sites across Indian coastline"
    },
    {
      name: "We Grow Forest Foundation",
      focus: "Reforestation",
      description: "Dedicated to growing forests and promoting environmental sustainability through renewable commitments for a greener tomorrow.",
      website: "https://wegrowforest.org",
      location: "India",
      icon: TreePine,
      established: "2020",
      keyWork: ["Reforestation", "Clean Water Initiatives", "Environmental Education"],
      impact: "Planted 100,000+ trees across various states"
    },
    {
      name: "Vanashakti",
      focus: "Forest Conservation",
      description: "Working on forest conservation, environmental protection, and sustainable development with community participation.",
      website: "https://vanashakti.org",
      location: "Maharashtra",
      icon: TreePine,
      established: "1986",
      keyWork: ["Forest Rights", "Biodiversity Conservation", "Environmental Justice"],
      impact: "Protected 500+ hectares of forest land"
    },
    {
      name: "Earth Focus Foundation",
      focus: "Indigenous Communities",
      description: "Empowering indigenous communities and encouraging nature-based economy through landscape restoration.",
      website: "https://www.earthfocus.in",
      location: "Karnataka",
      icon: Mountain,
      established: "2019",
      keyWork: ["Indigenous Rights", "Landscape Restoration", "Sustainable Livelihoods"],
      impact: "Supported 20+ villages in forest buffer zones"
    },
    {
      name: "AERF (Applied Environmental Research Foundation)",
      focus: "Biodiversity Conservation",
      description: "Pioneering conservation on the ground since 1995 with community participation and collaboration.",
      website: "https://www.aerfindia.org",
      location: "Pune, Maharashtra",
      icon: Shield,
      established: "1995",
      keyWork: ["Biodiversity Research", "Community Conservation", "Wildlife Protection"],
      impact: "30+ years of ground-level conservation work"
    },
    {
      name: "Green Yatra",
      focus: "Urban Forestry",
      description: "Making urban India green through unique plantation techniques and native species plantation.",
      website: "https://greenyatra.org",
      location: "Delhi",
      icon: Leaf,
      established: "2010",
      keyWork: ["Urban Forestry", "Native Species Plantation", "Air Pollution Mitigation"],
      impact: "Target: 10 crore trees by 2030"
    },
    {
      name: "ATREE (Ashoka Trust for Research in Ecology)",
      focus: "Environmental Research",
      description: "Globally recognised organisation focused on environmental conservation and sustainable development.",
      website: "https://www.atree.org",
      location: "Bangalore, Karnataka",
      icon: Globe,
      established: "1996",
      keyWork: ["Environmental Research", "Policy Advocacy", "Capacity Building"],
      impact: "Influenced environmental policies across South Asia"
    },
    {
      name: "Dakshin Foundation",
      focus: "Marine & Coastal Conservation",
      description: "Working on marine and coastal conservation, fisheries research, and community-based conservation.",
      website: "https://dakshin.org",
      location: "Bangalore, Karnataka",
      icon: Waves,
      established: "2006",
      keyWork: ["Marine Research", "Coastal Conservation", "Fisheries Management"],
      impact: "Research across 5000+ km of Indian coastline"
    },
    {
      name: "Deepwoods Trust",
      focus: "Climate Action",
      description: "Educating and enabling individuals with essential skills to navigate climate change and contribute to net-zero emissions.",
      website: "https://www.deepwoods.org.in",
      location: "India",
      icon: Target,
      established: "2021",
      keyWork: ["Climate Education", "Net-zero Goals", "Sustainable Future"],
      impact: "Target: Educate 1 million individuals by 2030"
    }
  ];

  const getFocusColor = (focus) => {
    const colors = {
      "Marine Conservation": "bg-sky-blue text-white",
      "Reforestation": "bg-forest-green text-white",
      "Forest Conservation": "bg-forest-green text-white",
      "Indigenous Communities": "bg-earth-brown text-white",
      "Biodiversity Conservation": "bg-leaf-green text-white",
      "Urban Forestry": "bg-leaf-green text-white",
      "Environmental Research": "bg-forest-green text-white",
      "Marine & Coastal Conservation": "bg-sky-blue text-white",
      "Climate Action": "bg-sunset-orange text-white"
    };
    return colors[focus] || "bg-secondary text-secondary-foreground";
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Users className="h-8 w-8 text-forest-green" />
          <h2 className="text-3xl font-bold">Our Collaborations</h2>
        </div>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Partnering with leading environmental NGOs across India to create meaningful impact in conservation, 
          sustainability, and community empowerment. Together, we're building a greener future.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ngos.map((ngo, index) => {
          const Icon = ngo.icon;
          return (
            <Card key={index} className="shadow-soft hover:shadow-nature transition-all duration-300 border-l-4 border-l-forest-green h-full">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="h-6 w-6 text-forest-green" />
                    <div>
                      <CardTitle className="text-lg leading-tight">{ngo.name}</CardTitle>
                      <CardDescription className="text-xs text-muted-foreground">
                        Est. {ngo.established} • {ngo.location}
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <Badge className={`w-fit ${getFocusColor(ngo.focus)} text-xs`}>
                  {ngo.focus}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ngo.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Key Work Areas:</h4>
                  <div className="flex flex-wrap gap-1">
                    {ngo.keyWork.map((work, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {work}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-forest-green" />
                    <span className="text-sm font-medium">Impact:</span>
                  </div>
                  <p className="text-sm text-muted-foreground bg-accent/20 p-2 rounded">
                    {ngo.impact}
                  </p>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group"
                  onClick={() => window.open(ngo.website, '_blank')}
                >
                  <span>Learn More</span>
                  <ExternalLink className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* <Card className="bg-gradient-to-r from-accent/20 to-secondary/20 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TreePine className="h-5 w-5 text-forest-green" />
            Partnership Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We're always looking to expand our network of environmental partners. If you represent an NGO 
            or organization working in sustainability, conservation, or eco-tourism, we'd love to collaborate!
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Reforestation Projects</Badge>
            <Badge variant="secondary">Marine Conservation</Badge>
            <Badge variant="secondary">Wildlife Protection</Badge>
            <Badge variant="secondary">Sustainable Tourism</Badge>
            <Badge variant="secondary">Community Development</Badge>
            <Badge variant="secondary">Climate Action</Badge>
          </div>
          <Button className="mt-4">
            <Users className="h-4 w-4 mr-2" />
            Become a Partner
          </Button>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default Collaborations;