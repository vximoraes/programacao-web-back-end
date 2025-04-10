import app from './src/app.js'
import * as dotenv from 'dotenv'
// import http from "http"

dotenv.config()

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Servidor escutando porta http://localhost:${port}`)
})