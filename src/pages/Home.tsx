import { useState } from "react"
import HomeCategories from "../components/HomeCategories"
import HomeProducts from "../components/HomeProducts"

const Home = () => {
  const [categoriesId, setCategoriesId] = useState<number | string>("")

  return (
    <div>
      <HomeCategories setCategoriesId={setCategoriesId}/>
      <h1 className="text-[32px] font-bold leading-[38px] my-[32px]">Все пиццы</h1>
      <HomeProducts categoriesId={categoriesId} />
    </div>
  )
}

export default Home
