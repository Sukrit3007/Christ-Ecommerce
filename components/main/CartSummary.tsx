import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { IndianRupee } from "lucide-react";
import useCartStore from "@/store/cart";


export default function CartSmmmary() {
    const {cartItems} = useCartStore()
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      const totalQuantity = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
    return (
        <Card className="bg-primary text-primary-foreground">
            <CardHeader>
                <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="w-full flex flex-row justify-between items-center"> 
                    <p>
                        Total Price:
                    </p>
                    <p>
                        Rs.  {totalPrice}
                    </p>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                    <p>
                        Total items: 
                    </p>
                    <p>
                        {totalQuantity}
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <Button  variant="expandIcon" Icon={IndianRupee} iconPlacement="right" className="border">
                    Proceed to Checkout
                </Button>
            </CardFooter>
        </Card>

    )
}