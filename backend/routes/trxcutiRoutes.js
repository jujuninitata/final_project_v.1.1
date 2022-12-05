const router = require('express').Router();
const {
  insertTrxCuti,
  getAllTrxCuti,
  getTrxCutiById,
  updateTrxCuti,
  deleteTrxCuti,
  getTrxCutiByUserId,
  getTrxCutiByCutiId,
  approveTrxCuti,
  rejectCuti,
} = require('./../controllers/trxCutiController');

router.post('/', insertTrxCuti);
router.get('/', getAllTrxCuti);
router.get('/detail/:cutiId', getTrxCutiByCutiId);
router.get('/:id', getTrxCutiById);
router.get('/user/:userid', getTrxCutiByUserId);
router.put('/:id', updateTrxCuti);
router.delete('/:id', deleteTrxCuti);
router.put('/approve/:idcuti', approveTrxCuti);
router.put('/reject/:idcuti', rejectCuti);

module.exports = router;
