var router = require("express").Router();
const categoryController = require("../../controller/category.controller");
const { verifyToken } = require("../../middleware/auth");

router.get('/category', categoryController.getCategory);


module.exports = router;