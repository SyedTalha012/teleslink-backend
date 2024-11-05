const combineRouter = require("express").Router()
const physicanAccount = require("./physicans/account.router")
const cTemsAccount = require("./ctems/account.router")


combineRouter.use("/physician",physicanAccount)
combineRouter.use("/ctems",cTemsAccount)



module.exports = {combineRouter}