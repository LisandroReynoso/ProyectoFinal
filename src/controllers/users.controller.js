import { data } from "../data/data.js"

export const users = (request, response) => {

    const usuarios = data.map(user => {
        return {
            user: user.username,
            email: user.email,
            role: user.role

        }
    })

    const datos = {
        status: 200,
        payload: usuarios
    }
    response.status(200).json(datos)
}
