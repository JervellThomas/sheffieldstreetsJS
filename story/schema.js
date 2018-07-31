var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var story = new Schema(
    {
    title: {type: String, required: true, max: 100},
    featured_picture: {type: String, required: true, max: 100},
    date_written: { type: Date },
    body_content: {type: String, required: true, max: 2000}
    }
  )


// Virtual for this story instance URL.
story
.virtual('url')
.get(function () {
  return '/story/' +this.title
});

module.exports = mongoose.model('Story', story);

