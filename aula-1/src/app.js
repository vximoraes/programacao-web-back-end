import express from 'express'

export const app = express()

const grupos = [
    {id: 1, 'admin': 'Administradores'},
    {id: 2, 'gerentes': 'Gerentes'},
    {id: 3, 'usuarios': 'Usuários limitados'}
]

const unidades = {
    'unidades': {
        1: 'Vilhena',
        2: 'Cacoal',
        3: 'Guajará'
    }
}

const usuarios = [
    {id: 1, 'vinimoraes': 'Vinícius Moraes'},
    {id: 2, 'tartinhas': 'Eduardo Tartas'},
    {id: 3, 'yurizin': 'Yuri Zetoles'},
    {id: 4, 'arthuzin': 'Arthur Gomes'}
]

app.get('/', (req, res) => {
    res.status(200).send('Bem-vindo ao auth!')
})

app.get('/grupos', (req, res) => {
    res.status(200).json(grupos)
})

app.get('/unidades', (req, res) => {
    res.status(200).json(unidades)
})

app.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios)
})