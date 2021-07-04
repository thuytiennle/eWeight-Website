/*
 * IoT APIs Document
 *
 * This is a document for IoT's Apis.
 * Documentation blocks without @api (like this block) will be ignored.
 */

/**
 * @api {post} /api/product/upload 01-Upload CSV
 * @apiName ProductImportCSV
 * @apiGroup Product
 *
 * @apiParam {File} file Input file
 *
 * @apiSuccess (Success 200) {Array} data Product's Info
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": {
 *         "total": 10,
 *         "duplicate": 0
 *       },
 *       "status": "success",
 *       "statusCode": 200,
 *       "message": "success"
 *     }
 *
 * @apiError error NotFound
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 NotFound
 *     {
 *       "status": "error",
 *       "statusCode": 404,
 *       "message": "File not found"
 *     }
 */

/**
 * @api {get} /api/product 02-List of Products
 * @apiName ProductList
 * @apiGroup Product
 *
 * @apiHeader {String} Content-Type=application/json
 *
 * @apiParam  {String} [name] Product name
 * @apiParam  {String} [sku] Product sku
 * @apiParam  {String} [origin] Product origin
 * @apiParam  {Number} [weight] Product weight
 * @apiParam  {Number} [page] Pagination page number
 * @apiParam  {Number} [limit=10] Limit per page
 *
 * @apiSuccess (Success 200) {Array} data Product's Info
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": {
 *         "rows": [
 *           {
 *             "id": 1,
 *             "name": "Orange",
 *             "sku": "O001",
 *             "origin": "Long An",
 *             "weight": 530,
 *             "importDate": "20/06/2021",
 *             "qrCode": "data:image/png;base64,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"
 *           }
 *         ],
 *         "count": 1
 *       },
 *       "status": "success",
 *       "statusCode": 200,
 *       "message": "success"
 *     }
 */

/**
 * @api {get} /api/product/:id 03-Get Product Detail
 * @apiSampleRequest /api/product/1
 * @apiName ProductDetail
 * @apiGroup Product
 *
 * @apiHeader {String} Content-Type=application/json
 *
 * @apiParam  {Number} id Product ID
 *
 * @apiSuccess (Success 200) {Array} data Product's Info
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": {
 *         "rows": [
 *           {
 *             "id": 1,
 *             "name": "Orange",
 *             "sku": "O001",
 *             "origin": "Long An",
 *             "weight": 530,
 *             "importDate": "20/06/2021",
 *             "qrCode": "data:image/png;base64,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"
 *           }
 *         ],
 *         "count": 1
 *       },
 *       "status": "success",
 *       "statusCode": 200,
 *       "message": "success"
 *     }
 *
 * @apiError error NotFound
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 NotFound
 *     {
 *       "status": "error",
 *       "statusCode": 404,
 *       "message": "File not found"
 *     }
 */

/**
 * @api {put} /api/product/:id 05-Update Product
 * @apiSampleRequest /api/product/2
 * @apiName UpdateProduct
 * @apiGroup Product
 *
 * @apiHeader {String} Content-Type=application/json
 *
 * @apiParam  {Number} id Product ID
 * @apiParam  {String} [name] Product name
 * @apiParam  {String} [sku] Product sku
 * @apiParam  {String} [origin] Product origin
 * @apiParam  {String} [importDate] Product import date (Format: DD/MM/YYYY)
 * @apiParam  {Number} [weight] Product weight
 *
 * @apiSuccess (Success 200) {Object} data Deleted Product
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "status": "success",
 *          "data": {
 *              "rows": [
 *                  {
 *                      "id": 2,
 *                      "name": "Kiwi",
 *                      "sku": "0004",
 *                      "origin": "Dak lak",
 *                      "weight": 300,
 *                      "importDate": "23/02/2021",
 *                      "qrCode": "data:image/png;base64,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"
 *                  }
 *              ],
 *              "count": 1
 *          },
 *          "statusCode": 200,
 *          "message": "success"
 *      }
 *
 * @apiError error NotFound
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 NotFound
 *     {
 *       "status": "error",
 *       "statusCode": 404,
 *       "message": "Product not found"
 *     }
 */


/**
 * @api {delete} /api/product/:id 04-Delete Product
 * @apiSampleRequest /api/product/5
 * @apiName DeleteProduct
 * @apiGroup Product
 *
 * @apiHeader {String} Content-Type=application/json
 *
 * @apiParam  {Number} id Product ID
 *
 * @apiSuccess (Success 200) {Object} data Deleted Product
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "status": "success",
 *          "data": {
 *              "product": {
 *                  "id": 5,
 *                  "sku": "O005",
 *                  "name": "Orange",
 *                  "origin": "Long An",
 *                  "importDate": "2021-06-20T00:00:00.000Z",
 *                  "weight": 545,
 *                  "createdAt": "2021-07-03T13:32:13.000Z",
 *                  "updatedAt": "2021-07-03T14:42:02.171Z",
 *                  "deletedAt": "2021-07-03T14:42:02.170Z"
 *              }
 *          },
 *          "statusCode": 200,
 *          "message": "success"
 *      }
 *
 * @apiError error NotFound
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 NotFound
 *     {
 *       "status": "error",
 *       "statusCode": 404,
 *       "message": "Product not found"
 *     }
 */
