'use client'

import Image from 'next/image'

import { supabase } from '@/supabase/client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function SignUp() {
    return (
            <div className="w-full lg:grid min-h-screen lg:grid-cols-2 ">
                <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                        <Card className="w-96">
                            <CardHeader>
                                <CardTitle className="text-xl">Account</CardTitle>
                                <CardDescription>
                                    Enter your information to Authenticate
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Auth
                                    supabaseClient={supabase}
                                    appearance={{ 
                                        theme: ThemeSupa,
                                        variables:{
                                            default:{
                                                colors:{
                                                    inputText:'text-primary-foreground'
                                                }
                                            }
                                        }
                                    }}
                                    providers={['google']}
                                    
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="hidden bg-muted lg:block">
                    <Image
                        src=""
                        alt="Image"
                        width="1920"
                        height="1080"
                        className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                </div>
            </div>
    )
}