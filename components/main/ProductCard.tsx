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
    return (
            <Card className="">
                <CardContent className="mt-6">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={300}
                        height={300}
                        className=" aspect-square object-contain rounded-xl overflow:hidden"
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
                    <Button variant="expandIcon" Icon={ArrowRight} iconPlacement="right" >
                        <Link href={`/products/${product.id}`}>
                            Learn More
                        </Link>
                    </Button>
                </div>
            </Card>
    )
}