import { Button } from "@/components/ui/button"
import Navbar from "./shared/Navbar"
import Herosection from "./Herosection"
import CategoryCarousel from "./CategoryCarousel"

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Herosection/>
    <CategoryCarousel/>
    </div>
  )
}
