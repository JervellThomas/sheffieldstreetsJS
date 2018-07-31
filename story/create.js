//creates story  
  
module.exports = {
  
  get: (req, res) => { 
    
    res.render('book_form', { title: 'Create Story'})
  },
  
  
  
  
  
  
  post: (req, res) => {
    
    
    res.send('post.create_story not implemented yet')
  }
  
}

