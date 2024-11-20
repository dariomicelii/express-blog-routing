const express = require("express");
const router = express.Router();

/** Index */

router.get("/", (req, res) => {
  res.json("Lista dei post");
});

/** Show */

router.get("/:id", (req, res) => {
  res.json("Dettagli della pizza" + res.params.id);
});

/** Store */

router.post("/", (req, res) => {
  res.json("Crea un nuovo elemento");
});

/** Update */

router.put("/:id", (req, res) => {
  res.json(
    "Modifica interamente i dettagli della pizza con id: " + res.params.id
  );
});

/** Modify */

router.patch("/:id", (req, res) => {});
