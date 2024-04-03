"use client"

import * as Craft from "@/components/craft";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { supabase } from "@/supabase/client"
import { useToast } from "../ui/use-toast"


const formSchema = z.object({
    title: z.string().min(2).max(50),
    description: z.string().min(2),
    price: z.string().min(0),
    category: z.string(),
    image: z.instanceof(File),

})


export default function AddProductForm() {
    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            price: "",
            category: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const imageName = (values.title || 'default').trim().replace(/\s+/g, '_');
        const timestamp = Date.now();
        const imagePath = `product-images/${imageName}_${timestamp}`;

        try {
            const { data, error } = await supabase.storage
                .from('images')
                .upload(imagePath, values.image);

            if (error) {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with uploading image.",
                })
                throw error;
            }
            const imageUrl = "https://iedtizzvduepzpyokgob.supabase.co/storage/v1/object/public/images/" + `${data.path}`;

            const { data: productData, error: productError } = await supabase
                .from('product')
                .insert([
                    { title: values.title, description: values.description, price: values.price, category: values.category, image: imageUrl },
                ])

            if (productError) {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with adding product.",
                })
                throw productError;
            }
            if (!productError) {
                toast({
                    variant: "success",
                    title: "Product added",
                })
                console.log('Product inserted successfully:');
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error adding product',
                description: "message",
            });
            console.error('Error adding product:', error);
        }
    }

    return (
        <Craft.Section>
            <Craft.Container>
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 m-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="flex flex-col gap-6">

                                <div className="flex flex-row items-start justify-center gap-4 pt-4 sm:flex-row">
                                    <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                                        Add Products
                                    </h1>
                                    <div className="items-center gap-2 md:ml-auto md:flex">
                                        <Button type="submit" size="sm">Save Product</Button>
                                    </div>
                                </div>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Product Details</CardTitle>
                                        <CardDescription>
                                            Give the product details
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                                            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                                                <FormField
                                                    control={form.control}
                                                    name="title"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Title</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Enter the product title" {...field} className="h-12" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="description"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Description</FormLabel>
                                                            <FormControl>
                                                                <Textarea placeholder="Enter description" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                            <div className="grid auto-rows-max items-start gap-4 lg:col-span-1 lg:gap-8">
                                                <FormField
                                                    control={form.control}
                                                    name="price"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Price</FormLabel>
                                                            <FormControl>
                                                                <Input type="number" step="1" placeholder="Enter price" {...field} className="h-12" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="category"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Category</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Enter category" {...field} className="h-12" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                            <div className="grid auto-rows-max items-start gap-4 lg:col-span-3 lg:gap-8">
                                                <FormField
                                                    control={form.control}
                                                    name="image"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Image</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    type="file"
                                                                    placeholder="Upload the Image"
                                                                    onChange={(e) => {
                                                                        const file = e.target.files?.[0];
                                                                        if (file) {
                                                                            form.setValue("image", file);
                                                                        }
                                                                    }}
                                                                    className=" cursor-pointer "
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                        </div>
                                    </CardContent>
                                </Card>


                            </div>
                        </form>
                    </Form>

                </main >
            </Craft.Container>
        </Craft.Section>
    )
}