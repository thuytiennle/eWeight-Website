# IoT Farm

## Tech Requirements

- NodeJS vesion: > 14
- Sequelize ORM: 6

## Database Config

- Change database info in file `.env`
- File config database in `config/db.config.js`
- `PORT=8080`
- Sample DB: `iot_farm`

## Init table

Run `npm run sync`

## API Docs

- Run `npm run apidoc`
- Docs URL: `http://localhost:{port}/apidoc`

## Start Project

- Run `npm install`
- Run `npm start`


## API public URL

API URL: `http://localhost:{port}/api`

## API Reference

#### Upload CSV File

```http
  GET /api/product/upload
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `file`    | `File`   | **Required**. File upload  |

#### Get Product Detail

```http
  GET /api/product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Product ID          |

#### Get List Products

```http
  GET /api/product
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`    | `number` | **Optional**. Page number         |
| `limit`   | `number` | **Optional**. Limit (default=100) |
| `name`    | `string` | **Optional**. Product name.       |
| `sku`     | `string` | **Optional**. Product sku.        |
| `origin`  | `string` | **Optional**. Product origin.     |
| `weight`  | `number` | **Optional**. Product weight.     |


#### Update Product

```http
  PUT /api/product/${id}
```

| Parameter   | Type     | Description                       |
| :--------   | :------- | :-------------------------------- |
| `id`        | `number` | **Optional**. Product ID.         |
| `name`      | `string` | **Optional**. Product name.       |
| `sku`       | `string` | **Optional**. Product sku.        |
| `origin`    | `string` | **Optional**. Product origin.     |
| `importDate`| `string` | **Optional**. Product importDate  | 
| `weight`    | `number` | **Optional**. Product weight.     |


#### Delete Product

```http
  DELETE /api/product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Product ID          |