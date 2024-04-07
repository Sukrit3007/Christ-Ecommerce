'use client'

import { supabase } from "@/supabase/client";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
}

export default function NewArrival() {
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const { data, error } = await supabase
                .from('product')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(4);

                if (error) {
                    throw error;
                }
                console.log(data)
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchProducts();
    }, [])

    return (
        <div>
            <header className="text-center">
                <h2 className="scroll-m-20 text-primary-500  text-4xl font-semibold tracking-tight lg:text-5xl">
                    New Arrival
                </h2>
            </header>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>
        </div>
    )
}