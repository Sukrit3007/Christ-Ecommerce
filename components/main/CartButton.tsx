import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { ShoppingBag } from "lucide-react"
import CartProductCard from "./CartProductCard";

import CartSmmmary from "./CartSummary";
import { useAppSelector } from "@/lib/hooks/redux";
import { getCart } from "@/redux/cartSlice";


export default function CartButton() {
    const cart = useAppSelector(getCart);

    return (
        <Sheet>
            <SheetTrigger>
                <div className='flex flex-row gap-2 border px-4 py-2 h-10 rounded-full bg-primary text-primary-foreground'>
                    <ShoppingBag className='w-5 h-5' />
                    {cart.length}
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                    <SheetDescription >
                        These are your products.
                    </SheetDescription>
                    <div className="flex flex-col gap-12 justify-between  h-[80vh]">
                            <div className="flex flex-col gap-4 overflow-y-scroll">
                                {cart.map((products: any) => (
                                    <div key={products.id} className="flex flex-col gap-2 ">
                                        <CartProductCard product={products} />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <CartSmmmary />
                            </div>
                        </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}