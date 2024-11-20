const express = require("express");
const router = express.Router();

const posts = require("../db/posts.js");

/** Index */

router.get("/", (req, res) => {
  res.json("Lista dei post");
});

/** Show */

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json(`Dettagli del post con id: ${id}`);
});

/** Store */

router.post("/", (req, res) => {
  res.json("Crea un nuovo post");
});

/** Update */

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json(`Modifica interamente i dettagli del post con id: ${id}`);
});

/** Modify */

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.json(`Modifica parzialmente i dettagli del post con id: ${id}`);
});

/** Destroy */

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json(`Elimina post con id: ${id}`);
});

module.exports = router;
