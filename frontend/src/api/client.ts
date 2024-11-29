import axios from "axios";

export const client = axios.create({
    baseURL : 'https://github.com/Awa91/ads281124/blob/main/en-ns1.json',
    headers : {
        'Content-Type' : 'application/json'
    }
})