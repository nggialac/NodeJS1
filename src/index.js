const express = require("express");
const morgan = require("morgan");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");
const port = 3300;

const route = require("./routes");

//path file
app.use(express.static(path.join(__dirname, "public")));

//MIDDLE
app.use(
  express.urlencoded({
    extended: true,
  })
); //gui POST dang form
app.use(express.json()); //gui POST dang js

//log status
app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs", //cho no cai duoi khac
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//ROUTES INIT
//WEB PATH: Action --->Dispatcher---->function Handler
route(app);

//PORT
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
