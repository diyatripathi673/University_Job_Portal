import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Devloper",
  "Data Scince",
  "Graphic Designer",
  "FullStack Devloper",
];
const CategoryCarousel = () => {
  return (
    <div>

      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, index) => {
            return(
                <CarouselItem className="md: basis-1/2s lgbasis-1/3">
                <Button  variant="outline" className="rounded-full bg-slate-200">{cat}</Button>
            </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
       
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
