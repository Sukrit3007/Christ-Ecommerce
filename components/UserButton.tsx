'use client'

import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"
import { useToast } from "./ui/use-toast"
import { signIn, signOut, useSession } from 'next-auth/react'
import { CircleUser } from 'lucide-react'


export default function UserButton() {
    const { data: session } = useSession();
    const { toast } = useToast()
    const [userData, setUserData] = useState<any>(null);


    const image_url = session?.user?.image ?? '';
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src={image_url} />
                    <AvatarFallback><CircleUser /></AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            {session ? (
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Hi {session?.user?.name} </DropdownMenuLabel>
                    <DropdownMenuItem>
                        <Link href='/user-settings' >Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={()=>signOut()}>
                        SignOut
                    </DropdownMenuItem>
                </DropdownMenuContent>
            ) : (
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={()=>signIn()}>
                        Login
                    </DropdownMenuItem>
                </DropdownMenuContent>
            )}
        </DropdownMenu >
    )
}
