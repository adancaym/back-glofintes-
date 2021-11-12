import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Clients } from '.'

const app = () => express(apiRoot, routes)

let clients

beforeEach(async () => {
  clients = await Clients.create({})
})

test('POST /clients 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ nombre: 'test', apellidoPaterno: 'test', apellidoMaterno: 'test', edad: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.nombre).toEqual('test')
  expect(body.apellidoPaterno).toEqual('test')
  expect(body.apellidoMaterno).toEqual('test')
  expect(body.edad).toEqual('test')
})

test('GET /clients 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /clients/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${clients.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(clients.id)
})

test('GET /clients/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /clients/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${clients.id}`)
    .send({ nombre: 'test', apellidoPaterno: 'test', apellidoMaterno: 'test', edad: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(clients.id)
  expect(body.nombre).toEqual('test')
  expect(body.apellidoPaterno).toEqual('test')
  expect(body.apellidoMaterno).toEqual('test')
  expect(body.edad).toEqual('test')
})

test('PUT /clients/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ nombre: 'test', apellidoPaterno: 'test', apellidoMaterno: 'test', edad: 'test' })
  expect(status).toBe(404)
})

test('DELETE /clients/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${clients.id}`)
  expect(status).toBe(204)
})

test('DELETE /clients/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
