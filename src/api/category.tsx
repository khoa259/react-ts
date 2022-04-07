import instance from "./instance"

export const listCate = () => {
    const url = `/category`
    return instance.get(url)
}

export const onRemoveCate = (id:any) => {
    const url = `/category/${id}`
    return instance.delete(url)
}