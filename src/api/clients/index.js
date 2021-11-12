import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Clients, { schema } from './model'

const router = new Router()
const { nombre, apellidoPaterno, apellidoMaterno, edad } = schema.tree

/**
 * @api {post} /clients Create clients
 * @apiName CreateClients
 * @apiGroup Clients
 * @apiParam nombre Clients's nombre.
 * @apiParam apellidoPaterno Clients's apellidoPaterno.
 * @apiParam apellidoMaterno Clients's apellidoMaterno.
 * @apiParam edad Clients's edad.
 * @apiSuccess {Object} clients Clients's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Clients not found.
 */
router.post('/',
  body({ nombre, apellidoPaterno, apellidoMaterno, edad }),
  create)

/**
 * @api {get} /clients Retrieve clients
 * @apiName RetrieveClients
 * @apiGroup Clients
 * @apiUse listParams
 * @apiSuccess {Object[]} clients List of clients.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /clients/:id Retrieve clients
 * @apiName RetrieveClients
 * @apiGroup Clients
 * @apiSuccess {Object} clients Clients's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Clients not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /clients/:id Update clients
 * @apiName UpdateClients
 * @apiGroup Clients
 * @apiParam nombre Clients's nombre.
 * @apiParam apellidoPaterno Clients's apellidoPaterno.
 * @apiParam apellidoMaterno Clients's apellidoMaterno.
 * @apiParam edad Clients's edad.
 * @apiSuccess {Object} clients Clients's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Clients not found.
 */
router.put('/:id',
  body({ nombre, apellidoPaterno, apellidoMaterno, edad }),
  update)

/**
 * @api {delete} /clients/:id Delete clients
 * @apiName DeleteClients
 * @apiGroup Clients
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Clients not found.
 */
router.delete('/:id',
  destroy)

export default router
