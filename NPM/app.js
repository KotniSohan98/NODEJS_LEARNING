const express = require("express");
const app = express();

app.use(express.json());

const movies = [
  {
    id: 1,
    title: "Star Wars",
    year: 1977,
    rating: 8.6,
    actors: ["Mark Hamil", "Harrison Ford"],
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    actors: ["Marlon Brando", "Al Pacino"],
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/movies", (req, res) => {
  res.send(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.id === parseInt(id));
  if (!movie) {
    res.status(404).send("The movie with the given ID was not found");
  }
  res.send(movie);
});

app.post("/api/movies", (req, res) => {
  const movie = req.body;
  movie.id = movies.length + 1;
  movies.push(movie);
  res.send(movie);
});

app.put("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.id === parseInt(id));
  movie.title = req.body.title;
  movie.year = req.body.year;
  movie.rating = req.body.rating;
  movie.actors = req.body.actors;
  res.send(movie);
});

app.delete("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.id === parseInt(id));
  const index = movies.indexOf(movie);
  movies.splice(index, 1);
  res.send(movie);
});

app.listen(3000, () => {
  console.log("Server is up and running on port 3000...");
});
