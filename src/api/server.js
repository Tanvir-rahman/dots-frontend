// Mock server setup using MirageJS
import { Server, Model } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    environment,
    models: {
      user: Model
    },
    seeds(server) {
      server.create('user', { name: 'Bob' })
      server.create('user', { name: 'Alice' })
    },
    routes() {
      this.namespace = 'api'
      // this.namespace = ''

      this.post('/token', (schema, request) => {
        console.log(request)
        return {
          access: 'fake-access-token',
          refresh: 'fake-refresh-token'
        }
      })

      this.get('/user', (schema) => {
        return {
          fullName: 'John Doe'
        }
      })

      this.get('/users', (schema) => {
        return schema.users.all()
      })
    }
  })
  window.server = server
  return server
}
