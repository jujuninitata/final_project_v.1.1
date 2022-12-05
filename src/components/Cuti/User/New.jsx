import { Box, Button, Card, CardBody, Flex, Heading, HStack, Spacer, Stack, Tag, Text } from '@chakra-ui/react';
import React from 'react';

const New = ({ data }) => {
  return (
    <Stack spacing={8}>
      {data.map((item) => (
        <Card key={item.id}>
          <CardBody>
            <Stack spacing={4}>
              <Heading as='h4' size='md'>
                {item.jeniscuti}
              </Heading>
              <Text>{item.alasan}</Text>
            </Stack>
            <Flex mt={8} alignItems='center'>
              <Box>
                <Tag size={'lg'} key={'md'} variant='solid' colorScheme='cyan'>
                  Waiting for Approval
                </Tag>
              </Box>
              <Spacer />
              <Box>
                <HStack>
                  <Button colorScheme='red'>Delete</Button>
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

export default New;
