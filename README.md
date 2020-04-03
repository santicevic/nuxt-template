# nuxt-template

> 

## Build Setup

Create the following .env file in the root directory
```bash
BASE_URL=http://localhost:3000

// DB SETUP
DB_HOST = 127.0.0.1
DB_USER = <USER>
DB_PASSWORD = <PASSWORD>
DB_NAME = <DB_NAME>

// AUTH SETUP
SALT_ROUNDS = <NUMBER OD SALT ROUNDS>
JWT_SECRET = <SECRET>


// SEED USER
SEED_EMAIL = user@gmail.com
SEED_PASSWORD = password
```

Run the following commands in terminal
```bash
$ npm install
$ npx sequelize db:migrate
$ npx sequelize db:seed:all
$ npm run dev
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
