'use client'

import Image from "next/image"
import Link from "next/link"

import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";


interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
}


export default function ProductCard({ product }: { product: Product }) {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${product.id}`);
    }
    return (
        <Link href='#'>
            <Card>
                <CardContent className="mt-6">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={400}
                        className=" aspect-square object-cover rounded-xl overflow:hidden"
                    />
                </CardContent>
                <CardFooter>
                    <div className="flex justify-between text-sm w-full">
                        <div className="flex flex-col w-full ">
                            <h3 className="font-medium group-hover:underline group-hover:underline-offset-4">
                                {product.title}
                            </h3>
                            <p className="mt-1.5 text-pretty text-xs h-8  overflow-hidden">
                                {product.description}
                            </p>
                        </div>
                        <p className="text-sm ">Rs.{product.price}</p>
                    </div>
                </CardFooter>
                <div className="w-full flex justify-between items-center mx-6 mb-6">
                    <Button variant="expandIcon" Icon={ArrowRight} iconPlacement="right" onClick={handleClick}>
                            Learn More
                    </Button>
                </div>
            </Card>
        </Link>
    )
}