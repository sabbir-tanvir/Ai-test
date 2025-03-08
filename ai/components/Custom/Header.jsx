import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import Colors from "@/data/Colors";
import { UserDetailsContext } from "@/context/UserDetailsContext";

function Header() {
    const {userDetails, setUserDetails} = useContext(UserDetailsContext);

    return (
        <div className="p-4 flex justify-between items-center">
            <Image src={'/logo.png'} alt="Logo" width={40} height={40} />
          {(!userDetails?.name) &&  <div className="flex gap-5">
                <Button variant="ghost">Sign IN</Button>
                <Button
                className="text-white" style={{
                    backgroundColor:Colors.BLUE
                }}
                >Get Started</Button>
            </div>}
        </div>
    )
}

export default Header;