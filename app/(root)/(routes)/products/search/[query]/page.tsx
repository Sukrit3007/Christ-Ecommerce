'use client'


import ProductCard from '@/components/main/ProductCard';
import * as Craft from "@/components/craft";

import { supabase } from '@/supabase/client';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
}

const Search = () => {
    const [products, setProducts] = useState<any>([]);
    const { query } = useParams();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const { data, error } = await supabase
                .from('product')
                .select('*')
                .or(`title.ilike.%${query}%, description.ilike.%${query}%, category.ilike.%${query}%`);
                
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
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header className="text-left">
                    <h2 className="scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl">
                        Result  for "{query}"
                    </h2>
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

export default Search
