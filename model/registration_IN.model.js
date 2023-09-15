const Sequelize = require("sequelize");

const db = require("../config/db");
const { DataTypes } = Sequelize;

const registration_IN = db.define('Login',
    {//registration ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        CustomerFirstName: {
            type: DataTypes.STRING(30),
            allowNull:true
        },
        CustomerLastName: {
            type: DataTypes.STRING(30),
            allowNull:true
        },
        MobileNo: {
            type: DataTypes.STRING(15),
            allowNull:true

        },
        Email_Id:{
            type: DataTypes.STRING(30),
            allowNull:true
        },
        Password:{
            type: DataTypes.STRING(30),
            allowNull:true
        }
       
    },
    {
        // Freeze Table Name
        freezeTableName: true,
        timestamps: false,
    }
);
registration_IN.sync().then(() => {
    console.log(' table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
module.exports = registration_IN;