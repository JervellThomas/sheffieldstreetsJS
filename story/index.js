const story = ('./story');


//exports functionality to routes 
module.exports = {
  display: story.display_stories,
  create: story.create_story,
  delete: story.delete_story
};
