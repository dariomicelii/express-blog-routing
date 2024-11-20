const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

app.get("/bacheca", (req, res) => {
  let posts = [
    {
      titolo: "Ciambellone",
      contenuto: "Ricetta ciambellone",
      immagine: "./images/ciambellone.jpg",
      tag: ["#ciambellone", "#cucina", "#dolce"],
    },

    {
      titolo: "Cracker alla barbabietola",
      contenuto: "Ricetta cracker alla barbabietola",
      immagine: "./images/cracker_barbabietola.jpg",
      tag: ["#crackerbarbabietola", "#cucina", "#verdure"],
    },

    {
      titolo: "Pane fritto dolce",
      contenuto: "Ricetta Pane fritto dolce",
      immagine: "./images/pane_fritto_dolce.jpg",
      tag: ["#Panefrittodolce", "#cucina", "#dolce"],
    },

    {
      titolo: "Pasta alla barbabietola",
      contenuto: "Ricetta Pasta alla barbabietola",
      immagine: "./images/pasta_barbabietola.jpg",
      tag: ["#Pastaallabarbabietola", "#cucina", "#pasta", "#verdure"],
    },

    {
      titolo: "Torta paesana",
      contenuto: "Ricetta torta paesana",
      immagine: "./images/torta_paesana.jpg",
      tag: ["#Pastaallabarbabietola", "#cucina", "#pasta", "#verdure"],
    },
  ];

  let postNum = posts.length;

  let resoconto = {
    post: posts,
    count: postNum,
  };

  res.json(resoconto);
});
