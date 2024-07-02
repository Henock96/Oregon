import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  useColorMode,
  Button,
  Link,
} from '@chakra-ui/react';
import { IoMdMedkit, IoIosMedkit, IoIosHeart, IoIosBody } from 'react-icons/io';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Services = () => {
  const { colorMode } = useColorMode();

  const services = [
    {
      title: 'Cardiologie',
      description: 'Conseils médicaux experts et consultation pour vos problèmes de santé.',
      icon: <IoMdMedkit size="2em" />,
    },
    {
      title: 'Dermatologie',
      description: 'Des tests de diagnostic complets pour évaluer avec précision votre état de santé.',
      icon: <IoIosMedkit size="2em" />,
    },
    {
      title: 'Pediatrie',
      description: 'Plans de traitement sur mesure pour diverses conditions médicales.',
      icon: <IoIosHeart size="2em" />,
    },
    {
      title: 'ORL',
      description: 'Conseils et services pour maintenir une bonne santé et prévenir les maladies.',
      icon: <IoIosBody size="2em" />,
    },
    {
      title: 'Gynecologie',
      description: 'Conseils médicaux experts et consultation pour vos problèmes de santé.',
      icon: <IoMdMedkit size="2em" />,
    },
    {
      title: 'Obstetrique',
      description: 'Des tests de diagnostic complets pour évaluer avec précision votre état de santé.',
      icon: <IoIosMedkit size="2em" />,
    },
    {
      title: 'Colposcopie',
      description: 'Plans de traitement sur mesure pour diverses conditions médicales.',
      icon: <IoIosHeart size="2em" />,
    },
    {
      title: 'Echographie',
      description: 'Conseils et services pour maintenir une bonne santé et prévenir les maladies.',
      icon: <IoIosBody size="2em" />,
    },
    {
      title: '2D 3D 4D',
      description: 'Conseils et services pour maintenir une bonne santé et prévenir les maladies.',
      icon: <IoIosBody size="2em" />,
    },
  ];

  return (
    <Box>
      <NavBar />
      <Box py={16} mr={16} ml={16}>
        <Flex direction="column" align="center" mb={10}>
          <Heading size="xl" color={colorMode === 'light' ? 'gray.700' : 'white'}>
            Nos Services
          </Heading>
          <Text mt={2} color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
           Des services de santé de qualité adaptés à vos besoins.
          </Text>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {services.map((service) => (
            <Box
              key={service.title}
              bg={colorMode === 'light' ? 'white' : 'gray.700'}
              p={6}
              
              borderRadius="lg"
              borderWidth="1px"
              borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
            >
              <Flex justify="center" mb={4}>
                {service.icon}
              </Flex>
              <Heading size="md" mb={2} color={colorMode === 'light' ? 'gray.800' : 'white'}>
                {service.title}
              </Heading>
              <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                {service.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
        <Flex justify="center" mt={8}>
          <Button
            as={Link}
            href="/#BookAppointment" 
            colorScheme="teal"
            size="lg"
          >
            Prendre rendez-vous
          </Button>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default Services;

