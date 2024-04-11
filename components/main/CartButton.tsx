import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Car, ShoppingBag } from "lucide-react"
import CartProductCard from "./CartProductCard";
import useCartStore from "@/store/cart";
import CartSmmmary from "./CartSummary";





export default function CartButton() {
    const {cartItems} = useCartStore()


    return (
        <Sheet>
            <SheetTrigger>
                <div className='flex flex-row gap-2 border px-4 py-2 h-10 rounded-full bg-primary text-primary-foreground'>
                    <ShoppingBag className='w-5 h-5' />
                    {cartItems.length}
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                    <SheetDescription >  
                       <div className="h-[70vh] overflow-y-scroll">
                        {cartItems.map((products)=>(
                            <div key={products.id} className="flex flex-col gap-2"> 
                                <CartProductCard  product={products}/>
                            </div>
                        ))} 
                       </div>
                       <div>
                            <CartSmmmary/>
                       </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}