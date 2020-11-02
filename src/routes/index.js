
const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
  // app.get("/news", function (req, res) {
  //   res.render("news", {
  //     title: "News",
  //   });
  // });

  //THREAD: route(app) index.js (src) ---> route(app) index.js (routes) 
  //--->news.js
  app.use('/news',newsRouter);// access '/news'---> newsRouter() --->config from news.js (newsController.index)
  app.use('/', siteRouter);

}
module.exports = route;
