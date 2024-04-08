'use client'


import ProductCard from "@/components/main/ProductCard";
import { supabase } from "@/supabase/client";
import { useEffect, useState } from "react";
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BackButton from "@/components/main/BackButton";

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
}

export default function ProductPage() {
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const { data, error } = await supabase.from('product').select('*');
                if (error) {
                    throw error;
                }
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchProducts();
    }, []);
    return (
        <Craft.Section>
            <Craft.Container>
                <div className="not-prose flex flex-col gap-6">
                    <BackButton/>
                    <header className="text-center">
                        <h2 className="scroll-m-20 text-primary-500  text-4xl font-semibold tracking-tight lg:text-5xl">
                            Product Collection
                        </h2>
                        <p className="mx-auto mt-4 max-w-md font-light">
                            Discover our latest collection of premium products. From timeless classics to modern essentials,
                            we have something for everyone.
                        </p>
                    </header>

                    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {products.map((product: Product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </ul>
                </div>

            </Craft.Container>
        </Craft.Section>

    )
}   