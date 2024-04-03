"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { supabase } from "@/supabase/client";
import Image from "next/image";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <Image src={row.getValue("image")} alt="Product" width={200} height={200}  className="aspect-square object-cover w-10 h-10" />
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: () => <div className="text-left">Price</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(price)

      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("category")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {

      async function handleDeleteButton (){
        // ADD DELETE FUNCTION LOGIC
      }
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="bg-red-500" onClick={handleDeleteButton}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]



