"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = require("dotenv");
dotenv_1.config();
const options = {
    user: process.env.MYSQL_USER,
    pass: process.env.MYSQL_PASS,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    db: process.env.MYSQL_DB
};
const sequelize = new sequelize_1.Sequelize({
    dialect: 'mysql',
    host: options.host,
    username: options.user,
    password: options.pass,
    database: options.db,
    port: parseInt(options.port)
});
exports.default = sequelize;
