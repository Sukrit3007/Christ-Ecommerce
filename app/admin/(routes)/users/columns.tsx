"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Product = {
  id: any;
  email: string;
  full_name: string;
  avatar_url: string;
  role: string;
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
import Image from "next/image";
import { supabase } from "@/supabase/client";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "image", 
    header: "Image",
    cell: ({ row }) => (
      <Image
        src={row.getValue("image")}
        alt="Product"
        width={200}
        height={200}
        className="aspect-square object-cover w-10 h-10"
      />
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="capitalize">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div className="capitalize">{row.getValue("role")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      async function handleDeleteButton() {
        try {
          // Delete user logic
          const { error } = await supabase.from("users").delete().eq("id", row.original.id);
          if (error) {
            throw error;
          }
          // Handle successful deletion, e.g., show a notification
          console.log("User deleted successfully");
        } catch (error) {
          console.error("Error deleting user:", error);
        }
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
      );
    },
  },
];




