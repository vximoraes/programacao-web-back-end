import express from 'express'

export const app = express()

const grupos = [
    {id: 1, nome: 'Todos'},
    {id: 2, nome: 'Administradores'},
    {id: 3, nome: 'Gerentes'},
    {id: 4, nome: 'Usuários limitados'}
]

const unidades = [{
    'unidades': {
        1: 'Vilhena',
        2: 'Cacoal',
        3: 'Guajará'
    }
}]

const usuarios = [
    {id: 1, nome: 'Vinícius'},
    {id: 2, nome: 'Eduardo Tartas'},
    {id: 3, nome: 'Yuri Zetoles'},
    {id: 4, nome: 'Arthur Gomes'}
]

app.get('/', (req, res) => {
    res.status(200).send('Bem-vindo ao auth!')
})

app.get('/grupos', (req, res) => {
    console.log(req.query)
    res.status(200).json(grupos)
})

app.get('/unidades', (req, res) => {
    res.status(200).json(unidades)
})

app.get('/usuarios', (req, res) => {
    console.log(req.query)

    const requisicao = req.query.nome
    
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nome == requisicao) {
            console.log(usuarios[i].nome)
            res.status(200).json([usuarios[i].id, usuarios[i].nome])
        }
    }
        
    res.status(404).send(`Nenhum usuário encontrado com o nome ${requisicao}.`)
})

export default app