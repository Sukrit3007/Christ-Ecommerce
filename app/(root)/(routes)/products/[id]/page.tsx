'use client'

import * as Craft from "@/components/craft";
import Image from "next/image";
import confetti from 'canvas-confetti';
import FAQ from "@/components/main/Faqs";
import Link from "next/link";

import { supabase } from "@/supabase/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import BackButton from "@/components/main/BackButton";

export default function ProductInfoPage() {
    const { id } = useParams();
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        async function fetchProducts(id: any) {
            try {
                const { data, error } = await supabase
                    .from('product')
                    .select('*')
                    .eq('id', id)
                    .single();
                console.log(data)
                if (error) {
                    throw error;
                }
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchProducts(id);
    }, []);

    const handleClick = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: {
                y: 0.6
            }
        });
    };

    useEffect
    return (
        <Craft.Section>
            <Craft.Container>
                <BackButton/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <div className="grid col-span-1">
                        <Image
                            src={products.image}
                            alt={products.title}
                            width={500}
                            height={500}
                            className="object-contain aspect-square "
                        />
                    </div>
                    <div className="grid col-span-1 overflow-hidden">
                        <div className="flex flex-col gap-8">
                            <div>
                                <h1 className="text-primary-500 text-3xl md:text-4xl">
                                    {products.title}
                                </h1>
                                <p className="mt-1.5 text-muted-foreground text-pretty text-xs h-8 overflow-hidden">
                                    Category: {products.category}
                                </p>
                            </div>
                            <div>
                                <h1 className="text-primary-500 text-2xl md:text-2xl mb-2">
                                    Rs.{products.price}
                                </h1>
                                <div>
                                    <Button variant="expandIcon" Icon={ShoppingBag} iconPlacement="right" onClick={handleClick}>
                                        Add To Cart
                                    </Button>
                                </div>
                            </div>
                            <p className="mt-1.5 text-muted-foreground text-pretty text-xs overflow-hidden">
                                {products.description}
                            </p>
                        </div>
                    </div>

                </div>
                <Separator />
                <FAQ />

            </Craft.Container>
        </Craft.Section>
    )
}