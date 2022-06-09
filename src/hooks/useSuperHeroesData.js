import { useQuery, useMutation } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero);
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // onSuccess: onSuccess,
    // onError: onError,
    onSuccess,
    onError,
    // 줄이기 가능
    //
    // data transformation
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
    refetchOnWindowFocus: false,
  });
};

export const useAddSuperHeroData = () => {
  return useMutation(addSuperHero);
};
