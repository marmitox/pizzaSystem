const PizzaServices = require("../services/PizzaService.js")

module.exports = class PizzaController {
    static async getAll(req, res) {
        try {
            const listPizzas = await PizzaServices.getAllPizzas()
            res.status(200).send(listPizzas)
        } catch (error) {
            res.status(400).send(`${error.message}`)
        }

    }

    static async getByCode(req, res) {
        const pizzaCode = req.params.code
        try {
            const pizza = await PizzaServices.getPizzaByCode(pizzaCode)
            res.status(200).send(pizza)
        } catch (error) {
            console.log(typeof pizzaCode)
            res.status(400).send(`${error.message}`)
        }
    }

    static async createOne(req, res) {
        const dataToCreate = req.body
        console.log(dataToCreate)

        if (req.body.name == null || req.body.code == null) {
            res.status(400).send(`All fields must be filled in`)
        }

        try {
            const newRegister = await PizzaServices.createPizza(dataToCreate)
            res.status(201).send(`New pizza ${newRegister.name} created!`)
        } catch (error) {
            res.status(400).send(`${error.message}`)
        }

    }

    static async updateOne(req, res) {
        const {code} = req.params
        const dataToUpdate = req.body

        try {
            const isUpdated = await PizzaServices.updateOnePizza(code, dataToUpdate)

            return isUpdated === true ? res.status(200).send(`Pizza updated`) : res.status(404).send(`Register not found`)
        } catch (error) {
            console.log(error)
            res.status(400).send(`${error.message}`)
        }
    }

    static async deleteOne(req, res) {
        const codePizza = req.params.code

        try {
            await PizzaServices.deletePizzaBycode(codePizza)
            res.status(200).send(`Pizza with code ${codePizza} deleted`)
        } catch (error) {
            res.status(500).send(`${error.message}`)
        }
    }
}