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

export default function CartButton() {


    return (
        <Sheet>
            <SheetTrigger>
                <div className='flex flex-row gap-2 border px-4 py-2 h-10 rounded-full bg-primary text-primary-foreground'>
                    <ShoppingBag className='w-5 h-5' />

                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                    <SheetDescription>
                            <h1>No products.</h1>
                        
                    </SheetDescription> 
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}