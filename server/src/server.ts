import fastify from 'fastify'
import 'dotenv/config'

import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'path'
const app = fastify()

/* Registrar o Arquivo de rotas que criamos */
app.register(memoriesRoutes)
app.register(authRoutes)
app.register(uploadRoutes)
app.register(multipart)
app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})
app.register(cors, {
  origin: true, // todas urls de front end poderão acessar nosso back-end ou ['https://']
})
app.register(jwt, {
  secret: 'spacetime', // assinatura da criptografia dos tokens a serem gerados
})
app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('HTTP Server running on http://localhost:3333')
  })
