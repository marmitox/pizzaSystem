const express = require('express')
const pizzas = require('./pizzaRouter.js')


module.exports = app => {
    app.use(
        express.json(),
        pizzas,
    );
};
