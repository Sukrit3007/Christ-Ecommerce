'use client'


import React, { useState } from 'react'
import Link from 'next/link'

import { Input } from "@/components/ui/input"
import { Menu, Package2, Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import UserButton from '../UserButton'
import { useRouter } from 'next/navigation'
import CartButton from '@/components/main/CartButton'



const Navbar = () => {
    const [query, setQuery] = useState<string>("");
    const router = useRouter();

    const searchHandler = (e: any) => {
        e.preventDefault();
        router.push(`/products/search/${query}`);
    }

    return (
        <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background/30 px-4 md:px-6 backdrop-blur-md">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Christ Store</span>
                </Link>
                <Link
                    href="/products"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Shop
                </Link>
                <Link
                    href="/about"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    About
                </Link>
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">Christ Store</span>
                        </Link>
                        <Link
                            href="/products"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Shop
                        </Link>
                        <Link
                            href="/about"
                            className="text-muted-foreground hover:text-foreground"
                        >
                           About
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form onSubmit={searchHandler} className="ml-auto flex-1 sm:flex-initial">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            type="search"
                            placeholder="Search products..."
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                        />
                    </div>
                </form>
                <CartButton/>
                <UserButton />
            </div>
        </header>
    )
}

export default Navbar
