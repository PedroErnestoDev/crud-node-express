const app = require("./app");

const sequelize = require("./db/connection");

sequelize.authenticate()
    .then(()=> {
        console.log("Banco Conectado");
    })

app.listen(3000, () => {
    console.log("Servidor Rodando");
})

