import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApply=true;
  
  return (
    <div className="mx-w-7xl mx-auto my-10 ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Frontend Devloper</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-blue-700 font bold" variant="ghost">
              {" "}
              12 position{" "}
            </Badge>
            <Badge className="text-[#F83002] font bold" variant="ghost">
              {" "}
              Part Time{" "}
            </Badge>
            <Badge className="text-[#7209b7] font bold" variant="ghost">
              {" "}
              24LPA{" "}
            </Badge>
          </div>
        </div>
        <Button disabled={ isApply} 
        className={`rounded-lg ${isApply ? "bg-gray-600 cursor-not-allowed" :'bg-[#7209b7] hover:bg-[#5f32ad]  '}`}>{ isApply ? 'Already Applied' :"Apply Now"}</Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">Job Discription</h1>
      <div className="">
<h1 className="font-bold my-1">Role : <span className="pl-4 font-normal text-gray-800">Frontend Devloper</span></h1> 
<h1 className="font-bold my-1">Location: <span className="pl-4 font-normal text-gray-800">Hybrid</span></h1> 
<h1 className="font-bold my-1">Description : <span className="pl-4 font-normal text-gray-800">Lorem ipsum dolor sit amet Lorem ipsum dolor sit..</span></h1> 
<h1 className="font-bold my-1"> Experience : <span className="pl-4 font-normal text-gray-800">2 year</span></h1> 
<h1 className="font-bold my-1">Salary : <span className="pl-4 font-normal text-gray-800">12 LPA</span></h1> 
<h1 className="font-bold my-1">Posted Date : <span className="pl-4 font-normal text-gray-800">15-08-2025</span></h1> 
      </div>
    </div>
  );
};

export default JobDescription;
