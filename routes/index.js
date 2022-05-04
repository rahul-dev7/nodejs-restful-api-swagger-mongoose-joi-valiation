// const todoRouter = require('./todoRoutes');

//  module.exports = {
//      '/todo' : todoRouter
//  }

const authRouter = require('../routes/authRoutes')
exports = {
    '/' : authRouter 
}

