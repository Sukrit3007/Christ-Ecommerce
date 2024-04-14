import React from 'react';
import { useSelector } from 'react-redux';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { IndianRupee } from "lucide-react";
import { getCart } from '@/redux/cartSlice';
import { loadStripe } from '@stripe/stripe-js';
import { supabase } from '@/supabase/client';
import axios from "axios";
import { useToast } from '../ui/use-toast';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!);

export default function CartSummary() {
    const { toast } = useToast()
    const cart = useSelector(getCart);
    const totalPrice = cart.reduce((acc: number, item) => acc + (parseFloat(item.price) * item.quantity), 0);
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);


    // STRIPE LOGIC:

    const handleCheckout = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            toast({
                variant: "destructive",
                title: "The user must be signed in. Please sign in.",
                description: "Uh oh! Something went wrong.",
              })
            return;
        }

        try {
            const stripe = await stripePromise;
            const checkoutSession = await axios.post("/api/checkout-sessions", {
                items: cart,
                email: user.email
            });

           // redirect to checkout session
            const result = await stripe?.redirectToCheckout({
            sessionId:checkoutSession.data.id,
            })

            if(result?.error){
                console.log(result.error.message);
            }
        } catch (error) {
            console.error("Error during checkout:", error);
        }
    }

    const createStripeSession = async () => {
        const { data: { user } } = await supabase.auth.getUser();
            const stripe = await stripePromise;
            
            const checkoutSession = await axios.post("/api/checkout-sessions", {
            items: cart,
            email: user?.email
            });
        
            // redirect to checkout session
            const result = await stripe?.redirectToCheckout({
            sessionId:checkoutSession.data.id,
            })
        
            if(result?.error){
            console.log(result.error.message);
            }
        }

    return (
        <Card className="bg-primary text-primary-foreground">
            <CardHeader>
                <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="w-full flex flex-row justify-between items-center"> 
                    <p>
                        Total Price:
                    </p>
                    <p>
                        Rs. {totalPrice}
                    </p>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                    <p>
                        Total items: 
                    </p>
                    <p>
                        {totalQuantity}
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <Button  variant="expandIcon" Icon={IndianRupee} iconPlacement="right" className="border" onClick={handleCheckout} >
                    Proceed to Checkout
                </Button>
            </CardFooter>
        </Card>
    );
}
