'use client'

import Link from 'next/link'

import { CircleUser } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { supabase } from "@/supabase/client"
import { useEffect, useState } from "react"
import { useToast } from "./ui/use-toast"
import { Button } from './ui/button'


export default function UserButton() {
    const { toast } = useToast()
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const { data: { user } } = await supabase.auth.getUser()
                if (user) {
                    setUserData(user);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }
        fetchUserData();
    }, [])

    async function Logout() {
        let { error } = await supabase.auth.signOut()
        if (!error) {
            toast({
                title: "Logged Out",
            })
            window.location.reload();
        }
        if (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            })
            console.log(error)
        }
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {userData ? (
                    <Avatar>
                        <AvatarImage src={userData.user_metadata?.avatar_url || ''} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                ) : (
                    <CircleUser className='h-6 w-6' />
                )}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
            {userData ?(
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
            ):(
                <DropdownMenuLabel>Welcome!</DropdownMenuLabel>
            )} 
                <DropdownMenuItem><Link href='/user-settings' >Settings</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                {userData ? (
                    <DropdownMenuItem onClick={Logout}>
                        Logout
                    </DropdownMenuItem>
                ) : (
                    <DropdownMenuItem>
                        <Link href='/sign-up' >SignIn</Link>
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu >
    )
}
