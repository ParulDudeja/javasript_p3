// fetch API Practice
// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("success");
//     res.json().then((data) => {
//       console.log("data" + data.name);
//     });
//   })
//   .catch((e) => {
//     console.log("error" + e);
//   });

//Axios practice

// axios.get("https://swapi.dev/api/people/1/").then((res) => {
//   console.log("resonpese", res);
// });

const btn = document.getElementById("btn");
const pJoke = document.getElementById("joke");
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get(`https://icanhazdadjoke.com`, config);
    //   console.log(res); // to get object
    //   console.log(res.data); // to get data out of object
    //   console.log(res.data.joke); // will fetch joke content by key value pair, where key is joke, and reult is value
    return res.data.joke;
  } catch (e) {
    return "No Joke available";
  }
};

const addNewJoke = async () => {
  const newJoke = await getDadJoke();
  const newLi = document.createElement("Li");
  newLi.append(newJoke);
  pJoke.append(newLi);
};
btn.addEventListener("click", addNewJoke);

// TV show search result through API

const formSearch = document.getElementById("tv-show-form");
const inputForm = document.getElementById("tv-show-query");
const btnSearch = document.getElementById("btn-search");

formSearch.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchText = formSearch.elements.query.value;
  const para = { params: { q: searchText } };
  const response = await axios.get(`http://api.tvmaze.com/search/shows`, para);
  showImages(response.data);
  formSearch.elements.query.value = "";
});

const showImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const newImg = document.createElement("img");
      newImg.src = result.show.image.medium;
      document.body.append(newImg);
    }
  }
};
