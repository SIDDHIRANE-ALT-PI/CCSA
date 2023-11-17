const Sequelize = require("sequelize");
const Connection = require("../config/db");

const { DataTypes } = Sequelize;

const party1 = Connection.define(
  "party1",
  {
    Party_Id: {
      type: DataTypes.INTEGER(6),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    Party_Code: { type: DataTypes.STRING(6), unique: true,allowNull: true },

    Party_Status: { type: DataTypes.STRING(1), allowNull: false }, //'1 - Live | 2 - Suspended |   8-Boarded   | 9 - Deleted'

    Party_Name: { type: DataTypes.STRING(100), allowNull: false },

    Party_Type: { type: DataTypes.STRING(4), allowNull: false }, //PB - Partner Bank | CB - Commercial Bank | UB - Urban Coop Bank | DC - DCC | CU - Credit Union| CO - Corporate | NB - NBFC

    PB_Party_Id: { type: DataTypes.INTEGER(6), allowNull: false }, //If not a Partner Bank, which Partner Bank will be servicing this Party

    Integration_Party_Id: { type: DataTypes.INTEGER(6), allowNull: true }, //eg: Olive etc.

    Logo_Image: { type: DataTypes.BLOB("long"), allowNull: true }, //The Logo of the Customer

    LogoImage_Indicator: { type: DataTypes.STRING(1), allowNull: true }, //"T" if Image exists else "F"

    Theme: { type: DataTypes.STRING(15), allowNull: true }, //The Colour Theme for the Customer

    Background_Image: { type: DataTypes.BLOB("long"), allowNull: true }, //Background Image for the customer

    BackgroundImage_Indicator: { type: DataTypes.STRING(1), allowNull: true }, //"T" if Image exists  else "F"

    // createdAt:{type: DataTypes.DATE, defaultValue : Sequelize.NOW},
    // updatedAt:{type: DataTypes.DATE, defaultValue : Sequelize.NOW}
  },

  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: false,
  }
);

// party.sync().then(() => {
party1
  .sync()
  .then(() => {
    console.log(" table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = party1;
