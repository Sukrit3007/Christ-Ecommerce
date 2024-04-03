'use client'


import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackButton() {
    return (
        <div className="mb-8 flex justify-start">
            <Button asChild className="w-fit" size={"sm"} variant={"outline"}>
                <Link href='/' >
                    <ArrowLeft className="w-4" /> Back
                </Link>
            </Button>
        </div>
    )
}