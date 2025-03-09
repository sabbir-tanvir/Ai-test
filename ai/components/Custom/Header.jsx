import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import Colors from "@/data/Colors";
import { UserDetailsContext } from "@/context/UserDetailsContext";
import { useSidebar } from "../ui/sidebar";

function Header() {
    const {userDetails, setUserDetails} = useContext(UserDetailsContext);
    const { toggleSidebar } = useSidebar();

    return (
        <div onClick={toggleSidebar} className="p-6 flex top-0 fixed justify-between items-center cursor-pointer">
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