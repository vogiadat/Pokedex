import { PayloadAction } from "@reduxjs/toolkit";

type ActionType = "SAVE_LIST" | "SAVE_DETAIL" | "FETCH_LIST";

export enum Action {
  FETCH_LIST = "FETCH_LIST",
  SAVE_LIST = "SAVE_LIST",
  SAVE_DETAIL = "SAVE_DETAIL",
}

interface InitialState {
  pokemonItem: IPokemonItem | null;
  pokemonList: IPokemonList | null;
  loading: boolean;
}

const initialState: InitialState = {
  pokemonItem: null,
  pokemonList: null,
  loading: false,
};

type PayloadType = IPokemonList;

export const rootReducer = (
  state = initialState,
  action: PayloadAction<PayloadType, ActionType>
): InitialState => {
  switch (action.type) {
    case Action.FETCH_LIST:
      return {
        ...state,
        pokemonList: action.payload,
        loading: true,
      };
    case Action.SAVE_LIST:
      return {
        ...state,
        pokemonList: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
