require('dotenv').config({path: './config.env'});

module.exports = {
    server: process.env.server,
    SQLPORT: process.env.PORT,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialect: process.env.dialect,
    parseJSON: true,
    options: {
      encrypt: true,
      enableArithAbort: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};