import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com/"
});

export const get = async function (url){
    let response = await axiosInstance.get(url);
    return response.data
}