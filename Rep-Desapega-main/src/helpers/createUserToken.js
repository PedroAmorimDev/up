import jwt from "jsonwebtoken"

const createUserToken = async (usuario, request, response) => {
    //criar token
    const token = jwt.sign(
        {
            nome: usuario.nome,
            id: usuario.uuario_id,
        },
        "SENHASUPERSEGURA", //Senha DE CRIPTOGRAFIA
    )
    //retornar token
    response.status(200).json({
        message: "Você está autenticado",
        token: token,
        usuarioId: usuario.usuario_id,
    })
}

export default createUserToken