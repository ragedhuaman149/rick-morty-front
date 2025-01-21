import { headers } from "next/headers";
import axiosInstance from "../lib/axiosConfig";
import { Character } from "../types/character";

export const getCharactersService = async ()=>{
    const { data }= await axiosInstance.get('/characters');
    const { results } = data;
    return results;    
}

export const getFavoritesService = async ()=>{
  const { data }= await axiosInstance.get('/favorite');
  return data;
}

export const postFavoriteService = async (character: Character) =>{
    const response = await axiosInstance.post('/favorite',{
        body: JSON.stringify(character)
      }
    );
    return response.data;
}