import { jwtDecode } from "jwt-decode";
export const setLocalStorage = (name,val) =>{
    localStorage.setItem(name,val)
}
export const getLocalStorageItems = (name) =>{
   return localStorage.getItem(name)
}
export const removeLocalStorageItem = (name,val) =>{
    localStorage.removeItem(name)
}

export const getUserInfo = () =>{
    const decoded = jwtDecode(getLocalStorageItems("token"));
    return decoded
}