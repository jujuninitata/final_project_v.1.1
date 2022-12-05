import { Box, Button, Card, CardBody, Flex, Heading, HStack, Spacer, Stack, Tag, Text } from '@chakra-ui/react';
import React from 'react';

const status = {
  1: 'Permohonan Cuti Baru',
  2: 'Disetujui Supervisor',
  3: 'Ditolak Supervisor',
};

const colorScheme = {
  1: 'cyan',
  2: 'green',
  3: 'red',
};

const History = ({ data }) => {
  return (
    <Stack spacing={8}>
      {data &&
        data.map((item) => (
          <Card key={item.id}>
            <CardBody>
              <Stack spacing={4}>
                <Heading as='h4' size='md'>
                  {item.nama}
                </Heading>
                <Text>
                  {item.jeniscuti} dari tanggal {item.tanggalmulai.substring(0, 10)} -{' '}
                  {item.tanggalakhir.substring(0, 10)}
                </Text>
              </Stack>
              <Flex mt={8} alignItems='center'>
                <Box>
                  <Tag size={'lg'} key={'md'} variant='solid' colorScheme={colorScheme[item.status]}>
                    {status[item.status]}
                  </Tag>
                </Box>
                <Spacer />
                <Box>
                  <HStack>
                    <Button colorScheme='blue'>Detail</Button>
                  </HStack>
                </Box>
              </Flex>
            </CardBody>
          </Card>
        ))}
    </Stack>
  );
};

export default History;