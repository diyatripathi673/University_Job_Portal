import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {  Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar"; // Assuming the Avatar components are from ShadCN UI

const Job = () => {
  return (
    <div className="p-5 rounded-medium shadow-xl bg-white border border-gray-300">
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
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-bold text-lg my-2">Title</h1>
          <p className="text-sm text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            mollitia voluptatum similique, at laboriosam temporibus placeat
            voluptas deserunt! Exercitationem, explicabo.
          </p>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
    <Badge className='text-blue-700 font bold' variant="ghost"> 12 position </Badge>
    <Badge className='text-[#F83002] font bold' variant="ghost"> Part Time </Badge>
    <Badge className='text-[#7209b7] font bold' variant="ghost"> 24LPA </Badge>
    </div>
    <div className="flex items-center gap-4 mt-4">
        <Button variant={'outline'}>Details</Button>
        <Button className="bg-[#7209b7]">Save for later</Button>
    </div>
    </div>
  );
};

export default Job;
