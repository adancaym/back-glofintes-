# back v0.0.0



- [Address](#address)
	- [Create address](#create-address)
	- [Delete address](#delete-address)
	- [Retrieve address](#retrieve-address)
	- [Retrieve addresses](#retrieve-addresses)
	- [Update address](#update-address)
	
- [Clients](#clients)
	- [Create clients](#create-clients)
	- [Delete clients](#delete-clients)
	- [Retrieve clients](#retrieve-clients)
	- [Update clients](#update-clients)
	
- [Phone](#phone)
	- [Create phone](#create-phone)
	- [Delete phone](#delete-phone)
	- [Retrieve phone](#retrieve-phone)
	- [Retrieve phones](#retrieve-phones)
	- [Update phone](#update-phone)
	


# Address

## Create address



	POST /addresses


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| calle			| 			|  <p>Address's calle.</p>							|
| numeroInt			| 			|  <p>Address's numeroInt.</p>							|
| numeroExt			| 			|  <p>Address's numeroExt.</p>							|
| colonia			| 			|  <p>Address's colonia.</p>							|
| cp			| 			|  <p>Address's cp.</p>							|
| estado			| 			|  <p>Address's estado.</p>							|

## Delete address



	DELETE /addresses/:id


## Retrieve address



	GET /addresses/:id


## Retrieve addresses



	GET /addresses


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update address



	PUT /addresses/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| calle			| 			|  <p>Address's calle.</p>							|
| numeroInt			| 			|  <p>Address's numeroInt.</p>							|
| numeroExt			| 			|  <p>Address's numeroExt.</p>							|
| colonia			| 			|  <p>Address's colonia.</p>							|
| cp			| 			|  <p>Address's cp.</p>							|
| estado			| 			|  <p>Address's estado.</p>							|

# Clients

## Create clients



	POST /clients


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| nombre			| 			|  <p>Clients's nombre.</p>							|
| apellidoPaterno			| 			|  <p>Clients's apellidoPaterno.</p>							|
| apellidoMaterno			| 			|  <p>Clients's apellidoMaterno.</p>							|
| edad			| 			|  <p>Clients's edad.</p>							|

## Delete clients



	DELETE /clients/:id


## Retrieve clients



	GET /clients


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update clients



	PUT /clients/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| nombre			| 			|  <p>Clients's nombre.</p>							|
| apellidoPaterno			| 			|  <p>Clients's apellidoPaterno.</p>							|
| apellidoMaterno			| 			|  <p>Clients's apellidoMaterno.</p>							|
| edad			| 			|  <p>Clients's edad.</p>							|

# Phone

## Create phone



	POST /phones


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| lada			| 			|  <p>Phone's lada.</p>							|
| telefono			| 			|  <p>Phone's telefono.</p>							|
| ext			| 			|  <p>Phone's ext.</p>							|

## Delete phone



	DELETE /phones/:id


## Retrieve phone



	GET /phones/:id


## Retrieve phones



	GET /phones


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update phone



	PUT /phones/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| lada			| 			|  <p>Phone's lada.</p>							|
| telefono			| 			|  <p>Phone's telefono.</p>							|
| ext			| 			|  <p>Phone's ext.</p>							|


