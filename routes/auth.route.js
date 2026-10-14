const { Router } = require("express");

const router = Router();

router.post("/auth", (req, res) => {

    const { telefone, senha } = req.query;

    res.json({
        mensagem:"autenticado"
    })
});

//Exportamos as rotas definidas no arquivo.
module.exports = router;

