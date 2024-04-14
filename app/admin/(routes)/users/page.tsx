'use client'


import { useEffect, useState } from "react";
import { supabase } from "@/supabase/client";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Users() {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data, error } = await supabase.from("users").select("*");

        if (error) {
          throw error;
        }
        console.log(data)
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="p-4 sm:px-6 sm:py-0 md:gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>
            Manage your users and view their info.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <DataTable columns={columns} data={users} /> */}
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>{users.length}</strong>{" "}
            users
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
