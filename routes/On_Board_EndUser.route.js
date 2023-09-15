const router = require("express").Router();
const {  onBoardMerchant } = require("../controller/On_Board_Enduser.controller");
  
  router.post("/OnBoardEndUser", onBoardMerchant);
 
  module.exports = router;
  