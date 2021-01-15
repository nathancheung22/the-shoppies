import { apiParameters, url } from "../config/config";

const searchMovie = async (searchPhrase, page) => {
  // create final url to send get request
  const newUrl = new URL(url);

  Object.entries({ ...apiParameters, page, s: searchPhrase }).forEach(([key, value]) =>
    newUrl.searchParams.append(key, value)
  );

  const res = await fetch(newUrl, { method: "GET" });
  const data = await res.json();

  return data;
};

export default searchMovie;
