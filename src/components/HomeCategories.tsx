import { useQuery } from "@tanstack/react-query"
import { Axios } from "../hook/useAxios"
import React, {  SetStateAction, useEffect, useState } from "react"


export interface CategoriesType {
  id:number
  name:string
  isActived:boolean
}

interface SetCategoriesIdType {
  setCategoriesId:React.Dispatch<SetStateAction<string | number>>
}
const HomeCategories = ({setCategoriesId}:SetCategoriesIdType) => {
  
  const {data = []} = useQuery({
    queryKey:["categories"],
    queryFn: () => Axios().get("/categories").then(res => res.data)
  })
  const [categories, setCategories] = useState<Array<CategoriesType>>(data)

  useEffect(() => {
    setCategories(data)
  }, [data]);

  function handleCategoryBtnClick(item:CategoriesType):void{
    const data = {...item, isActived: !item.isActived};
    setCategoriesId(item.id)
    setCategories(categories.map((obj:CategoriesType) => {
      obj.isActived = false
      return obj.id == item.id ? data : obj
    }))  
    
    
  };
  
  return (
    <div className="flex items-center gap-[9px] w-[750px] mt-[53px]">
      {categories.map((item:CategoriesType) => (
        <button onClick={() => handleCategoryBtnClick(item)} className={` ${item.isActived ? "bg-[#282828] text-white" : "bg-[#F9F9F9]"} text-[16px] leading-[20px] font-bold  pt-[14px] pb-[16px] px-[20px] rounded-[30px]`} key={item.id}>{item.name}</button>
      ))}
    </div>
  )
}

export default HomeCategories
