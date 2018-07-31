//creates story  
  
module.exports = {
  
  get: (req, res, next) => { 
    
    res.render('create_story', { title: 'Create Story'})
  },
  
  
  
  
  
  
  post: (req, res) => {
    
    
    res.send('post.create_story not implemented yet')
  }
  
}

