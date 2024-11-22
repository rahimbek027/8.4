import { useQuery } from "@tanstack/react-query";
import { Axios } from "../hook/useAxios";
import { useEffect, useState } from "react";
import HomeItem from "./HomeItem";

interface CategoriesIdType {
    categoriesId: string | number;
}

export interface ProductsType {
    id: number;
    img: string;
    title: string;
    typeId: number;
    sizeId: number;
    price: string;
    saveCount: number;
}

const HomeProducts = ({ categoriesId }: CategoriesIdType) => {
    const { data = [], isLoading } = useQuery({
        queryKey: ["products", categoriesId],
        queryFn: () =>
            Axios().get(
                categoriesId == 1 ? "/products" : `/products?categoriesId=${categoriesId}`
            ).then((res) => res.data),
        staleTime: 1000 * 60, // 1 daqiqa
        enabled: !!categoriesId, // categoriesId mavjud bo'lganda so'rov yuboradi
    });

    const [products, setProducts] = useState<Array<ProductsType>>([]);

    useEffect(() => {
        setProducts(data);
    }, [data]);

    if (isLoading) {
        return <div>Yuklanmoqda...</div>;
    }

    return (
        <div className="flex flex-wrap gap-y-5 justify-between">
            {products.map((item: ProductsType) => (
                <HomeItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default HomeProducts;
