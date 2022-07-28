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
    const res = await axios.get("https://icanhazdadjoke.com", config);
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
