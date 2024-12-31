module.exports = class PizzaController {
    static getAll(req, res) {
        //http get all
        console.log('read all from database')
    }

    static getOneById(req, res) {
        //http get one
        console.log('read one from db')
    }

    static createOne(req, res) {
        //http create one
        console.log('Create one to db')
    }

    static updateOne(req, res) {
        //http update one
        console.log('update onde from db')
    }

    static deleteOne(req, res) {
        //http delete on
        console.log('delete on from db')
    }
}