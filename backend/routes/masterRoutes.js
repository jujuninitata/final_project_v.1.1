const router = require("express").Router();
const {tambahagama,tambahjabatan} = require("../controllers/masterController");
router.post("/tambahagama", tambahagama);
router.post("/tambahjabatan", tambahjabatan);


module.exports = router;