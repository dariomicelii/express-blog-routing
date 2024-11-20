const express = require("express");
const router = express.Router();

const posts = require("../app");

/** Index */

router.get("/", (req, res) => {
  res.json("Lista dei post");
});

/** Show */

router.get("/:id", (req, res) => {
  res.json("Dettagli del post con id: " + res.params.id);
});

/** Store */

router.post("/", (req, res) => {
  res.json("Crea un nuovo post");
});

/** Update */

router.put("/:id", (req, res) => {
  res.json("Modifica interamente i dettagli del post con id: " + res.params.id);
});

/** Modify */

router.patch("/:id", (req, res) => {
  res.json(
    "Modifica parzialmente i dettagli del post con id: " + res.params.id
  );
});

/** Destroy */

router.delete("/:id", (req, res) => {
  res.json("Elimina post");
});

module.exports = router;
