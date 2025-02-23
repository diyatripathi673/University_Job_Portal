import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";

const jobsarray = [1, 2, 3, 4, 5, 6, 7, 8];
const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-1/5">
            <FilterCard />
          </div>

          {jobsarray.length <= 0 ? 
            <span>Job not found</span>: (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
 <div className="grid grid-cols-3 gap-4">
    {
        jobsarray.map((item, index) => (
             <div>
             <Job key={index} />
             </div>
            ))
    }
 </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
