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
import {IoMdMedkit, IoIosMedkit, IoIosHeart, IoIosBody } from 'react-icons/io';
import { PiHeartbeatLight } from "react-icons/pi";
import { FaChildren } from "react-icons/fa6";
import { RiWomenFill } from "react-icons/ri";

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Services = () => {
  const { colorMode } = useColorMode();

  const services = [
    {
      title: 'Cardiologie',
      description: 'Conseils médicaux experts et consultations pour vos problèmes de santé cardiovasculaire. Nos spécialistes sont là pour diagnostiquer, traiter et prévenir les maladies cardiaques.',
      icon: <PiHeartbeatLight size="2em" />,
    },
    {
      title: 'Dermatologie',
      description: 'Soins dermatologiques complets pour tous les types de peau. Nous offrons des consultations et des traitements pour les affections cutanées, les allergies et bien plus encore.',
      icon: <IoMdMedkit size="2em" />,
    },
    {
      title: 'Pédiatrie',
      description: 'Des soins attentionnés et spécialisés pour vos enfants. Nos pédiatres assurent le suivi de la croissance, le développement et le bien-être des plus jeunes.',
      icon: <FaChildren size="2em" />,
    },
    {
      title: 'ORL',
      description: 'Évaluation et traitement des troubles de l’oreille, du nez et de la gorge. Nos experts ORL vous accompagnent pour améliorer votre qualité de vie.',
      icon: <IoIosBody size="2em" />,
    },
    {
      title: 'Gynécologie',
      description: 'Soins complets et personnalisés pour la santé féminine. Nous offrons des consultations, des dépistages et des traitements pour diverses affections gynécologiques.',
      icon: <RiWomenFill size="2em" />,
    },
    {
      title: 'Obstétrique',
      description: 'Accompagnement et suivi de votre grossesse par des spécialistes dévoués. Nous sommes à vos côtés à chaque étape, de la conception à la naissance.',
      icon: <IoIosMedkit size="2em" />,
    },
    {
      title: 'Colposcopie',
      description: 'Examen minutieux du col de l’utérus pour détecter et prévenir les anomalies. Notre équipe assure des soins doux et professionnels.',
      icon: <IoIosHeart size="2em" />,
    },
    {
      title: 'Échographie 2D 3D 4D',
      description: 'Imagerie médicale avancée pour des diagnostics précis. Nos échographies en 2D, 3D et 4D vous offrent des vues détaillées pour mieux comprendre votre santé.',
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

