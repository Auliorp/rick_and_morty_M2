import { ADD_FAV, REMOVE_FAV } from "./types";

export let addFav = (character) => {
   return {
      type: ADD_FAV,
      payload: character,
   };
};

export let removeFav = (id) => {
   return {
      type: REMOVE_FAV,
      payload: id,
   };
};
