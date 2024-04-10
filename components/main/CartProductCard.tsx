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
import { Trash } from 'lucide-react'

interface Product {
    id: any,
    title: string,
    descripiton: string,
    price: string,
    category: string,
    image: string,
}

const CartProductCard = ({ product }: { product: Product }) => {
    return (
        <Card>
            <CardContent className='mt-6'>
                <div className='grid grid-cols-3'>
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
                            <h1 className='text-sm'>
                                {product.title}
                            </h1>
                            <p className='text-xs text-muted-foreground'>
                                Category: {product.category}
                            </p>
                            <p>
                                Rs.{product.price}
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <div>
                    <Button >
                        -
                    </Button>
                    <span>no.</span>
                    <Button >
                        +
                    </Button>
                    <Button variant='destructive'  > 
                        <Trash/>
                    </Button>
                </div>
            </CardFooter>
        </Card>

    )
}

export default CartProductCard
