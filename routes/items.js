
const { getitems } = require("../controller/items/getitems");
const {setitems}=require("../controller/items/items");
const router = require("express").Router();

router.post("/setitems", setitems);
router.get("/getitems",getitems)
module.exports = router;