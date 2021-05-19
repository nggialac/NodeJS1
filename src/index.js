const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const methodOverride = require('method-override');//Cho phép chuyển đổi sang phương thức PUT, PATCH,...
const app = express();
const path = require("path");
const db = require('./config/db');
const route = require("./routes");
const port = 3300;


//Connect Database
db.connect();

//path file
app.use(express.static(path.join(__dirname, "public")));

//METHOD OVERRIDE (header or params URL)
app.use(methodOverride('_method'));

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
    extname: ".hbs", //dùng view đuôi .hbs
    helpers:{
      sum: (a,b)=>a+b
    }
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//ROUTES INIT
//WEB PATH: Action --->Dispatcher---->function Handler
route(app);

//PORT
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
