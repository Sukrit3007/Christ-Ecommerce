
import { SignOut } from "@/actions/SignOut";
import { Button } from "../ui/button";


export default function SignOutButton() {

    return(
        <form action={SignOut} >
            <button className="w-full">SignOut</button>
        </form>
    )
}