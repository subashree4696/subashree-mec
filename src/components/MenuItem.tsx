import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Drumstick, Egg } from "lucide-react";

export type FoodType = "veg" | "non-veg" | "egg";

interface MenuItemProps {
  name: string;
  price: number;
  type: FoodType;
  description?: string;
}

const MenuItem = ({ name, price, type, description }: MenuItemProps) => {
  const getIcon = () => {
    switch (type) {
      case "veg":
        return <Leaf className="h-4 w-4" />;
      case "non-veg":
        return <Drumstick className="h-4 w-4" />;
      case "egg":
        return <Egg className="h-4 w-4" />;
    }
  };

  const getBadgeColor = () => {
    switch (type) {
      case "veg":
        return "bg-veg text-white";
      case "non-veg":
        return "bg-non-veg text-white";
      case "egg":
        return "bg-egg text-white";
    }
  };

  return (
    <Card className="transition-all hover:shadow-md hover:bg-card-hover">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Badge className={`${getBadgeColor()} flex items-center gap-1 px-2 py-0.5`}>
                {getIcon()}
                <span className="text-xs capitalize">{type}</span>
              </Badge>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{name}</h3>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-primary">₹{price}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
