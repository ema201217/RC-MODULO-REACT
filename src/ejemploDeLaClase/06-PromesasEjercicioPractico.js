import axios from "axios";
const getPokemon = (id = null, limit = 10, offset = 0) => {
  return new Promise((resolve, reject) => {
    let urlBase = "https://pokeapi.co/api/v2/pokemon";

    if (id) {
      urlBase += `/${id}`;
    } else {
      urlBase += `?limit=${limit}&offset=${offset}`;
    }

    fetch(urlBase, { method: "GET" })
      .then((response) => resolve(response.json()))
      .catch((err) => reject(err));

    // axios
    //   .get(url)
    //   .then((response) => resolve({ ...response, msg: "CON AXIOS" }))
    //   .catch((err) => reject(err));
  });
};

  console.time('FETCH')
  console.log('Loading');
  getPokemon(5)
  .then((result) => {
    console.log(result.name);
    console.timeEnd('FETCH')
  })
  .catch((err) => console.log(err));

