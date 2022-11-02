import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "27d41a1b5fmshe246e4b1227ef9bp17265ejsnf301f89b15e1",
    },
  });
  return data;
};
