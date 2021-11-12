import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Phone } from '.'

const app = () => express(apiRoot, routes)

let phone

beforeEach(async () => {
  phone = await Phone.create({})
})

test('POST /phones 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ lada: 'test', telefono: 'test', ext: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.lada).toEqual('test')
  expect(body.telefono).toEqual('test')
  expect(body.ext).toEqual('test')
})

test('GET /phones 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /phones/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${phone.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(phone.id)
})

test('GET /phones/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /phones/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${phone.id}`)
    .send({ lada: 'test', telefono: 'test', ext: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(phone.id)
  expect(body.lada).toEqual('test')
  expect(body.telefono).toEqual('test')
  expect(body.ext).toEqual('test')
})

test('PUT /phones/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ lada: 'test', telefono: 'test', ext: 'test' })
  expect(status).toBe(404)
})

test('DELETE /phones/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${phone.id}`)
  expect(status).toBe(204)
})

test('DELETE /phones/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
