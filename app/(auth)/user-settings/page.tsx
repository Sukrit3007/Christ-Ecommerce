import * as Craft from "@/components/craft";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { createClient } from "@/supabase/server";
import AccountForm from "@/components/auth/account-form";


export default async function UserSetting() {
    const supabase = createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()
    return (
        <Craft.Section>
            <Craft.Container>
                <div className="not-prose flex flex-col gap-6">
                    <Button asChild className="w-fit" size={"sm"} variant={"outline"}>
                        <Link href='/'>
                            Back to store <ArrowRight className="w-4" />
                        </Link>
                    </Button>
                <Card>
                    <CardContent className="mt-6">
                        
                    <AccountForm user={user} />



                    </CardContent>
                </Card>
                </div>
            </Craft.Container>
        </Craft.Section>
    )
}