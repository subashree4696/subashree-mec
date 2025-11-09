import Navigation from "@/components/Navigation";
import MenuItem from "@/components/MenuItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  const menuData = {
    breakfast: [
      { name: "Idli (3 pcs)", price: 30, type: "veg" as const, description: "Soft steamed rice cakes with sambar and chutney" },
      { name: "Dosa", price: 35, type: "veg" as const, description: "Crispy rice crepe with sambar and chutney" },
      { name: "Vada (2 pcs)", price: 25, type: "veg" as const, description: "Crispy lentil fritters" },
      { name: "Pongal", price: 35, type: "veg" as const, description: "Savory rice and lentil dish" },
      { name: "Upma", price: 30, type: "veg" as const, description: "Semolina breakfast dish" },
      { name: "Poori (3 pcs)", price: 40, type: "veg" as const, description: "Deep-fried bread with potato curry" },
      { name: "Bread Omelette", price: 40, type: "egg" as const, description: "Fluffy omelette with bread" },
      { name: "Egg Dosa", price: 45, type: "egg" as const, description: "Crispy dosa with egg topping" },
    ],
    lunch: [
      { name: "Meals (Full)", price: 80, type: "veg" as const, description: "Traditional South Indian thali with rice, sambar, rasam, curries" },
      { name: "Sambar Rice", price: 50, type: "veg" as const, description: "Rice mixed with flavorful sambar" },
      { name: "Curd Rice", price: 40, type: "veg" as const, description: "Rice with fresh yogurt and tempering" },
      { name: "Biryani (Veg)", price: 70, type: "veg" as const, description: "Aromatic vegetable biryani with raita" },
      { name: "Biryani (Chicken)", price: 100, type: "non-veg" as const, description: "Flavorful chicken biryani with raita" },
      { name: "Fried Rice (Veg)", price: 60, type: "veg" as const, description: "Indo-Chinese fried rice" },
      { name: "Fried Rice (Chicken)", price: 80, type: "non-veg" as const, description: "Chicken fried rice" },
      { name: "Chapati with Curry (2 pcs)", price: 50, type: "veg" as const, description: "Soft whole wheat bread with curry" },
    ],
    snacks: [
      { name: "Samosa (2 pcs)", price: 20, type: "veg" as const, description: "Crispy pastry with potato filling" },
      { name: "Vada Pav", price: 25, type: "veg" as const, description: "Spicy potato fritter in a bun" },
      { name: "Pakoda (100g)", price: 30, type: "veg" as const, description: "Mixed vegetable fritters" },
      { name: "Sandwich (Veg)", price: 35, type: "veg" as const, description: "Grilled vegetable sandwich" },
      { name: "Puff (Veg)", price: 25, type: "veg" as const, description: "Flaky pastry with vegetable filling" },
      { name: "Puff (Egg)", price: 30, type: "egg" as const, description: "Flaky pastry with egg filling" },
      { name: "Cutlet (2 pcs)", price: 30, type: "veg" as const, description: "Crispy vegetable cutlets" },
      { name: "Bonda (2 pcs)", price: 20, type: "veg" as const, description: "Potato fritters" },
    ],
    dinner: [
      { name: "Chapati with Curry (3 pcs)", price: 60, type: "veg" as const, description: "Soft whole wheat bread with curry" },
      { name: "Parota (2 pcs)", price: 40, type: "veg" as const, description: "Layered flatbread with curry" },
      { name: "Fried Rice (Veg)", price: 60, type: "veg" as const, description: "Indo-Chinese fried rice" },
      { name: "Fried Rice (Chicken)", price: 80, type: "non-veg" as const, description: "Chicken fried rice" },
      { name: "Noodles (Veg)", price: 60, type: "veg" as const, description: "Stir-fried vegetable noodles" },
      { name: "Noodles (Chicken)", price: 80, type: "non-veg" as const, description: "Chicken noodles" },
      { name: "Dosa", price: 35, type: "veg" as const, description: "Crispy rice crepe with sambar and chutney" },
    ],
    beverages: [
      { name: "Tea", price: 10, type: "veg" as const, description: "Hot milk tea" },
      { name: "Coffee", price: 15, type: "veg" as const, description: "Hot filter coffee" },
      { name: "Lemon Tea", price: 15, type: "veg" as const, description: "Refreshing lemon tea" },
      { name: "Cool Drinks", price: 20, type: "veg" as const, description: "Assorted soft drinks" },
      { name: "Mineral Water", price: 20, type: "veg" as const, description: "500ml bottled water" },
      { name: "Lassi", price: 30, type: "veg" as const, description: "Sweet yogurt drink" },
      { name: "Fresh Juice", price: 40, type: "veg" as const, description: "Seasonal fruit juice" },
      { name: "Buttermilk", price: 15, type: "veg" as const, description: "Traditional spiced buttermilk" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">Our Menu</h1>
          <p className="text-muted-foreground text-lg">
            Delicious and affordable food options for the MEC community
          </p>
        </div>

        <Tabs defaultValue="breakfast" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
            <TabsTrigger value="lunch">Lunch</TabsTrigger>
            <TabsTrigger value="snacks">Snacks</TabsTrigger>
            <TabsTrigger value="dinner">Dinner</TabsTrigger>
            <TabsTrigger value="beverages">Beverages</TabsTrigger>
          </TabsList>

          <TabsContent value="breakfast">
            <div className="grid md:grid-cols-2 gap-4">
              {menuData.breakfast.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="lunch">
            <div className="grid md:grid-cols-2 gap-4">
              {menuData.lunch.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="snacks">
            <div className="grid md:grid-cols-2 gap-4">
              {menuData.snacks.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dinner">
            <div className="grid md:grid-cols-2 gap-4">
              {menuData.dinner.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="beverages">
            <div className="grid md:grid-cols-2 gap-4">
              {menuData.beverages.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Menu;
