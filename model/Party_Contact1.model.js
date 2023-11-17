const Sequelize = require("sequelize");
const Connection = require("../config/db");

const { DataTypes } = Sequelize;

const Party_Contact1 = Connection.define(
  "Party_Contact1",
  {
    Party_Contact_Id: {
      type: DataTypes.INTEGER(6),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    Party_Id: { type: DataTypes.INTEGER(6), allowNull: true},

    Address_1: { type: DataTypes.STRING(100), allowNull: true }, 

    Address_2: { type: DataTypes.STRING(100), allowNull: true },

    City: { type: DataTypes.STRING(50), allowNull: true }, 

    State: { type: DataTypes.INTEGER(50), allowNull: true }, 

    Pin: { type: DataTypes.STRING(6), allowNull: true }, 

    Country: { type: DataTypes.STRING(50), allowNull: true }, 

    Contact_Name_1: { type: DataTypes.STRING(100), allowNull: true }, 

    Mobile_No_1: { type: DataTypes.STRING(15), allowNull: true }, 

    Email_1: { type: DataTypes.STRING(30), allowNull: true}, 

    Contact_Name_2: { type: DataTypes.STRING(100), allowNull: true }, 

    Mobile_No_2:{type: DataTypes.STRING(15), allowNull: true},

    Email_2: { type: DataTypes.STRING(30), allowNull: true}, 

    Contact_Name_3: { type: DataTypes.STRING(100), allowNull: true }, 

    Mobile_No_3:{type: DataTypes.STRING(15), allowNull: true},

    Email_3: { type: DataTypes.STRING(30), allowNull: true}, 

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
    Party_Contact1
  .sync()
  .then(() => {
    console.log(" table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = Party_Contact1;
