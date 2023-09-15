const Sequelize = require("sequelize");
const Connection = require("../config/db");

const { DataTypes } = Sequelize;

const party = Connection.define(
  "party",
  {
    Party_Id: {
      type: DataTypes.INTEGER(6),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    Country_Id: {
      type: DataTypes.INTEGER(4),
    },
    Party_Code: { type: DataTypes.STRING(6), allowNull: false },

    Party_Status: { type: DataTypes.STRING(1), allowNull: false }, //'1 - Live | 2 - Suspended |   8-Boarded   | 9 - Deleted'

    Party_Name: { type: DataTypes.STRING(100), allowNull: false },

    Party_Type: { type: DataTypes.STRING(4), allowNull: false }, //PB - Partner Bank | CB - Commercial Bank | UB - Urban Coop Bank | DC - DCC | CU - Credit Union| CO - Corporate | NB - NBFC

    PB_Party_Id: { type: DataTypes.STRING(6), allowNull: false }, //If not a Partner Bank, which Partner Bank will be servicing this Party

    UPI_Trailer: { type: DataTypes.STRING(100), allowNull: false }, //Partner Bank''s UPI Trailer - Example "@icici" etc.

    NPCI_ID_1: { type: DataTypes.STRING(30), allowNull: false }, //NPCI BIN No

    NPCI_ID_2: { type: DataTypes.STRING(30), allowNull: false }, //Additional NPCI Id if any

    Integration_Party_Id: { type: DataTypes.STRING(6), allowNull: false }, //eg: Olive etc.

    Txn_Auth_YN: { type: DataTypes.STRING(1), allowNull: false }, //Whether the Debit Txn will be Auth Real-time

    Personal_Debit_Card_YN: { type: DataTypes.STRING(1), allowNull: false }, //Whether Party will issue PDC

    PDC_Add_on_Card_YN: { type: DataTypes.STRING(1), allowNull: false }, //Whether Party will issue AOC

    Corporate_Debit_Card_YN: { type: DataTypes.STRING(1), allowNull: false }, //Whether Party will issue Corporate Cards

    Credit_Card_YN: { type: DataTypes.STRING(1), allowNull: false }, //Whether Party will issue Credit Cards

    Gift_Card_YN: { type: DataTypes.STRING(1), allowNull: false }, //Whether Party will issue Gift Cards

    Lender_YN: { type: DataTypes.STRING(1), allowNull: false }, //Whether Party will Provide Credit

    Third_Party_Lending_YN: { type: DataTypes.STRING(1), allowNull: false }, //Whether Party has Third-party Lender

    Third_Party_Lender_Party_Id: {
      type: DataTypes.STRING(6),
      allowNull: false,
    }, //Third Party providing Credit for this Party

    Logo_Image: { type: DataTypes.BLOB("long"), allowNull: true }, //The Logo of the Customer

    LogoImage_Indicator: { type: DataTypes.STRING(1), allowNull: true }, //"T" if Image exists else "F"

    Theme: { type: DataTypes.STRING(15), allowNull: false }, //The Colour Theme for the Customer

    Background_Image: { type: DataTypes.BLOB("long"), allowNull: false }, //Background Image for the customer

    BackgroundImage_Indicator: { type: DataTypes.STRING(1), allowNull: false }, //"T" if Image exists  else "F"

    // createdAt:{type: DataTypes.DATE, defaultValue : Sequelize.NOW},
    // updatedAt:{type: DataTypes.DATE, defaultValue : Sequelize.NOW}
  },

  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: true,
  }
);

// party.sync().then(() => {
party
  .sync()
  .then(() => {
    console.log(" table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = party;
