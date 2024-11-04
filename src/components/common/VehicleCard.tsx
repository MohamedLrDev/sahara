import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "../ui/button";

const VehicleCard = () => {
  return (
    <Card className="w-fit">
      <CardHeader>
        <div className="w-full flex justify-center">
            <img src="https://placehold.co/200x200" alt="" />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>Vehicle Title</CardTitle>
        <CardDescription>Vehicle Type</CardDescription>
      </CardContent>
      <CardFooter className="gap-2">
        <Button>Rent Now</Button>
        <Button>Add to cart</Button>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;
