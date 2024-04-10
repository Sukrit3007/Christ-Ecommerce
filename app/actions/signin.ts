'use server';


import { supabase } from '@/supabase/client';
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signInWithGoogle = async () =>{
    const origin = headers().get('origin');

    const {error, data} = await supabase.auth.signInWithOAuth({
        provider:'google',
        options: {
            redirectTo: `${origin}`,
        }
    })

    if(error){
        console.log(error)
    }else{
        console.log(`${origin}/`)
        return redirect(data.url) 
    }
}   