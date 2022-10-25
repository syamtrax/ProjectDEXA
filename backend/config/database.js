import {Sequelize} from "sequelize";

const db = new Sequelize('dexa_db','root','',{
    host : 'localhost',
    dialect:'mysql'
});

export default db;