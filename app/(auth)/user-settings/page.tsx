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


export default function UserSetting() {
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
                        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                            <div className="mx-auto grid w-full max-w-6xl gap-2">
                                <h1 className="text-3xl font-semibold">Settings</h1>
                            </div>
                            <div className="mx-auto grid w-full max-w-6xl items-start gap-4 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                                <nav className="grid gap-4 text-sm text-muted-foreground">
                                    <Link href="#" className="font-semibold text-primary">
                                        General
                                    </Link>
                                    <Link href="#">Security</Link>
                                    <Link href="#">Advanced</Link>
                                </nav>
                                <div className="grid gap-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Profile</CardTitle>
                                            <CardDescription>
                                                The directory within your project, in which your plugins are
                                                located.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <form className="flex flex-col gap-4">
                                                <Input
                                                    placeholder="Project Name"
                                                    defaultValue="/content/plugins"
                                                />
                                                <div className="flex items-center space-x-2">
                                                    {/* <Checkbox id="include" defaultChecked /> */}
                                                    <label
                                                        htmlFor="include"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Allow administrators to change the directory.
                                                    </label>
                                                </div>
                                            </form>
                                        </CardContent>
                                        <CardFooter className="border-t px-6 py-4">
                                            <Button>Save</Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </div>
                        </main>

                    </CardContent>
                </Card>
                </div>
            </Craft.Container>
        </Craft.Section>
    )
}