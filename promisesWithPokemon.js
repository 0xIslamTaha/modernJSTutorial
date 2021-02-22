const axios = require("axios").default;

let url = "https://pokeapi.co/api/v2/pokemon/?limit=150";

axios
  .get(url)
  .then((response) =>
    response.data.results.forEach((pokemon) => {
      console.log(pokemon.name);
    })
  )
  .catch((err) => console.log(err));

  