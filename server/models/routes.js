var express = require("express");
var router = express.Router();
var users = require("./users.json");

var app = express();

router.get("/", function(req, res, next) {
  res.send(users);
});

app.get("/", (req, res) => {
  res.json({
    message: "Express!"
  });
});

// router.get("/:id", function(req, res, next) {
//   var id = parseInt(req.params.id, 10);
//   var movie = movies.filter(function(movie) {
//     return movie.id === id;
//   });
//   res.send(movie);
// });
module.exports = router;
