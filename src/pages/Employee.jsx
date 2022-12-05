import { Heading, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

import Layout from '../components/Dashboard/Layout';

const Employee = () => {
  return (
    <Layout>
      <Heading>Informasi Umum</Heading>
      <TableContainer>
        <Table variant='simple'>
          <Tbody>
            <Tr>
              <Td w={'40%'}>Nip</Td>
              <Td w={'1%'}>:</Td>
              <Td>15.92.9873</Td>
            </Tr>
            <Tr>
              <Td>Nama</Td>
              <Td>:</Td>
              <Td>Junita Tri Jayanti</Td>
            </Tr>
            <Tr>
              <Td>Email</Td>
              <Td>:</Td>
              <Td>junita@gmail.com</Td>
            </Tr>
            <Tr>
              <Td>Tempat Lahir</Td>
              <Td>:</Td>
              <Td>Bogor</Td>
            </Tr>
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default Employee;
