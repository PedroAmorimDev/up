import conn from "../config/conn.js"
import { v4 as uuidv4 } from "uuid"
import { getUserByToken } from "./usuarioController.js"

//helpers

export const create = async (request, response) => {
    const { nome, categoria, peso, cor, descricao, preco } = request.body
    const disponivel = 1

    //Buscar o token do usuário
    const token = getToken(request)
    const usuario = await getUserByToken(token)

    if (!nome) {
        return response.status(400).json("O cor do objeeto é obrigatório!")
    }
    if (!categoria) {
        return response.status(400).json("O cor do objeeto é obrigatório!")
    }
    if (!peso) {
        return response.status(400).json("O cor do objeeto é obrigatório!")
    }
    if (!cor) {
        return response.status(400).json("O cor do objeeto é obrigatório!")
    }
    if (!descricao) {
        return response.status(400).json("O cor do objeeto é obrigatório!")
    }
    if (!preco) {
        return response.status(400).json("O cor do objeeto é obrigatório!")
    }

    const objeto_id = uuidv4()
    const usuario_id = usuario.usuario_id
    const objeetoSql = /*sql*/ `INSERT INTO objetos (??, ??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`

    const objetoData = [
        "objeto_id",
        "nome",
        "categoria",
        "peso",
        "cor",
        "descricao",
        "disponivel",
        "preco",
        "usuario_id",
        objeto_id,
        nome,
        categoria,
        peso,
        cor,
        descricao,
        disponivel,
        preco,
        usuario_id
    ]
    conn.query(objeetoSql, objetoData, (err) => {
        if (err) {
            console.error(err);
            response.status(500).json({ message: "Erro " })
            return
        }
        if (request.files) {
            const insertImageSql = /*sql*/ `insert into objeto_images (image_id, image_path, objeto_id) values ?`
            const imageValues = request.files.map((file) => {
                uuidv4(),
                file.filename,
                objeto_id
            })
            conn.query(insertImageSql, [imageValues], (err) => {
                if (err) {
                    console.error(err)
                    response.status(500).json({ err: "Não foi possivel adicionar imagens ao objeto" })
                }
            })
        } else {
            response.status(201).json({ message: "Objeto criado com sucesso" })
        }
    })

    response.status(200).json("Chegou aqui")
}