const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');


//creates story  
  
module.exports = {
  
  get: (req, res, next) => { 
    res.render('create_story', { title: 'Create Story'})
  },
  
  
  //On post request 
  
  post: [
    
     // Validate fields.
    body('first_name').isLength({ min: 1 }).trim().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('family_name').isLength({ min: 1 }).trim().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('date_of_birth', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601(),
    body('date_of_death', 'Invalid date of death').optional({ checkFalsy: true }).isISO8601(),

    // Sanitize fields.
    sanitizeBody('first_name').trim().escape(),
    sanitizeBody('family_name').trim().escape(),
    sanitizeBody('date_of_birth').toDate(),
    sanitizeBody('date_of_death').toDate(),
    
    
    
        
    
    
    
    
    (req, res, next) => {
      res.send('post.create_story not implemented yet')
    }
  
  ]
  
}

