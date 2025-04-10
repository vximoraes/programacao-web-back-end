import express from "express"

const app = express()

app.use(express.json())

// Arrays  

const grupos = [
    {id: 0, nome: "Todos"},
    {id: 1, nome: "Administradores"}, 
    {id: 2, nome:"Gerentes"},
    {id: 3, nome: "Usuários limitados"}
]
const unidades = [
    {id: 0, nome: "Porto Velho"},
    {id: 1, nome: "Vilhena"},
    {id: 2, nome: "Cacoal"},
    {id: 3, nome: "Guajará"}
]

const usuarios = [
    {id: 0, nome: "José da Silva"},
    {id: 1, nome: "Vicente da Silva"},
    {id: 2, nome: "Noé Silva"},
    {id: 3, nome: "Thomé Silva"}
]

// Buscar Id

function buscarId(id, array) {
    return array.findIndex(grupo => grupo.id == id)
}

// GET

app.get('/', (req, res) => {
    res.status(200).send('Bem-vindo ao auth')
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

// GET ID

app.get('/grupos/:id', (req, res) => {
    let index = buscarId(req.params.id, grupos)
    res.json(grupos[index])
})

app.get('/unidades/:id', (req, res) => {
    let index = buscarId(req.params.id, unidades)
    res.json(unidades[index])
})

app.get('/usuarios/:id', (req, res) => {
    let index = buscarId(req.params.id, usuarios)
    res.json(usuarios[index])
})

// POST

app.post('/grupos', (req, res) => {
    grupos.push(req.body)
    res.status(201).send("Grupo cadastrado com sucesso!")
})

app.post('/unidades', (req, res) => {
    unidades.push(req.body)
    res.status(201).send("Unidade cadastrada com sucesso!")
})

app.post('/usuarios', (req, res) => {
    usuarios.push(req.body)
    res.status(201).send("Usuário cadastrado com sucesso!")
})

// PUT

app.put('/grupos/:id', (req, res) => {
    let index = buscarId(req.params.id)

    grupos[index].nome = req.body.nome

    res.json(grupos[index])
})

app.put('/unidades/:id', (req, res) => {
    let index = buscarId(req.params.id, unidades)

    unidades[index].nome = req.body.nome

    res.json(unidades[index])
})

app.put('/usuarios/:id', (req, res) => {
    let index = buscarId(req.params.id, usuarios)

    usuarios[index].nome = req.body.nome

    res.json(usuarios[index])
})

// DELETE 

app.delete('/grupos/:id', (req, res) => {
    let index = buscarId(req.params.id, grupos)
    grupos.splice(index, 1)

    res.send(`Grupo ${id} removido com sucesso!`)
})

app.delete('/unidades/:id', (req, res) => {
    let index = buscarId(req.params.id, unidades)
    unidades.splice(index, 1)

    res.send(`Grupo ${id} removido com sucesso!`)
})

app.delete('/usuarios/:id', (req, res) => {
    let index = buscarId(req.params.id, usuarios)
    usuarios.splice(index, 1)

    res.send(`Grupo ${id} removido com sucesso!`)
})

export default app
