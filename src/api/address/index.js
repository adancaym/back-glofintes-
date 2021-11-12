import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Address, { schema } from './model'

const router = new Router()
const { calle, numeroInt, numeroExt, colonia, cp, estado } = schema.tree

/**
 * @api {post} /addresses Create address
 * @apiName CreateAddress
 * @apiGroup Address
 * @apiParam calle Address's calle.
 * @apiParam numeroInt Address's numeroInt.
 * @apiParam numeroExt Address's numeroExt.
 * @apiParam colonia Address's colonia.
 * @apiParam cp Address's cp.
 * @apiParam estado Address's estado.
 * @apiSuccess {Object} address Address's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Address not found.
 */
router.post('/',
  body({ calle, numeroInt, numeroExt, colonia, cp, estado }),
  create)

/**
 * @api {get} /addresses Retrieve addresses
 * @apiName RetrieveAddresses
 * @apiGroup Address
 * @apiUse listParams
 * @apiSuccess {Object[]} addresses List of addresses.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /addresses/:id Retrieve address
 * @apiName RetrieveAddress
 * @apiGroup Address
 * @apiSuccess {Object} address Address's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Address not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /addresses/:id Update address
 * @apiName UpdateAddress
 * @apiGroup Address
 * @apiParam calle Address's calle.
 * @apiParam numeroInt Address's numeroInt.
 * @apiParam numeroExt Address's numeroExt.
 * @apiParam colonia Address's colonia.
 * @apiParam cp Address's cp.
 * @apiParam estado Address's estado.
 * @apiSuccess {Object} address Address's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Address not found.
 */
router.put('/:id',
  body({ calle, numeroInt, numeroExt, colonia, cp, estado }),
  update)

/**
 * @api {delete} /addresses/:id Delete address
 * @apiName DeleteAddress
 * @apiGroup Address
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Address not found.
 */
router.delete('/:id',
  destroy)

export default router
