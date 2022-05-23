const express = require('express');
const adminRouter = express.Router();

adminRouter.get('/',(req,res)=>{
    res.json({message:'Admin Route'});
});

module.exports = adminRouter;