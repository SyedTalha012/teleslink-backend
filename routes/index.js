const combineRouter = require("express").Router()
const physicanAccount = require("./physicans/account.router")
const cTemsAccount = require("./ctems/account.router")
const adminAccount = require("./admin/account.router")



combineRouter.use("/physician",physicanAccount)
combineRouter.use("/ctems",cTemsAccount)
combineRouter.use("/admin",adminAccount)



module.exports = {combineRouter}