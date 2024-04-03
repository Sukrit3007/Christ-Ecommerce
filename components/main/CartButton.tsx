import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"

export default function CartButton() {
    return (
        <Sheet>
            <SheetTrigger>
                <div className='flex flex-row gap-2 border px-4 py-2 h-10 rounded-full bg-primary text-primary-foreground'>
                    <ShoppingCart className='w-5 h-5' />
                    1
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                    <SheetDescription>
                        No Products
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}