...



# Instalacion

### NodeJS & npm

* https://nodejs.org/en/download/ (todo por defecto)

```sh
npm init -y
```

### nodemon

```sh
npm install nodemon
```

### Framework: express

```sh
npm install express
```

editamos package.json
```json
...
  "scripts": {
    "start": "node ./bin/www",
    "dev": "cross-env DEBUG=nodeapp:* nodemon ./bin/www"
  },
...
  ```




