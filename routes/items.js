
const { getitems } = require("../controller/items/getitems");
const {setitems}=require("../controller/items/setitems");
const { updateitems } = require("../controller/items/updateitems");
const router = require("express").Router();

router.post("/setitems", setitems);
router.get("/getitems",getitems)
router.post("/updateitems/:id",updateitems)
module.exports = router;