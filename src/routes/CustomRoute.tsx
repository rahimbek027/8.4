import { Route, Routes } from "react-router-dom"
import { Home, Saved } from "../pages"

const CustomRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/saved" element={<Saved/>} />
      </Routes>
    </div>
  )
}

export default CustomRoute
