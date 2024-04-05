'use client'


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { supabase } from "@/supabase/client"


export default function SignUpForm() {

    const loginWithGoogle = () =>{
        supabase.auth.signInWithOAuth({
            provider: 'google',
            options:{
              redirectTo: `${location.origin}/auth/callback`,
            }
          })
    }

    return (
        <>
                <Card className="mx-auto max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-xl">Get an Account</CardTitle>
                        <CardDescription>
                            Enter your information to create an account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button variant="outline" onClick={loginWithGoogle}  className="w-full">
                                Sign up with Google
                        </Button>
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                </Card>

        </>
    )
}


