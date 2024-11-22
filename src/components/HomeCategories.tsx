import { useQuery } from "@tanstack/react-query";
import { Axios } from "../hook/useAxios";
import React, { useState } from "react";

export interface CategoriesType {
  id: number;
  name: string;
  isActived?: boolean; // Optional bo'ldi
}

interface SetCategoriesIdType {
  setCategoriesId: React.Dispatch<React.SetStateAction<string | number>>;
}

const HomeCategories = ({ setCategoriesId }: SetCategoriesIdType) => {
  const { data: fetchedCategories = [] } = useQuery<CategoriesType[]>({
    queryKey: ["categories"],
    queryFn: () => Axios().get("/categories").then((res) => res.data),
  });

  const [categories, setCategories] = useState<CategoriesType[]>(
    fetchedCategories.map((category) => ({ ...category, isActived: false }))
  );

  function handleCategoryBtnClick(item: CategoriesType): void {
    setCategoriesId(item.id); // IDni set qilish
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === item.id
          ? { ...cat, isActived: !cat.isActived }
          : { ...cat, isActived: false }
      )
    );
  }

  return (
    <div className="flex items-center gap-[9px] w-[750px] mt-[53px]">
      {categories.map((item) => (
        <button
          onClick={() => handleCategoryBtnClick(item)}
          className={`${
            item.isActived ? "bg-[#282828] text-white" : "bg-[#F9F9F9]"
          } text-[16px] leading-[20px] font-bold pt-[14px] pb-[16px] px-[20px] rounded-[30px]`}
          key={item.id}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default HomeCategories;
