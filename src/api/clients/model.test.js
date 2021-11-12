import { Clients } from '.'

let clients

beforeEach(async () => {
  clients = await Clients.create({ nombre: 'test', apellidoPaterno: 'test', apellidoMaterno: 'test', edad: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = clients.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(clients.id)
    expect(view.nombre).toBe(clients.nombre)
    expect(view.apellidoPaterno).toBe(clients.apellidoPaterno)
    expect(view.apellidoMaterno).toBe(clients.apellidoMaterno)
    expect(view.edad).toBe(clients.edad)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = clients.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(clients.id)
    expect(view.nombre).toBe(clients.nombre)
    expect(view.apellidoPaterno).toBe(clients.apellidoPaterno)
    expect(view.apellidoMaterno).toBe(clients.apellidoMaterno)
    expect(view.edad).toBe(clients.edad)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
