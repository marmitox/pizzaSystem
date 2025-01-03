const {Router} = require('express')
const PizzaController = require('../controllers/PizzaController.js')

const router = Router()

router.get('/pizzas', PizzaController.getAll)
router.get('/pizzas/:code', PizzaController.getByCode)
router.post('/pizzas', PizzaController.createOne)
router.put('/pizzas/:code', PizzaController.updateOne)
router.delete('/pizzas/:code', PizzaController.deleteOne)

module.exports = router