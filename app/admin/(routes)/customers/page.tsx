'use client'

import React, { useState, useEffect } from 'react';
import { DataTable } from "./data-table";
import { supabase } from "@/supabase/client";


export default function Customers() {
    const [usersData, setUserData] = useState<any>([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const { data: { users }, error } = await supabase
                .auth
                .admin
                .listUsers()

                if (error) {
                    throw error;
                }
                console.log(users)
                setUserData(users);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
        console.log(usersData)
    }, []);
    

    return (
        <main className="grid items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <h1>Customer List</h1>
           
        </main>
    );
}

