module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DATABSE,
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
  // "test": {
  //   "username": null,
  //   "password": null,
  //   "database": null,
  //   "host": null,
  //   "dialect": null
  // },
  // "production": {
  //   "username": null,
  //   "password": null,
  //   "database": null,
  //   "host": null,
  //   "dialect": null
  // }
}