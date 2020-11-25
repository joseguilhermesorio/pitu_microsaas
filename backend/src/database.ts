import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
config();

const options = {
    user: process.env.MYSQL_USER,
    pass: process.env.MYSQL_PASS,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    db: process.env.MYSQL_DB
}

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: options.host,
    username: options.user,
    password: options.pass,
    database: options.db,
    port:parseInt(options.port!)
});

export default sequelize;