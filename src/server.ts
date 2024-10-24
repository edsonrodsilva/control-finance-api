import { FastifyReply, FastifyRequest } from 'fastify'
import { app } from '@/app'
import { env } from '@/env'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log(`🚀 Server is running in port: 3333`)
  })

app.get('/users', (request: FastifyRequest, reply: FastifyReply) => {
  reply.status(400).send({
    message: 'Hello World',
  })
})
