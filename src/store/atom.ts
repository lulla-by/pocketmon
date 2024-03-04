import { atom, selector } from 'recoil';
import { getPocketmontInfo } from '../api';

let localStorageId = localStorage.getItem("id") as string
export const pokemonId = atom({ key: 'pokemonId', default: localStorageId  ,});

export const poketmonDataSelector = selector({
  key: 'poketmonDataSelector',
  get: async ({ get }) => {
    const id = get(pokemonId);
    const result = await getPocketmontInfo(id);
    return result;
  },
});
