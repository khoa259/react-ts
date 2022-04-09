import { CategoryType } from "../pages/types/category"
import { isAuthenticate } from "../utils/localstorage"
import instance from "./instance"

export const listCate = () => {
    const url = `/category`
    return instance.get(url)
}

export const onRemoveCate = (id:any) => {
    const url = `/category/${id}`
    return instance.delete(url)
}

export const addCate = (categories:CategoryType) => {
    const{token,user} = isAuthenticate()
    const url = `/category/${user._id}`
    return instance.post(url,categories,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    })
}