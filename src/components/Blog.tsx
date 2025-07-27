import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Search, 
  Calendar, 
  User, 
  Clock,
  TreePine,
  Waves,
  Mountain,
  Leaf,
  Globe,
  Lightbulb,
  ArrowRight,
  Heart
} from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Eco-Friendly Destinations in India",
      excerpt: "Discover pristine locations that offer sustainable tourism experiences while preserving local ecosystems and supporting communities.",
      content: `India offers incredible destinations that combine breathtaking beauty with sustainable practices. Here are our top 10 eco-friendly destinations:

**1. Spiti Valley, Himachal Pradesh**
High-altitude desert offering homestays with solar power, organic farming, and minimal environmental impact. Local communities practice traditional sustainable living.

**2. Wayanad, Kerala**
Known for its responsible wildlife tourism, organic spice plantations, and eco-resorts that use renewable energy and rainwater harvesting.

**3. Majuli Island, Assam**
World's largest river island promoting eco-tourism through bamboo cottages, organic farming, and preservation of Assamese culture.

**4. Khonoma Village, Nagaland**
India's first green village, completely organic with community-based conservation and sustainable terraced farming.

**5. Mawlynnong, Meghalaya**
Asia's cleanest village with community-driven cleanliness initiatives, living root bridges, and plastic-free environment.

**6. Coorg, Karnataka**
Coffee plantations practicing shade-grown organic cultivation, homestays in traditional architecture, and wildlife conservation.

**7. Andaman Islands**
Marine conservation areas with coral reef protection, sustainable diving practices, and eco-certified resorts.

**8. Hemis National Park, Ladakh**
High-altitude conservation area with community-based tourism, solar-powered accommodations, and snow leopard conservation.

**9. Sundarbans, West Bengal**
Mangrove ecosystem with responsible boat tours, community guides, and tiger conservation initiatives.

**10. Silent Valley, Kerala**
Pristine tropical rainforest with minimal human impact, guided nature walks, and indigenous species protection.

Each destination offers unique opportunities to experience India's natural beauty while contributing to conservation efforts.`,
      author: "Priya Sharma",
      date: "2024-12-15",
      readTime: "8 min read",
      category: "destinations",
      tags: ["eco-tourism", "sustainable travel", "India", "conservation"],
      icon: Mountain
    },
    {
      id: 2,
      title: "Understanding Carbon Offsetting: A Complete Guide",
      excerpt: "Learn how carbon offsetting works, why it matters, and how you can calculate and offset your travel emissions effectively.",
      content: `Carbon offsetting has become crucial for sustainable travel. Here's everything you need to know:

**What is Carbon Offsetting?**
Carbon offsetting involves compensating for CO2 emissions by funding projects that remove or reduce equivalent amounts of greenhouse gases from the atmosphere.

**How Does It Work?**
1. **Calculate Emissions**: Determine your travel's carbon footprint
2. **Purchase Offsets**: Buy credits equivalent to your emissions
3. **Support Projects**: Your money funds verified environmental projects
4. **Net-Zero Impact**: Your emissions are theoretically neutralized

**Types of Offset Projects:**

**Reforestation & Afforestation**
- Tree planting initiatives in deforested areas
- Cost: ₹150-300 per ton of CO2
- Benefits: Biodiversity, soil conservation, local employment

**Renewable Energy**
- Solar, wind, and hydroelectric projects
- Cost: ₹200-400 per ton of CO2
- Benefits: Clean energy infrastructure, job creation

**Methane Capture**
- Capturing methane from landfills and farms
- Cost: ₹100-250 per ton of CO2
- Benefits: Waste management, reduced pollution

**Energy Efficiency**
- Improved cookstoves, efficient appliances
- Cost: ₹180-350 per ton of CO2
- Benefits: Health improvements, cost savings

**Calculating Your Travel Footprint:**
- Domestic flight (500km): 85kg CO2 = ₹212 offset cost
- International flight (2000km): 510kg CO2 = ₹1,275 offset cost
- Train travel (500km): 20kg CO2 = ₹50 offset cost
- Car travel (500km): 85kg CO2 = ₹212 offset cost

**Choosing Quality Offsets:**
Look for certifications like Gold Standard, VCS (Verified Carbon Standard), or CDM (Clean Development Mechanism).

**Limitations:**
- Not a substitute for reducing emissions
- Some projects may not deliver promised results
- Time lag between offsetting and actual carbon removal

**Best Practices:**
1. Reduce emissions first, offset what you can't avoid
2. Choose additional projects (beyond business-as-usual)
3. Support local projects when possible
4. Verify project credentials and monitoring

Carbon offsetting is a valuable tool but should complement, not replace, efforts to minimize your environmental impact.`,
      author: "Dr. Rajesh Kumar",
      date: "2024-12-10",
      readTime: "12 min read",
      category: "education",
      tags: ["carbon offsetting", "climate change", "emissions", "sustainability"],
      icon: Globe
    },
    {
      id: 3,
      title: "Sustainable Travel Tips for Budget Travelers",
      excerpt: "Discover how to travel responsibly without breaking the bank. Practical tips for eco-conscious budget travel in India.",
      content: `Sustainable travel doesn't have to be expensive. Here's how to travel green on a budget:

**Transportation Savings:**

**Choose Trains Over Flights**
- 75% less expensive than flights
- 80% lower carbon emissions
- Overnight journeys save accommodation costs
- Book in advance for better prices

**Bus Travel**
- Most economical option for medium distances
- 60% less emissions than private cars
- Sleeper buses for overnight travel
- Government buses are cheapest

**Local Transportation**
- Use public buses and metros
- Rent bicycles (₹50-100/day)
- Walk for short distances
- Avoid private taxis and autos

**Accommodation Strategies:**

**Homestays & Guesthouses**
- ₹500-1500/night vs ₹3000+ for hotels
- Direct income to local families
- Authentic cultural experiences
- Often include home-cooked meals

**Hostels**
- ₹300-800/night for dorm beds
- Meet like-minded travelers
- Shared resources reduce environmental impact
- Often have kitchen facilities

**Eco-Friendly Options**
- Solar-powered accommodations
- Rainwater harvesting systems
- Organic gardens
- Waste management practices

**Food & Dining:**

**Street Food & Local Eateries**
- ₹50-150 per meal vs ₹500+ in restaurants
- Minimal packaging waste
- Support local economy
- Authentic regional cuisine

**Cook Your Own Meals**
- Buy from local markets
- Use accommodation kitchen facilities
- Reduce food waste
- Control ingredients and hygiene

**Seasonal & Local Produce**
- Cheaper when in season
- Lower transportation emissions
- Support local farmers
- Better taste and nutrition

**Activity & Experience Savings:**

**Free Activities**
- Nature walks and hiking
- Beach visits and swimming
- Local markets and bazaars
- Cultural festivals and events

**Community-Based Tourism**
- Village walks and farm visits
- Traditional craft workshops
- Cultural exchange programs
- Direct payment to communities

**Self-Guided Tours**
- Use mobile apps and online resources
- Create your own itineraries
- No guide fees
- Travel at your own pace

**Gear & Equipment:**

**Reusable Items**
- Water bottle (saves ₹20-50/day)
- Food containers and cutlery
- Cloth bags for shopping
- Rechargeable power banks

**Rent Instead of Buy**
- Trekking equipment rental
- Camera and photography gear
- Camping equipment
- Seasonal clothing

**Multi-Purpose Items**
- Sarong (towel, blanket, cover-up)
- Universal adapter
- Quick-dry clothing
- Minimal toiletries

**Planning & Booking:**

**Off-Season Travel**
- 30-50% lower prices
- Less crowded destinations
- Better local interaction
- Reduced environmental pressure

**Advance Booking**
- Early bird discounts
- Better accommodation choices
- Train booking 120 days in advance
- Flight deals 6-8 weeks prior

**Group Travel**
- Shared accommodation costs
- Group discounts for activities
- Shared transportation
- Reduced per-person impact

**Money-Saving Apps & Resources:**
- IRCTC for train bookings
- RedBus for bus travel
- OYO for budget stays
- Zomato for local food deals

**Sample Budget Breakdown (3-day trip):**
- Transport: ₹800 (train)
- Accommodation: ₹1,200 (homestay)
- Food: ₹900 (local eateries)
- Activities: ₹500 (free/low-cost)
- Total: ₹3,400 per person

Remember: The most sustainable trip is often the most budget-friendly one!`,
      author: "Arun Mishra",
      date: "2024-12-08",
      readTime: "10 min read",
      category: "tips",
      tags: ["budget travel", "sustainable travel", "money-saving", "backpacking"],
      icon: Lightbulb
    },
    {
      id: 4,
      title: "Marine Conservation in India: Protecting Our Coastal Heritage",
      excerpt: "Explore India's marine ecosystems, conservation challenges, and how sustainable tourism can help protect our blue heritage.",
      content: `India's 7,517 km coastline hosts incredible marine biodiversity that needs urgent protection:

**India's Marine Ecosystems:**

**Coral Reefs**
- Andaman & Nicobar Islands: 572 coral species
- Lakshadweep: 104 coral species
- Gulf of Mannar: 117 coral species
- Gulf of Kutch: 42 coral species

**Mangrove Forests**
- Sundarbans: World's largest mangrove forest
- Godavari-Krishna deltas
- Mahanadi delta
- Andaman & Nicobar coastlines

**Sea Grass Meadows**
- Palk Bay and Gulf of Mannar
- Lakshadweep lagoons
- Andaman coastal areas
- Critical for dugong and turtle habitats

**Major Threats:**

**Pollution**
- Plastic waste: 15,000 tons annually
- Industrial discharge
- Agricultural runoff
- Untreated sewage

**Overfishing**
- Trawling damage to seafloor
- Juvenile fish harvesting
- Ghost fishing from abandoned nets
- Declining fish populations

**Climate Change**
- Coral bleaching events
- Sea level rise
- Ocean acidification
- Changing ocean temperatures

**Coastal Development**
- Port expansion projects
- Tourist infrastructure
- Industrial establishments
- Habitat destruction

**Conservation Initiatives:**

**Marine Protected Areas (MPAs)**
- 31 MPAs covering 6,570 sq km
- Gulf of Mannar Biosphere Reserve
- Mahatma Gandhi Marine National Park
- Gahirmatha Marine Sanctuary

**Community-Based Conservation**
- Fisher community involvement
- Traditional ecological knowledge
- Alternative livelihood programs
- Conservation awareness campaigns

**Research & Monitoring**
- Coral health assessments
- Fish population surveys
- Water quality monitoring
- Climate impact studies

**Restoration Projects**
- Coral transplantation
- Mangrove replantation
- Seagrass restoration
- Coastal cleanup drives

**Sustainable Marine Tourism:**

**Responsible Diving & Snorkeling**
- Certified dive operators only
- No touching or collecting marine life
- Proper buoyancy control
- Small group sizes

**Whale & Dolphin Watching**
- Maintain safe distances
- No feeding or harassment
- Certified naturalist guides
- Speed limits in sensitive areas

**Beach Tourism**
- No plastic policy
- Turtle nesting site protection
- Dune vegetation conservation
- Waste management systems

**Mangrove Tourism**
- Boardwalk systems to minimize impact
- Small boat tours with electric motors
- Local guide training programs
- Revenue sharing with communities

**Success Stories:**

**Olive Ridley Turtle Conservation**
- Gahirmatha: 150,000 nesting turtles annually
- Community patrol programs
- Fishing ban during nesting season
- LED lights to reduce disorientation

**Coral Restoration in Lakshadweep**
- 5 hectares of degraded reef restored
- Community involvement in monitoring
- Alternative livelihood for fishers
- 60% survival rate for transplanted corals

**Mangrove Restoration in Sundarbans**
- 2,000 hectares replanted since 2010
- Tiger habitat enhancement
- Storm surge protection
- Carbon sequestration benefits

**How Travelers Can Help:**

**Choose Certified Operators**
- Marine Stewardship Council certification
- Blue Flag beach standards
- Responsible tour operator certification
- Community-based tourism initiatives

**Follow Guidelines**
- No single-use plastics
- Respect marine life viewing distances
- Use reef-safe sunscreen
- Participate in beach cleanups

**Support Conservation**
- Visit marine parks and sanctuaries
- Donate to conservation organizations
- Choose eco-certified accommodations
- Buy sustainable seafood only

**Economic Impact:**
Marine tourism contributes ₹20,000 crore annually to India's economy while supporting 2.5 million livelihoods.

Protecting our marine heritage ensures these benefits continue for future generations while preserving irreplaceable ecosystems.`,
      author: "Dr. Meera Nair",
      date: "2024-12-05",
      readTime: "15 min read",
      category: "conservation",
      tags: ["marine conservation", "coastal tourism", "coral reefs", "biodiversity"],
      icon: Waves
    },
    {
      id: 5,
      title: "Reforestation Projects: How Travel Can Help Plant Trees",
      excerpt: "Learn about India's reforestation initiatives and how your travel choices can contribute to forest restoration efforts.",
      content: `India loses 1.38 million hectares of forest annually, but reforestation efforts are creating hope:

**India's Forest Challenge:**

**Current Statistics**
- Forest cover: 21.71% of total area (2021)
- Required forest cover: 33% as per National Forest Policy
- Deforestation rate: 2,261 sq km annually
- Primary causes: Agriculture, urbanization, mining

**Major Reforestation Programs:**

**Green India Mission**
- Goal: Increase forest cover by 5 million hectares
- Budget: ₹46,000 crore over 10 years
- Focus: Degraded forest restoration
- Community participation emphasis

**Nagar Van Scheme**
- Urban forest creation initiative
- 200 cities participating
- Goal: 1,000 urban forests
- Air quality improvement focus

**Van Mahotsav Campaign**
- Annual tree planting festival (July)
- 50+ million saplings planted yearly
- Community and school involvement
- Awareness and education component

**CAMPA (Compensatory Afforestation)**
- ₹50,000 crore fund for forest restoration
- Compensation for forest land diversion
- Technology-enabled monitoring
- Quality over quantity approach

**Regional Success Stories:**

**Himachal Pradesh**
- Increased forest cover from 66.52% to 71.05%
- Community forest management
- Fruit tree plantation programs
- Eco-tourism revenue sharing

**Telangana's Haritha Haram**
- 230 crore saplings planted since 2015
- Forest cover increased by 3,229 sq km
- Urban green cover expansion
- Water conservation integration

**Gujarat's Satyamev Jayate**
- 50 lakh trees planted in single day
- Miyawaki forest technique adoption
- Industrial participation
- Technology-enabled monitoring

**Odisha's Mo Jungle Jami Yojana**
- Community-based forest restoration
- Revenue sharing with villages
- Joint forest management committees
- Sustainable livelihood creation

**How Travel Supports Reforestation:**

**Carbon Offset Programs**
- Tree planting projects for emission compensation
- ₹150-300 per tree (including maintenance)
- GPS tracking and monitoring systems
- Verified carbon credits

**Eco-Tourism Revenue**
- Entry fees fund forest restoration
- Guide fees support local communities
- Accommodation taxes for conservation
- Activity permits for specific projects

**Volunteer Tourism**
- Tree planting expeditions
- Nursery management activities
- Monitoring and maintenance work
- Community education programs

**Choosing the Right Projects:**

**Quality Indicators**
- Native species selection
- Survival rate monitoring (>70%)
- Community involvement
- Long-term maintenance plans

**Verified Organizations**
- Forest Department partnerships
- NGO certifications
- Transparent fund utilization
- Regular progress reports

**Technology Integration**
- GPS tagging of planted trees
- Satellite monitoring systems
- Mobile app tracking
- Blockchain verification

**Tree Species for Different Regions:**

**Northern Plains**
- Neem, Peepal, Banyan
- Mango, Jamun, Sheesham
- Fast growth, drought resistance
- Air purification properties

**Western Ghats**
- Teak, Rosewood, Sandalwood
- Jackfruit, Tamarind, Kokum
- Biodiversity support
- Soil conservation benefits

**Himalayas**
- Deodar, Pine, Oak
- Rhododendron, Birch, Maple
- Altitude-specific varieties
- Cold resistance adaptation

**Coastal Areas**
- Coconut, Cashew, Areca
- Mangrove species restoration
- Salt tolerance adaptation
- Cyclone resistance

**Innovative Approaches:**

**Miyawaki Method**
- 30x faster growth than conventional
- 100x more biodiversity
- Self-sustaining after 3 years
- 90% less water requirement

**Aerial Seeding**
- Drone-based seed dispersal
- Inaccessible area coverage
- Cost-effective for large areas
- Weather-dependent success

**Smart Nurseries**
- IoT-enabled monitoring
- Automated irrigation systems
- Disease prediction algorithms
- Optimal growth conditions

**Community Engagement:**

**Village Forest Committees**
- Local ownership and management
- Traditional knowledge integration
- Sustainable harvesting rights
- Conservation awareness programs

**School Programs**
- Environmental education
- Tree adoption initiatives
- Regular monitoring activities
- Future conservationist development

**Women's Self-Help Groups**
- Nursery management training
- Income generation opportunities
- Leadership development
- Community mobilization

**Economic Benefits:**

**Direct Employment**
- Nursery workers: ₹8,000-12,000/month
- Forest guards: ₹15,000-25,000/month
- Plantation supervisors: ₹20,000-35,000/month
- Research assistants: ₹25,000-50,000/month

**Indirect Benefits**
- Improved agricultural yields
- Water table recharge
- Climate regulation
- Tourism revenue increase

**Travel Integration Tips:**

**Before Travel**
- Calculate your trip's carbon footprint
- Choose certified offset programs
- Research destination conservation needs
- Book accommodations supporting reforestation

**During Travel**
- Participate in tree planting activities
- Visit forest restoration sites
- Support local nurseries
- Document and share experiences

**After Travel**
- Monitor your planted trees via apps
- Share success stories on social media
- Encourage others to participate
- Continue supporting projects financially

Every tree planted today will provide benefits for the next 50-100 years, making reforestation one of the most impactful ways travelers can contribute to environmental conservation.`,
      author: "Vikram Singh",
      date: "2024-12-01",
      readTime: "18 min read",
      category: "conservation",
      tags: ["reforestation", "tree planting", "carbon offset", "forest conservation"],
      icon: TreePine
    },
    {
      id: 6,
      title: "Sustainable Food Tourism: Eating Your Way to a Better Planet",
      excerpt: "Discover how food choices while traveling can support local communities, reduce environmental impact, and create authentic experiences.",
      content: `Food tourism accounts for 30% of travel spending globally. Here's how to make it sustainable:

**The Environmental Impact of Food:**

**Carbon Footprint by Food Type**
- Beef: 60kg CO2 per kg
- Lamb: 24kg CO2 per kg
- Cheese: 21kg CO2 per kg
- Chicken: 6kg CO2 per kg
- Vegetables: 2kg CO2 per kg
- Grains: 1.4kg CO2 per kg

**Transportation Impact**
- Local produce: 0.1kg CO2 per km
- Refrigerated transport: 0.5kg CO2 per km
- Air freight: 9.5kg CO2 per km
- Out-of-season imports: 15x higher emissions

**Water Usage**
- Rice: 2,500 liters per kg
- Wheat: 1,300 liters per kg
- Vegetables: 300 liters per kg
- Fruits: 900 liters per kg

**Sustainable Food Tourism Principles:**

**Local & Seasonal Eating**
- Reduces transportation emissions by 80%
- Supports local farmers and economy
- Ensures peak freshness and nutrition
- Connects travelers with regional culture

**Plant-Forward Cuisine**
- 50% lower carbon footprint
- Supports biodiversity
- Reduces water consumption
- Often more affordable

**Minimal Food Waste**
- Order appropriate portions
- Share dishes when possible
- Take leftovers when permitted
- Compost food scraps

**Sustainable Sourcing**
- Organic and pesticide-free
- Fair trade certified products
- Traditional seed varieties
- Regenerative agriculture practices

**Regional Sustainable Cuisines:**

**South India**
- Banana leaf serving (zero waste)
- Coconut-based cooking (local sourcing)
- Fermented foods (probiotics, preservation)
- Traditional recipes using indigenous grains

*Recommended dishes:*
- Ragi mudde (finger millet)
- Jackfruit curry (meat alternative)
- Coconut chutney (local ingredients)
- Traditional sambar (lentil-based protein)

**North India**
- Seasonal vegetable preparations
- Traditional grains like bajra, jowar
- Dairy from local sources
- Clay pot cooking (sustainable materials)

*Recommended dishes:*
- Bajra khichdi (pearl millet)
- Seasonal sabzi (local vegetables)
- Makki di roti (corn flatbread)
- Traditional dal preparations

**Northeast India**
- Bamboo shoot preparations
- Wild vegetable collection
- Fermented foods tradition
- Minimal processing methods

*Recommended dishes:*
- Bamboo shoot curry
- Wild fern preparations
- Fermented fish (traditional preservation)
- Local leafy greens

**Coastal Regions**
- Sustainable seafood choices
- Coconut-based cooking
- Seaweed and sea vegetables
- Traditional fishing community recipes

*Recommended dishes:*
- Locally caught fish curry
- Seaweed salads
- Coconut-based preparations
- Traditional fishing community meals

**Finding Sustainable Food Experiences:**

**Farm-to-Table Restaurants**
- Direct farmer partnerships
- Seasonal menu changes
- Transparent sourcing information
- Minimal food miles

**Community Kitchens**
- Local family cooking experiences
- Traditional recipe learning
- Ingredient sourcing tours
- Cultural exchange opportunities

**Organic Farms & Agritourism**
- On-site dining experiences
- Harvest participation
- Cooking workshops
- Sustainable farming education

**Local Markets & Street Food**
- Direct producer purchases
- Minimal packaging waste
- Authentic local flavors
- Economic impact on communities

**Responsible Food Tourism Practices:**

**Research Before You Go**
- Learn about regional cuisines
- Identify sustainable restaurants
- Understand seasonal ingredients
- Know local food customs

**Ask the Right Questions**
- Where do ingredients come from?
- What's currently in season?
- Are there organic options?
- Can portions be adjusted?

**Support the Right Places**
- Family-owned restaurants
- Farm-to-table establishments
- Certified organic eateries
- Community-based food initiatives

**Minimize Waste**
- Bring reusable water bottles
- Carry food containers for leftovers
- Avoid single-use plastics
- Compost when possible

**Traditional Preservation Methods:**

**Fermentation**
- Extends shelf life naturally
- Enhances nutritional value
- Reduces need for refrigeration
- Rich cultural traditions

*Examples:*
- Idli/Dosa batter (South India)
- Gundruk (Nepal/Sikkim)
- Hawaijar (Manipur)
- Khalpi (Himachal Pradesh)

**Drying & Dehydration**
- Solar drying techniques
- Reduces post-harvest loss
- Concentrates flavors
- Long-term storage without refrigeration

*Examples:*
- Sun-dried vegetables
- Dried fruits and nuts
- Spice preparations
- Traditional pickles

**Creating Your Sustainable Food Journey:**

**Week-Long Itinerary Example:**

**Day 1-2: Urban Farm Tours**
- Visit organic farms near cities
- Participate in harvesting
- Cook with fresh ingredients
- Learn sustainable techniques

**Day 3-4: Rural Homestays**
- Stay with farming families
- Participate in daily cooking
- Learn traditional recipes
- Understand local food systems

**Day 5-6: Coastal Communities**
- Experience sustainable fishing
- Learn traditional preservation
- Cook with seaweed and sea vegetables
- Understand marine conservation

**Day 7: Market & Cooking Workshop**
- Visit local farmers markets
- Select seasonal ingredients
- Attend cooking workshop
- Create sustainable meal plan

**Economic Impact:**

**Local Economy Support**
- 80% of food spending stays in community
- Direct farmer income support
- Local job creation
- Cultural preservation incentives

**Fair Pricing**
- Pay fair prices for quality ingredients
- Tip appropriately for services
- Support small-scale producers
- Invest in community food projects

**Long-term Benefits**
- Encourages sustainable farming
- Preserves traditional knowledge
- Maintains biodiversity
- Supports food security

**Technology Tools:**

**Apps for Sustainable Food Tourism**
- HappyCow (vegan/vegetarian options)
- Seasonal Food Guide (India-specific)
- Zero Waste restaurants locator
- Farm-to-table restaurant finder

**Certification Programs**
- India Organic certification
- FSSAI eco-friendly labels
- Fair Trade certified products
- Rainforest Alliance certification

**Measuring Impact:**

**Personal Metrics**
- Percentage of local food consumed
- Food waste generated
- Carbon footprint of meals
- Money spent in local food system

**Community Metrics**
- Local farmers supported
- Traditional recipes learned
- Cultural experiences gained
- Environmental impact reduced

Remember: Every meal is an opportunity to vote for the kind of food system you want to support. Make each bite count toward a more sustainable future!`,
      author: "Chef Anita Reddy",
      date: "2024-11-28",
      readTime: "20 min read",
      category: "tips",
      tags: ["food tourism", "sustainable eating", "local cuisine", "cultural exchange"],
      icon: Leaf
    }
  ];

  const categories = [
    { id: "all", label: "All Posts", count: blogPosts.length },
    { id: "destinations", label: "Destinations", count: blogPosts.filter(p => p.category === "destinations").length },
    { id: "tips", label: "Travel Tips", count: blogPosts.filter(p => p.category === "tips").length },
    { id: "conservation", label: "Conservation", count: blogPosts.filter(p => p.category === "conservation").length },
    { id: "education", label: "Education", count: blogPosts.filter(p => p.category === "education").length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const [expandedPost, setExpandedPost] = useState(null);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <BookOpen className="h-8 w-8 text-forest-green" />
          <h2 className="text-3xl font-bold">Sustainable Travel Blog</h2>
        </div>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Explore in-depth articles about sustainable travel, conservation efforts, and eco-friendly practices. 
          Learn from experts and discover how to make your journeys more meaningful and environmentally responsible.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="text-xs"
            >
              {category.label} ({category.count})
            </Button>
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => {
          const Icon = post.icon;
          const isExpanded = expandedPost === post.id;
          
          return (
            <Card key={post.id} className="shadow-soft hover:shadow-nature transition-all duration-300 border-l-4 border-l-forest-green h-fit">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <Icon className="h-6 w-6 text-forest-green mt-1" />
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight mb-2">{post.title}</CardTitle>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('en-IN')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs capitalize">
                      {post.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {post.excerpt}
                </CardDescription>
                
                {isExpanded && (
                  <div className="space-y-4">
                    <div className="text-sm leading-relaxed whitespace-pre-line text-foreground">
                      {post.content}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full group justify-between"
                  onClick={() => setExpandedPost(isExpanded ? null : post.id)}
                >
                  <span>{isExpanded ? "Read Less" : "Read More"}</span>
                  <ArrowRight className={`h-3 w-3 transition-transform ${isExpanded ? "rotate-90" : "group-hover:translate-x-1"}`} />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredPosts.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or category filter.</p>
          </CardContent>
        </Card>
      )}

      {/* Newsletter Signup */}
      {/* <Card className="bg-gradient-to-r from-accent/20 to-secondary/20 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-forest-green" />
            Stay Updated with Sustainable Travel Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Get weekly updates on sustainable travel tips, conservation news, and eco-friendly destination guides 
            delivered straight to your inbox.
          </p>
          <div className="flex gap-2">
            <Input placeholder="Enter your email address" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default Blog;