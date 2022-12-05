const db = require("./../models");

const tambahagama = async (req, res) =>
{
    const { kodeagama,agama,status} = req.body;
    const resAdd = await db.agama.create({kodeagama,agama,status});
    return res.status(201).json({
        message: "register data agama successfully!",
        data: resAdd,
    })
}
const tambahjabatan = async (req, res) =>
{
    const { kodejabatan,namajabatan,status} = req.body;
    const resAdd = await db.jabatan.create({kodejabatan,namajabatan,status});
    return res.status(201).json({
        message: "register data agama successfully!",
        data: resAdd,
    })
}

module.exports = {tambahagama,tambahjabatan}