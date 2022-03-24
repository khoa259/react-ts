import instance from "./intance";

export const list = () => {
    const url = `/products`;
    return instance.get(url);
}

export const onRemove = (id:string) =>{
    const url = `/product/${id}`
    return instance.delete(url)
}