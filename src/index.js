const express = require('express')
const morgan = require('morgan')
const app = express()
const handlebars = require('express-handlebars');
const path = require('path'); 
const port = 3300

//path file
app.use(express.static(path.join(__dirname, 'public')));

//log status
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars({
  extname: '.hbs' //cho no cai duoi khac
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'));

//WEB PATH
app.get("/", function (req, res) {
	res.render("home", {
		title: "Home",
	});
});

app.get("/news", function (req, res) {
	res.render("news", {
		title: "News",
	});
});


//PORT
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})