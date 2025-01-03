const { where } = require('sequelize')
const dataSource = require('../models')

module.exports = class PizzaServices {
    static async getAllPizzas() {
        return await dataSource.Pizza.findAll({})
    }

    static async getPizzaByCode(codeToFind) {
        const pizza = await dataSource.Pizza.findOne({ where: { code: codeToFind } })
        return pizza !== null ? pizza : `Pizza not exist`
    }

    static async createPizza(data) {
        return await dataSource.Pizza.create(data)
    }

    static async updateOnePizza(pizzaCode, dataToUpdate) {
        const pizzaUpdated = await dataSource.Pizza.update(dataToUpdate, {
            where: {
                code: pizzaCode,
            }
        })

        if (pizzaUpdated[0] === 0) {
            return false
        }

        return true
    }

    static async deletePizzaBycode(pizzaCode) {
        return dataSource.Pizza.destroy({
            where: {
                code: pizzaCode,
            },
        })
    }
}