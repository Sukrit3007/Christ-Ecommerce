'use client'

import Image from "next/image"
import Link from "next/link"
import {
  File,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Drawer,
  DrawerClose,
  DrawerContent,

  DrawerTrigger,
} from "@/components/ui/drawer"
import AddProductForm from "@/components/admin/AddProductForm"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { useEffect, useState } from "react"
import { supabase } from "@/supabase/client"

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export default function Product() {
  const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const { data, error } = await supabase
                .from('product')
                .select('*');

                if (error) {
                    throw error;
                }
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
    }, []);
  return (
      <div className="grid items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 md:mt-4">
        <Drawer>
          <DrawerTrigger>
            <div className="w-full flex justify-start">
              <div className="flex flex-row items-center gap-1 h-10 w-fit rounded-md px-3 text-md bg-primary text-primary-foreground shadow hover:bg-primary/90">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </span>
              </div>
            </div>
          </DrawerTrigger>
          <DrawerContent>
                <AddProductForm/>
          </DrawerContent>
        </Drawer>

        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>
              Manage your products.
            </CardDescription>
          </CardHeader>
          <CardContent >
                <DataTable columns={columns} data={products} />
          </CardContent>
        </Card>
      </div>
  );
}
