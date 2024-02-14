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



export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };