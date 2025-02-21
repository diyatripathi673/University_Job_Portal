import React from "react";
import LatestJobCards from "./LatestJobCards"; // Make sure to import the LatestJobCards component

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJob = () => {
  return (
    <div className="max-w-7xl mx-20 my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#8B4513]">Latest & Top </span>
        Job Openings
      </h1>

      {/* Display job cards */}
      <div className="grid grid-cols-3  my-5 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {randomJobs.slice(0,6).map((item, index) => {
          return <LatestJobCards key={index} />;
        })}
      </div>
    </div>
  );
};

export default LatestJob;
