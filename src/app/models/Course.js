const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator"); //Create slug name
const mongooseDelete = require("mongoose-delete");

const Course = new Schema({
  name: { type: String, required: true },
  description: { type: String, maxlength: 600 },
  image: { type: String },
  videoId: { type: String, required: true },
  level: { type: String },
  slug: { type: String, slug: "name", unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

//Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: "all" }, { deletedAt: true });

module.exports = mongoose.model("Course", Course); //--->Courses
