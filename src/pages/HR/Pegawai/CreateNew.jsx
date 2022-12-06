import { Button, Heading, Input, Select, Table, TableContainer, Tbody, Td, Tr, useToast } from '@chakra-ui/react';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../components/Dashboard/Layout';
import { insertProfile } from '../../../services/profileService';
import { getAllAgama } from '../../../services/masterservice';

const CreateNewPegawai = () => {
  const navigate = useNavigate();
  const [tanggalLahir, setTanggalLahir] = useState(new Date());
  const [listAgama, setListAgama] = useState([]);

  useEffect(() => {
    getAllAgama().then(res => setListAgama(res.data));
  }, [])

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const toast = useToast({
    position: 'top',
  });
  const onSubmit = (value) => {
    const payload = {
      ...value,
      tanggalLahir,
    };
    insertProfile(payload)
      .then((res) => {
        console.log(res);
        toast({
          title: 'Success.',
          description: 'Pegawai berhasil dibuat.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        navigate('/hr/pegawai');
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: 'Error.',
          description: 'Terjadi kesalahan.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      });
  };
  return (
    <Layout>
      <Heading>Tambah Pegawai</Heading>
      <TableContainer mt={8} w={800}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Table variant='simple'>
            <Tbody>
              <Tr>
                <Td w={'40%'}>User ID</Td>
                <Td w={'1%'}>:</Td>
                <Td>
                  <Input type='text' {...register('userid', { required: true })} />
                </Td>
              </Tr>
              <Tr>
                <Td w={'40%'}>Nip</Td>
                <Td w={'1%'}>:</Td>
                <Td>
                  <Input type='text' {...register('nip', { required: true })} />
                </Td>
              </Tr>
              <Tr>
                <Td>Nama</Td>
                <Td>:</Td>
                <Td>
                  <Input type='text' {...register('nama', { required: true })} />
                </Td>
              </Tr>
              <Tr>
                <Td>Email</Td>
                <Td>:</Td>
                <Td>
                  <Input type='email' {...register('email', { required: true })} />
                </Td>
              </Tr>
              <Tr>
                <Td>Tempat Lahir</Td>
                <Td>:</Td>
                <Td>
                  <Input type='text' {...register('tempatlahir', { required: true })} />
                </Td>
              </Tr>
              <Tr>
                <Td>Tanggal Lahir</Td>
                <Td>:</Td>
                <Td>
                  <SingleDatepicker name='date-input' date={tanggalLahir} onDateChange={setTanggalLahir} />
                </Td>
              </Tr>
              <Tr>
                <Td>Jenis Kelamin</Td>
                <Td>:</Td>
                <Td>
                  <Select placeholder='Pilih jenis kelamin' {...register('jeniskelamin', { required: true })}>
                    <option value={1}>Laki-laki</option>
                    <option value={2}>Perempuan</option>
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>Nomor Telp</Td>
                <Td>:</Td>
                <Td>
                  <Input type='text' {...register('telp', { required: true })} />
                </Td>
              </Tr>
              <Tr>
                <Td>Status Pernikahan</Td>
                <Td>:</Td>
                <Td>
                  <Select placeholder='Pilih Status Pernikahan' {...register('statusnikah', { required: true })}>
                    <option value={1}>Menikah</option>
                    <option value={2}>Tidak menikah</option>
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>Agama</Td>
                <Td>:</Td>
                <Td>
                  <Select placeholder='Pilih Agama' {...register('agama', { required: true })}>
                    {/* <option value={1}>Islam</option>
                    <option value={2}>Kristen Protestan</option>
                    <option value={3}>Kristen Katolik</option>
                    <option value={4}>Hindu</option>
                    <option value={5}>Budha</option>
                    <option value={6}>Konghuchu</option> */}
                    {listAgama.map(item => (
                      <option key={item.id} value={item.kodeagama}>{item.agama}</option>
                    ))}
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>Role</Td>
                <Td>:</Td>
                <Td>
                  <Select placeholder='Pilih Role' {...register('roleId', { required: true })}>
                    <option value={1}>User</option>
                    <option value={2}>HR</option>
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>Unit Kerja</Td>
                <Td>:</Td>
                <Td>
                  <Select placeholder='Pilih Unit Kerja' {...register('kodeunit', { required: true })}>
                    <option value={1}>Divisi Human Capital</option>
                    <option value={2}>Divisi Information Technology</option>
                    <option value={3}>Divisi Umum</option>
                    <option value={4}>Divisi Hukum</option>
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>Jabatan</Td>
                <Td>:</Td>
                <Td>
                  <Select placeholder='Pilih Jabatan' {...register('jabatan', { required: true })}>
                    <option value={1}>Staff</option>
                    <option value={2}>Officer</option>
                    <option value={3}>Manager</option>
                    <option value={4}>Group Head</option>
                  </Select>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Button mt={4} colorScheme='green' type='submit'>
            Simpan
          </Button>
        </form>
      </TableContainer>
    </Layout>
  );
};

export default CreateNewPegawai;
