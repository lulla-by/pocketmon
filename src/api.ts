export const getPocketmontData = async (count=50) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${count}`;
  const result = await fetch(url);
  const res = await result.json();
  return res.results;
};
export const getPocketmontInfo = async (id: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
  const result = await fetch(url);
  const res = await result.json();
  return res;
};
