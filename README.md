# stocks-api

## Description

nodejs with typeorm and postgresDB

</br>

## Requeriments

- postgres

</br>

## Installation

```
npm install
npm run start:dev
```

the synchronize is on, so you do not need to run migrations.

</br>

## branchs:

- main
- dev

 </br>

## Endpoints

</br>

### User:

POST: /user/login

```
{
    "username": "carlsagan",
    "password": "cosmos"
}
```

POST: /user/add-stock

```
{
  "symbol": "AAC",
  "name": "AAC Holdings Inc",
  "currency": "USD",
  "userId": "1"
}
```

GET: /user/get-stocks/:id

```
This endpoint return all stocks related with an user
```

</br>
</br>

### TODOs

- auth
- delete stock
- unitesting
- env file
