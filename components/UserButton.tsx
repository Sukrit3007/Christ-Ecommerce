'use client'


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleUser } from 'lucide-react';
import { useEffect, useState } from "react";
import { supabase } from "@/supabase/client";
import Link from "next/link";
import SignOutButton from "./auth/SignOutButton";

export default function UserButton() {
    const [userData, setUserData] = useState<any>({});

    // useEffect(() => {
    //     async function fetchUserData() {
    //         try {
    //             const { data, error } = await supabase.auth.getUser();
    //             if (error) {
    //                 throw error;
    //             }
    //             setUserData(data);
    //             console.log(data);
    //         } catch (error) {
    //             console.error('Error fetching user data:', error);
    //         }
    //     }

    //     fetchUserData();
    // }, []);

    return (
        // <DropdownMenu>
        //     <DropdownMenuTrigger asChild>
        //         <Avatar>
        //             {userData && userData.user && userData.user.user_metadata && userData.user.user_metadata.picture ?
        //                 <AvatarImage src={userData.user.user_metadata.picture} /> :
        //                 <AvatarImage src='' />
        //             }
        //             <AvatarFallback>{userData ? <CircleUser /> : null}</AvatarFallback>
        //         </Avatar>
        //     </DropdownMenuTrigger>
        //     <DropdownMenuContent align="end">
        //         <DropdownMenuLabel>
        //             Hi {userData.user?.email ? userData.user.email : 'guest'}
        //         </DropdownMenuLabel>
        //         <DropdownMenuSeparator />
        //         <DropdownMenuItem>
        //             {userData.user ? <SignOutButton /> : <Link href='/signin'>SignIn</Link>}
        //         </DropdownMenuItem>
        //     </DropdownMenuContent>
        // </DropdownMenu>

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                        <AvatarImage src='' />
            
                    <AvatarFallback><CircleUser /> </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    SignIn
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
