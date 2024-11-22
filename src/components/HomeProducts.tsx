import { useQuery } from "@tanstack/react-query"
import { Axios } from "../hook/useAxios"
import { useEffect, useState } from "react"
import HomeItem from "./HomeItem";


interface CategoriesIdType {
    categoriesId:string | number
}

export interface ProductsType {
    id:number;
    img:string;
    title:string;
    typeId:number;
    sizeId:number;
    price:string;
    saveCount:number
}

const HomeProducts = ({categoriesId}:CategoriesIdType) => {


    const {data = []} = useQuery({
        queryKey:["producrts", categoriesId],
        queryFn:() => Axios().get(`/products?categoriesId=${categoriesId == 1 ? "" : categoriesId}`).then(res => res.data)
    })

    const [products, setProducts] = useState<Array<ProductsType>>(data)

    useEffect(() => {
        setProducts(data)
    },[data])
    

    return (
        <div className="flex flex-wrap  gap-[25px]">

            {products.map((item:ProductsType) => <HomeItem key={item.id} item={item} />)}
        </div>
    )
}

export default HomeProducts
