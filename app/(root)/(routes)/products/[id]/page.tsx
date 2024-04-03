'use client'

import { supabase } from "@/supabase/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as Craft from "@/components/craft";
import Image from "next/image";

export default function ProductInfoPage() {
    const { id } = useParams();
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        async function fetchProducts(id:any) {
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

    useEffect
    return(
        <Craft.Section>
            <Craft.Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid col-span-1">
                        <Image
                            src={products.image}
                            alt={products.title}
                            width={500}
                            height={500}
                            className="object-contain aspect-square border border-red-400"
                        />
                    </div>
                    <div className="grid col-span-1">

                    </div>

                </div>
            </Craft.Container>
        </Craft.Section>
    )
}