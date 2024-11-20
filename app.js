const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

const postsRouter = require("./routers/posts.js");

// app.get("/", (req, res) => {
//   res.send("Server del mio blog");
// });

// app.use("/", postsRouter);
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

// let postNum = posts.length;

// app.get("/bacheca", (req, res) => {
//   let resoconto = {
//     post: posts,
//     count: postNum,
//   };

//   res.json(resoconto);
// });
