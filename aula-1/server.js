import app from './src/app.js'
import * as dotenv from 'dotenv'
// import http from "http"

dotenv.config()

const port = process.env.PORT

// const rotas = {
//     '/': 'Bem-vindo ao Auth!',
//     '/usuarios': 'Lista de usuarios',
//     '/grupos': 'Lista de grupos',
//     '/programas': 'Lista de programas',
//     '/unidades': 'Lista de unidades',
//     '/usuarios/1': 'Detalhes do usuario 1',
// }

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type':'text/plan'})
//     res.end(rotas[req.url])
// })

app.listen(port, () => {
    console.log(`Servidor escutando porta http://localhost:${port}`)
})