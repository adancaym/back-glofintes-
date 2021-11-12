import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Phone, { schema } from './model'

const router = new Router()
const { lada, telefono, ext } = schema.tree

/**
 * @api {post} /phones Create phone
 * @apiName CreatePhone
 * @apiGroup Phone
 * @apiParam lada Phone's lada.
 * @apiParam telefono Phone's telefono.
 * @apiParam ext Phone's ext.
 * @apiSuccess {Object} phone Phone's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Phone not found.
 */
router.post('/',
  body({ lada, telefono, ext }),
  create)

/**
 * @api {get} /phones Retrieve phones
 * @apiName RetrievePhones
 * @apiGroup Phone
 * @apiUse listParams
 * @apiSuccess {Object[]} phones List of phones.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /phones/:id Retrieve phone
 * @apiName RetrievePhone
 * @apiGroup Phone
 * @apiSuccess {Object} phone Phone's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Phone not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /phones/:id Update phone
 * @apiName UpdatePhone
 * @apiGroup Phone
 * @apiParam lada Phone's lada.
 * @apiParam telefono Phone's telefono.
 * @apiParam ext Phone's ext.
 * @apiSuccess {Object} phone Phone's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Phone not found.
 */
router.put('/:id',
  body({ lada, telefono, ext }),
  update)

/**
 * @api {delete} /phones/:id Delete phone
 * @apiName DeletePhone
 * @apiGroup Phone
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Phone not found.
 */
router.delete('/:id',
  destroy)

export default router
