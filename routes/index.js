const combineRouter = require("express").Router()
const physicanAccount = require("./physicans/account.router")


combineRouter.use("/physician",physicanAccount)


module.exports = {combineRouter}