const { Sequelize } = require("sequelize");
const Connection = require("../config/db");
const { DataTypes } = Sequelize;

const prodpartypbswitch = Connection.define(
  "prodpartypbswitch",
  {
    // Query -  sequelize is creating default id but as per document it should be Int_Id

    Int_Id: {
      type: DataTypes.INTEGER(3),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },    
    Integration_Code: {
      type: DataTypes.STRING(10),  //(This can be mixed and matched with the product code + customer code)
      unique: true,
      // allowNull:false
    },
    Integration_Description: {
        type: DataTypes.STRING(100),  //To describe the Integration Description
        allowNull:true
      },
    Product_Id: {
      type: DataTypes.INTEGER(3), //Select the Product from the product table
      // allowNull:false
    },
    Product_Code: {
      type: DataTypes.STRING(8), //This comes from the Product Master 
      // allowNull:false
    },
    Party_Id:{                          //The Customer for whom this integration is applied
        type:DataTypes.INTEGER(6),  //Select the Party from the party table
    },
    Party_Code: {
      type: DataTypes.STRING(6),//This comes from the Party Master 
    },
    Partner_Bank_Id:{
        type:DataTypes.INTEGER(3), //Select from  the partner_bank table
    },
    Partner_Bank_Code:{
        type:DataTypes.STRING(6),  //This comes from the partner_bank table
    },
    Switch_Id:{
        type:DataTypes.INTEGER(6), //Select the Product from the switch_master table
    },
    Switch_Code:{
        type:DataTypes.STRING(6), //This comes from the switch_master table 
    },
    PayAuthority_Id:{               //NPCI_Authority, RBI,PayPAL
        type:DataTypes.INTEGER(3), //This comes from pay_authority table
    },
    PayAuthority_Trailer:{          //RBI/UPI_Trailer..@icici; @yesbankltd
        type:DataTypes.STRING(100), // This we have to enter…which we allot to the product for that particular customer (party)        
    },

    Msg_Logo_Displ_Indicator:{      
        type:DataTypes.STRING(1), //This is a logical indicator
        allowNull:true
    },
    DisplayMessage:{
        type:DataTypes.STRING(20),
        allowNull:true
    },
    LogoDisplay:{
        type:DataTypes.BLOB('Medium'),
        allowNull:true
    },
    Int_Status:{
        type:DataTypes.STRING(2), //1 - Live | 2 - Suspended | 3- Test |9 - Deleted (Dropdown)
        allowNull:true

    }

  },
  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: true,
  }
);

    prodpartypbswitch
  .sync()
  .then(() => {
    console.log(" table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = prodpartypbswitch;












































































































