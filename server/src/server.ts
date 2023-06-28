import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

// usando o cors passando um objeto de config, onde o origin como true permite todas as rotas acessarem o backend
app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'spacetime',
})
// registra um arquivo de rotas separado
app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀  HTTP server running on port http://localhost:3333')
  })
