export async function getImage(pokemon) {
  try {
    let search = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    let response = await fetch(search, {
      mode: "cors",
    });
    const data = await response.json();
    console.log(data.sprites.back_default);
    return data.sprites.back_default;
  } catch (error) {
    console.log("fetch unsuccessful");
  }
}

const cardsData = [
  {
    name: "ditto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
    id: 0,
  },
  {
    name: "snorlax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/143.png",
    id: 1,
  },
  {
    name: "pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
    id: 2,
  },
  {
    name: "charizard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
    id: 3,
  },
  {
    name: "lucario",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/448.png",
    id: 4,
  },
  {
    name: "mewtwo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png",
    id: 5,
  },
  {
    name: "garchomp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/445.png",
    id: 6,
  },
  {
    name: "blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
    id: 7,
  },
  {
    name: "arcanine",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/59.png",
    id: 8,
  },
  {
    name: "gengar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/94.png",
    id: 9,
  },
  {
    name: "lapras",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/131.png",
    id: 10,
  },
  {
    name: "dragonite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/149.png",
    id: 11,
  },
  {
    name: "entei",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/244.png",
    id: 12,
  },
  {
    name: "Groudon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/383.png",
    id: 13,
  },
  {
    name: "Lugia",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/249.png",
    id: 14,
  },
  {
    name: "Salamence",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/373.png",
    id: 15,
  },
  {
    name: "Darkrai",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/491.png",
    id: 16,
  },
  {
    name: "Arceus",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/493.png",
    id: 17,
  },
  {
    name: "Zoroark",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/571.png",
    id: 18,
  },
];

// export async function populateData() {
//   const promises = [
//     getImage("ditto"),
//     getImage("snorlax"),
//     getImage("pikachu"),
//     getImage("charizard"),
//     getImage("lucario"),
//     getImage("mewtwo"),
//     getImage("garchomp"),
//   ];

//   const imageUrls = await Promise.all(promises);

//   const cardsData = [
//     {
//       name: "img1",
//       image: imageUrls[0],
//       hasClicked: false,
//       isActive: false,
//       id: 0,
//     },
//     {
//       name: "img2",
//       image: imageUrls[1],
//       hasClicked: false,
//       isActive: false,
//       id: 1,
//     },
//     {
//       name: "img3",
//       image: imageUrls[2],
//       hasClicked: false,
//       isActive: false,
//       id: 2,
//     },
//     {
//       name: "img4",
//       image: imageUrls[3],
//       hasClicked: false,
//       isActive: false,
//       id: 3,
//     },
//     {
//       name: "img5",
//       image: imageUrls[4],
//       hasClicked: false,
//       isActive: false,
//       id: 4,
//     },
//     {
//       name: "img6",
//       image: imageUrls[5],
//       hasClicked: false,
//       isActive: false,
//       id: 5,
//     },
//     {
//       name: "img7",
//       image: imageUrls[6],
//       hasClicked: false,
//       isActive: false,
//       id: 6,
//     },
//   ];

//   return cardsData;
// }

export default cardsData;
