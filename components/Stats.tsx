import * as React from 'react';
import { Container, Text, SimpleGrid, Box, chakra, Stack, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import { FaUsers, FaTwitter } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';

interface StatData {
  label: string;
  score: string;
  icon: React.ReactElement;
}

const statData: StatData[] = [
  {
    label: 'Rendez-vous hebdomadaires',
    score: '> 500',
    icon: <BsPerson size={24} color="#FF5733" />,
  },
  {
    label: 'Avis positifs',
    score: '4.9/5',
    icon: <AiFillStar size={24} color="#f2de76" />,
  },
  {
    label: 'Patients satisfaits',
    score: ' > 11.2K',
    icon: <FaUsers size={24} color="#68d391" />,
  },
];

const Stats = () => {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const tealColor = useColorModeValue("teal.600", "teal.500");

  return (
    <Container maxW="5xl" p={{ base: 4, sm: 10 }}>
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
        <Stack spacing={4}>
          <chakra.h1
            fontSize="2xl"
            lineHeight={1.2}
            fontWeight="bold"
            color={tealColor}
          >
            Nos réalisations
          </chakra.h1>
          <Text fontSize="md" color={textColor} maxW="480px">
          Nous sommes extrêmement fiers de notre parcours visant à fournir 
          des services de santé de premier ordre et à transformer des vies. 
          Notre engagement envers l’excellence et la satisfaction des patients 
          est le moteur de notre succès.
          </Text>
        </Stack>
        <SimpleGrid columns={2} spacing={6} pt={8} pl={{ base: 0, md: 10 }}>
          {statData.map((data, index) => (
            <Stack
              key={index}
              p={4}
              border="1px solid"
              borderColor={textColor}
              borderRadius="md"
              align="center"
              spacing={1}
              bg={tealColor}
            >
              <Box fontSize="2xl" fontWeight="bold" color={textColor}>
                {data.score}
              </Box>
              <Box fontSize="lg" color={tealColor}>
                {data.icon}
              </Box>
              <Text fontSize="md" color={textColor}>
                {data.label}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default Stats;

