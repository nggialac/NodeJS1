const Course = require("../models/Course");
const {multipleMongooseToObject} = require('../../util/mongoose')

class SiteController {
  index(req, res, next) {
    //res.render('home');
    // Course.find({}, function (err, courses) {
    //   if (!err) {
    //     //next(err);
    //     res.json(courses);
    //   } else res.status(400).json({ error: "ERROR!!! " });
    // });

    //npm HANDLEBAR 
    Course.find({})
      // .then(courses => res.json(courses))
      .then((courses) => {
        //courses = courses.map((course) => course.toObject()); //replaced by util/mongoose.js
        res.render("home", { 
          courses : multipleMongooseToObject(courses)
        });
      })
      .catch(next);
  }

  //[GET] /search/:slug
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
