let jwt = require('jsonwebtoken');
const knex = require('../knex/knex.js');

const config = require('../config');

let checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'] || ''; // Express headers are auto converted to lowercase
  if (token) {
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }

    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        knex('users').returning('auth_token').where({id:decoded.id})
        .then(data => {
          if(data[0].auth_token !== token){
            return res.json({
              success: false,
              message: 'Token is not valid'
            });
          }
          else {
            req.decoded = decoded;
            next();    
          }
        })
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

module.exports = {
  authorize: checkToken
};