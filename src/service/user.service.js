import { api } from "./baseUrl";

export const getUserData = async (arg) =>{
    try{
        const res = await api.get(arg);
        return res.data;

    }catch(e){
        throw new Error(e.message);

    }
}