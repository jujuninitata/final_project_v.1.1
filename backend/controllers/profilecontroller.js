const db = require('./../models');

const tambahProfile = async (req, res) => {
  const {
    userid,
    nip,
    email,
    nama,
    tempatlahir,
    tanggallahir,
    jeniskelamin,
    telp,
    kodeunit,
    jabatan,
    statusnikah,
    agama,
    alamat,
    kodeprovinsi,
    kodekota,
    kodekecamatan,
    kodekelurahan,
    kodepos,
    rt,
    rw,
    roleId,
  } = req.body;
  const resAdd = await db.profile.create({
    userid,
    nip,
    email,
    nama,
    tempatlahir,
    tanggallahir,
    jeniskelamin,
    telp,
    kodeunit,
    jabatan,
    statusnikah,
    agama,
    alamat,
    kodeprovinsi,
    kodekota,
    kodekecamatan,
    kodekelurahan,
    kodepos,
    rt,
    rw,
    roleId,
  });
  //create jatahcuti
  const resAddJatahCuti = await db.jatahcuti.create({
    userid: resAdd.userid,
    //get current year
    periode: new Date().getFullYear(),
    kuota: 12,
    cutidigunakan: 0,
    sisacuti: 12,
  });
  return res.status(201).json({
    message: 'register data successfully!',
    data: resAdd,
  });
};

const getAllProfile = async (req, res) => {
  const resGet = await db.profile.findAll();
  return res.status(200).json({
    message: 'All data',
    data: resGet,
  });
};

const getProfileById = async (req, res) => {
  const { id } = req.params;
  const resGet = await db.profile.findOne({
    where: {
      id: id,
    },
  });
  return res.status(200).json({
    message: 'Data by id',
    data: resGet,
  });
};

module.exports = { tambahProfile, getAllProfile, getProfileById };
