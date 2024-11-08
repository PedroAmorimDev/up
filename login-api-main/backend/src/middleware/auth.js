import jwt from "jsonwebtoken"

export const verifyToken = (request, response, next) => {

    const token = request.headers.authorization?.split(' ')[1];
    

    console.log(token)

    if(!token){
        return response.status(403).json({error: "Token não foi encontrado!"})
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if(error){
            return response.status(401).json({error: "Token inválido"})
        }

        request.user = decoded
        next();
    })
}

