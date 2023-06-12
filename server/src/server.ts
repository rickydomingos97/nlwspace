import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

// usando o cors passando um objeto de config, onde o origin como true permite todas as rotas acessarem o backend
app.register(cors, {
  origin: true,
})
// registra um arquivo de rotas separado
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀  HTTP server running on port http://localhost:3333')
  })
