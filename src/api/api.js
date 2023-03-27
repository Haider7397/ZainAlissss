import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/"
});

export const get = async function (url){
    let response = await axiosInstance.get(url);
    return response.data
}