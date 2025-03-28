import express from 'express'

const app = express()

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