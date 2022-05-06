const joi = require("joi");

exports.todoValidation = joi.object({
    id: joi.number().integer().min(1).max(9999).required(),
    title: joi.string().alphanum().min(3).max(25).trim(true).required(),
    description: joi.string().alphanum().min(3).max(100).trim(true).required(),
    user: joi.string().alphanum().min(3).max(100).trim(true).required(),
})


exports.registerValidation = joi.object({
    firstname: joi.string().alphanum().min(3).max(32).trim(true).required(),
    lastname: joi.string().alphanum().min(3).max(32).trim(true).required(),
    email: joi.string().email().trim(true).required(),
    password: joi.string().min(8).trim(true).required(),
})

exports.loginValidation = joi.object({
    email: joi.string().email().trim(true).required(),
    password: joi.string().min(8).trim(true).required(),
})