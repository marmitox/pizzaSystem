const {Router} = require('express')
const PizzaController = require('../controllers/PizzaController.js')

const router = Router()

router.get('/pizzas', PizzaController.getAll)

module.exports = router