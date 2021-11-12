import { Phone } from '.'

let phone

beforeEach(async () => {
  phone = await Phone.create({ lada: 'test', telefono: 'test', ext: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = phone.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(phone.id)
    expect(view.lada).toBe(phone.lada)
    expect(view.telefono).toBe(phone.telefono)
    expect(view.ext).toBe(phone.ext)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = phone.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(phone.id)
    expect(view.lada).toBe(phone.lada)
    expect(view.telefono).toBe(phone.telefono)
    expect(view.ext).toBe(phone.ext)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
