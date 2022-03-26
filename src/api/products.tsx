import { ProductType } from "../pages/types/product";
import instance from "./intance";

export const list = () => {
    const url = `/products`;
    return instance.get(url);
}

export const onRemove = (id:string) =>{
    const url = `/products/${id}`
    return instance.delete(url)
}

export const add = (products:ProductType) => {
    const url =`/products`
    return instance.post(url, products)
}

