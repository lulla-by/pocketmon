export const getPocketmontData = async (start = 1, end = 50) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${start - 1}&limit=${end - start + 1}`;
  const result = await fetch(url);
  const res = await result.json();
  return res.results;
};
export const getPocketmontInfo = async (id="1") => {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
  const result = await fetch(url);
  const res = await result.json();
  return res;
};
