const router = require("express").Router();
const {tambahagama,tambahjabatan,tambahunit,tambahprovinsi,tambahkota,tambahkecamatan, tambahkelurahan,getUnitByKodeunit,getAllAgama} = require("../controllers/masterController");
router.post("/tambahagama", tambahagama);
router.post("/tambahjabatan", tambahjabatan);
router.post("/tambahunit", tambahunit);
router.post("/tambahprovinsi", tambahprovinsi);
router.post("/tambahkota", tambahkota);
router.post("/tambahkecamatan",tambahkecamatan);
router.post("/tambahkelurahan",tambahkelurahan);
router.get("/agama", getAllAgama);



module.exports = router;