// const party = require("../model/party.model");
const registration_IN = require('../model/registration_IN.model')
const { Op, where, Sequelize } = require("sequelize");
const { json } = require("body-parser");


exports.onBoardMerchant = async (req, res) => {
    try {
      const {
        CustomerFirstName,
        CustomerLastName,
        MobileNo,
        Email_Id,
        Password  
      } = req.body;

      await registration_IN.create(
       req.body
    );
    res.status(200).json({ msg: "success" });
  }
catch (err) {
  console.log(err, "this is error..");
}
};
    //   //validation
    
    //   if (existingUser) {
    //     return res.status(400).json({
    //       error: "User already exists with this mobile number",
    //     });
  
    //   } else {
    //     const labelExist = await partyMerchantDetails.findAll({
    //       where: {
    //         [Op.and]: [
    //           Sequelize.where(
    //             Sequelize.fn("LOWER", Sequelize.col("Label")),
    //             "LIKE",
    //             `%${upiId.toLowerCase()}%`
    //           ),
    //         ],
    //       },
    //       order: [["Label", "DESC"]], // Order by label in descending order to get the highest numbered label
    //       limit: 1,
    //     });
     

        