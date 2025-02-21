import { Button } from "@/components/ui/button"
import Navbar from "./shared/Navbar"
import Herosection from "./Herosection"
import CategoryCarousel from "./CategoryCarousel"
import LatestJob from "./LatestJob"
import Footer from "./Footer"

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Herosection/>
    <CategoryCarousel/>
    <LatestJob/>
    <Footer/>
    </div>
  )
}
