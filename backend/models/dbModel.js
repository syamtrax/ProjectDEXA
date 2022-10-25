import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const User = db.define('recommendation',{
    Provinsi : DataTypes.STRING,
    namaObat : DataTypes.STRING,
    katObat : DataTypes.STRING,
    hargaObat : DataTypes.INTEGER,
    score : DataTypes.FLOAT

},{
    freezeTableName:true
})

export default User;

(async()=>{
    await db.sync();
})();