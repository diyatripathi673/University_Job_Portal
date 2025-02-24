import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const filterData=[
  {
    filterType: "Location",
    array :["Delhi", "Banglore", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array :["Frontend Devloper", "Backend Devloper", "Fullstack Devloper"],
  },
  {
    filterType: "Salary",
    array :["8-40k", "42-11 lakh", "11 lakh to 15 lakh", ],
  },
]

const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter jobs</h1>
      <hr  className='mt-3'/>
      <RadioGroup defaultValue="option-one">
  {
    filterData.map((data,index)=>{
      return(
        <div>
          <h1 className='font-bold text-lg'>{data.filterType}</h1>
          {
            data.array.map((item, index)=>{
              return(
                <div className='flex items-center space-x-2 my-2'>
                  <RadioGroupItem value={item}/>
                  <Label >
                    {item}
                  </Label>
                </div>
              )
            })
          }
          
        </div>
      )
    })
  }
</RadioGroup>

      
    </div>
  )
}

export default FilterCard
