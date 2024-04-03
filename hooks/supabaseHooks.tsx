import { supabase } from "@/supabase/client";
import { useState } from 'react';

export const supabaseHooks =() => {
    const [products, setProducts] = useState<any>([])
    const getDataFromSupabase = async () => {
        let { data, error } = await supabase
            .from('products')
            .select('*')

        if(data){
            setProducts(data)
            console.log(data);
        }
        if(error){
            console.log(error)
        }
    }
    return{
        products, 
        getDataFromSupabase,
    }
}