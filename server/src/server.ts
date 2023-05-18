import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
const app = fastify()

/* Registrar o Arquivo de rotas que criamos */
app.register(memoriesRoutes)
app.register(cors, {
  origin: true, // todas urls de front end poderão acessar nosso back-end ou ['https://']
})
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server running on http://localhost:3333')
  })
