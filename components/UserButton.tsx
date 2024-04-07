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
import { CircleUser, LogIn } from 'lucide-react';
import { useEffect, useState } from "react";
import { supabase } from "@/supabase/client";
import Link from "next/link";
import SignOutButton from "./auth/SignOutButton";
import { Button } from "./ui/button";

export default function UserButton() {
    const [userData, setUserData] = useState<any>({});

    async function userInfo () {
        const { data: { user } ,error } = await supabase.auth.getUser()  
        if (error){
            console.log(error)
        }  
        setUserData({user})
        return user
    }

    useEffect(() => {
      userInfo();
      console.log(userData)
    }, [])
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    {userData && userData.user && userData.user.user_metadata && userData.user.user_metadata.picture ?
                        <AvatarImage src={userData.user.user_metadata.picture} /> :
                        <AvatarImage src='' />
                    }
                    <AvatarFallback>{userData ? <CircleUser /> : null}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    Hi {userData.user?.email ? userData.user.email : 'guest'}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    {userData.user ? <SignOutButton /> :(

                        <Button variant="expandIcon" Icon={LogIn} iconPlacement="right" size='sm' className='w-full' asChild>
                        <Link href='/signin' >Signin</Link>
                        </Button>
                    )}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
