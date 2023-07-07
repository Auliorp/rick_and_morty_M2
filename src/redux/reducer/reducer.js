import { ADD_FAV, REMOVE_FAV } from "../actions/types";

const inicialState = {
   myFavorites: [],
};

let reducer = (state = inicialState, action) => {
   switch (action.type) {
      case ADD_FAV:
         return {
            ...state,
            myFavorites: [...state.myFavorites, action.payload],
         };
      case REMOVE_FAV:
         return {
            ...state,
            myFavorites: state.myFavorites.filter(
               (persona) => persona.id !== payload
            ),
         };
      default:
         return { ...state };
   }
};

export default reducer;
