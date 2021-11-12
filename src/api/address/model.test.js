import { Address } from '.'

let address

beforeEach(async () => {
  address = await Address.create({ calle: 'test', numeroInt: 'test', numeroExt: 'test', colonia: 'test', cp: 'test', estado: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = address.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(address.id)
    expect(view.calle).toBe(address.calle)
    expect(view.numeroInt).toBe(address.numeroInt)
    expect(view.numeroExt).toBe(address.numeroExt)
    expect(view.colonia).toBe(address.colonia)
    expect(view.cp).toBe(address.cp)
    expect(view.estado).toBe(address.estado)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = address.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(address.id)
    expect(view.calle).toBe(address.calle)
    expect(view.numeroInt).toBe(address.numeroInt)
    expect(view.numeroExt).toBe(address.numeroExt)
    expect(view.colonia).toBe(address.colonia)
    expect(view.cp).toBe(address.cp)
    expect(view.estado).toBe(address.estado)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
