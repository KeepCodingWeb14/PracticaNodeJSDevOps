*************************
#  NodeJS practise
*************************
Student: Xavi Roca 
(26.FEB.23)

## Prerequisites

* NodeJS ([nodejs.org](https://nodejs.org/en/))
* MongoDB ([mongodb.com](https://www.mongodb.com/))


* Packages:
  * express --> `npm i express` ... ([expressjs.com](https://expressjs.com/))
  * nodemon --> `npm i nodemon`
  * ejs --> `npm i ejs`
  * cross-env --> `npm i cross-env`
  * express-validator --> `npm i express-validator`
  * mongoose --> `npm i mongoose` ... ([mongoosejs.com](https://mongoosejs.com/))

  


## Nodepop

App directory
```sh
cd nodepop
```

Install dependencies with:
```sh
npm install
```

Initialize the database `pactica`:
```sh
npm run initDB
```

Start in development mode:
```sh
npm run dev
```

## API 

Here you are the three the endpoints that Nodepop app offers
### `anuncios` list

* URL: http://127.0.0.1:3000/api/anuncios
* You can apply some parameters:
  * Filters:
    * `nombre` -->  `...?nombre=text` ... return all element which nombre starts with `text`
    * `venta`-->  `...?venta=true` ... the value could be `true`or `false`
    * `precio` -->  `...?precio=regular_expresion` ... regular_expresion could be:
      * X ... exact value
      * X- ... great or equal x
      * -X ... less or equal x
      * X-Y ... between x and y, both included 
    * `tags`--> key word is `tag` (singular). Due to `tags`field is an array of strings user can ask for more than one value, per instance: `?tag=motor&tag=work`
  * Sort --> `...?sort=precio` or  `...?sort=-precio` 
  * Pagination --> `...?skip=10&limit=15` ... returns 15 elements starting at record 11. 
  * Fields -->  `...?fileds=nombre precio`
* Yo can combine some parameters and filters

### `tags` list

* Call without parameters: http://127.0.0.1:3000/api/anuncios/tags

### New `anuncio`

* It's a POST call where data comes in the body
* Call: http://127.0.0.1:3000/api/anuncios/add
* Sample data:

![SampleData](imagenes/BodyData.png)
## WEB

Here you are the two different web pages
### Dinamic page: `anuncios` list

* URL: http://127.0.0.1:3000/
* It's possible to apply the same filters and parameters as `/api/anuncios` endpoint
  * http://127.0.0.1:3000?precio=200-300&sort=-precio ...


![Dinamic WEB](imagenes/DinamicWEB.png)

### Static pages: direct access to pictures

* URL: http://127.0.0.1:3000/images/anuncios/foto2.jpg

![Static WEB](imagenes/StaticWEB.png)



