import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";




const Navbar = () => {
  //USER

  const {user}=useSelector(store=>store.auth)
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between  max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
          Amrapali
            <span className="text-[#8B4513]">JobConnect</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/jobs">Jobs </Link></li>
            <li><Link to="/browse">Browser </Link> </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-3">
              <Link to='/login'>

                <Button variant="outline">Login</Button>
              </Link>
              <Link to='/signup'>

                <Button className="bg-[#8B4513]  hover:bg-[#4f280d]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-80">
                <div>
                  <div className="flex gap-2 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium"> Diya MERN STACK</h4>

                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  text-gray-600 ">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link"> 
                    <Link to="/profile">View Profile</Link>
                    </Button>
                  </div>

                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link">Log Out</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;



