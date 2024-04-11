import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Button } from '../ui/button'
import { Plus, Minus } from 'lucide-react'
import { Product } from '@/types/Product'
import useCartStore from '@/store/cart'


const CartProductCard = ({ product }: { product: Product }) => {
    const { getProductQuantity, increaseQuantity, decreaseQuantity, removeItemFromCart } = useCartStore();

    const quantity = getProductQuantity(product.id)

    function handleIncreaseQuantity() {
        increaseQuantity(product.id)
    }
    function handleDecreaseQuantity() {
        decreaseQuantity(product.id)
    }

    function handleRemoveButton() {
        removeItemFromCart(product.id)
    }
    return (
        <Card>
            <CardContent className='mt-6 flex flex-col gap-2'>
                <div className='grid grid-cols-3 gap-2 text-left'>
                    <div className='col-span-1'>
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={200}
                            height={200}
                            className='aspect-square object-contain'
                        />
                    </div>
                    <div className='col-span-2'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-xs'>
                                {product.title}
                            </h1>
                            <p className='text-xs text-muted-foreground'>
                                Category: {product.category}
                            </p>
                            <p className='text-xs'>
                                Rs.{product.price}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-row items-center justify-between '>
                    <div className='flex flex-row gap-3 items-center '>

                        <div onClick={handleDecreaseQuantity} className='cursor-pointer border p-2 rounded-xl'>
                            <Minus className='w-3 h-3' />
                        </div>

                        <span>
                            {quantity}
                        </span>
                        <div onClick={handleIncreaseQuantity} className='cursor-pointer border p-2 rounded-xl'>
                            <Plus className='w-3 h-3' />
                        </div>
                    </div>
                    <Button variant='destructive' size='sm' onClick={handleRemoveButton}>
                        Remove
                    </Button>
                </div>
            </CardContent>
        </Card>

    )
}

export default CartProductCard
