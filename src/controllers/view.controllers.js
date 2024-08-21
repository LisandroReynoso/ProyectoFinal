import { request, response } from "express";
import { data } from "../data/data.js";

export const home = (request, response) => {
    const datos = {
        title: 'la pagina principal',
        user: 'lisandro'
    }
    response.render('home', datos)
}

export const about = (request, response) => {
    const datos = {
        title: 'About',
        style: 'about'
    }
    response.render('about', datos)
}

export const users = (request, response) => {

    const usuarios = data.map(user => {
        return {
            user: user.username,
            email: user.email,
            role: user.role

        }
    })

    const datos = {
        title: 'users',
        usuarios: usuarios,
    }
    response.render('users', datos)
}