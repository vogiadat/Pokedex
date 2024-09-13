import { AxiosResponse } from "axios";
import AxiosApi from "@/configs/axios";
import { put, takeEvery, all, call } from "redux-saga/effects";
import { Action } from "./reducer";

async function getAllPokemon() {
  const res = await AxiosApi.get<AxiosResponse<IPokemonList>>("/pokemon");
  return res.data;
}

export function* fetchPokemonList() {
  try {
    const pokemonList: IPokemonList = yield call(getAllPokemon);
    yield put({ type: Action.SAVE_LIST, payload: pokemonList });
    console.log("SUCCESS ::: FETCH LIST POKEMON");
  } catch (error) {
    console.log("ERROR ::: ", error);
  }
}

function* watchEndpoint() {
  yield takeEvery(Action.FETCH_LIST, fetchPokemonList);
}

export default function* rootSage() {
  yield all([watchEndpoint()]);
}
