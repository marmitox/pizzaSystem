const app = require("./src/app.js")
require('dotenv').config()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})

const { sequelize } = require('./src/models')

async function testarConexao() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
}

testarConexao();