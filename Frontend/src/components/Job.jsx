import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar"; // Assuming the Avatar components are from ShadCN UI

const Job = () => {
  return (
    <div className="p-5 rounded-medium shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
     
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant={"outline"} className="rounded-full" size="icon">
          <Bookmark />
        </Button>
       
      </div>

      <div className="flex items-center gap-2 my-2">
        {/* Avatar Button */}
        <Button className="p-6" variant={"outline"} size="icon">
          <Avatar className="cursor-pointer">
            <AvatarImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6DqxRZOLkSeMjZ3whrde2iB8uhwkD989zg&s" // Add the image URL of the avatar
              alt="@shadcn"
            />
          </Avatar>
        </Button>
        <div>
          <h1>Company Name</h1>
          <p>India</p>
        </div>
      </div>
      <div>
        <div> 
    <h1 className="font-bold text-lg my-2">Title</h1>
    <p className="text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet mollitia voluptatum similique, at laboriosam temporibus placeat voluptas deserunt! Exercitationem, explicabo.</p>
        </div>
      </div>
    </div>
  );
};

export default Job;
