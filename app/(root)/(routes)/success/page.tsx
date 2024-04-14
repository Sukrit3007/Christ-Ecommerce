'use client'

import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image'

export default function Success() {
    const [isConfettiActive, setIsConfettiActive] = useState(true);

    useEffect(() => {
        // Disable confetti after 5 seconds
        const timer = setTimeout(() => {
            setIsConfettiActive(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Craft.Section>
            {isConfettiActive && <Confetti />}
            <Craft.Container>
                <Button variant="expandIcon" size='sm' Icon={ArrowRight} iconPlacement="right">
                    <Link href='/'>
                        Continue Shopping
                    </Link>
                </Button>
                <div className="flex flex-col gap-8 mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="grid col-span-1">
                            <p>
                                <span className="text-primary-700 text-2xl">Thank You!</span>
                                <br /><br />
                                We want to extend our heartfelt gratitude for choosing <span className='font-semibold'>Christ University Shop</span>. Your support means the world to us!
                                <br /><br />
                                Your order has been successfully placed and is now on its way to you. We're thrilled to have you as a valued customer and are committed to providing you with top-notch products and service every step of the way.
                                <br /><br />
                                If you have any questions or need assistance with your order, please don't hesitate to reach out to our dedicated customer support team at <span className='font-semibold'>christuniversity.shop.help@gmail.com</span>. We're here to help!
                                <br /><br />
                                Thank you once again for choosing <span className='font-semibold'>Christ University Shop</span>]. We truly appreciate your trust in us and look forward to serving you again soon.
                            </p>
                        </div>
                        <div className="grid col-span-1">
                            <div className="flex items-center justify-center ">
                                <Image
                                    src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e5365e367293a5eb7630824_peep-standing-26.svg"
                                    alt="About Image"
                                    width={400}
                                    height={400}
                                    className="object-contain aspect-square"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Craft.Container>
        </Craft.Section>
    );
}
