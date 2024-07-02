import { Container, Box, chakra, Text, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { MdEventAvailable, MdAssignment, MdLocalHospital, MdLibraryBooks } from 'react-icons/md';

interface IFeature {
  heading: string;
  content: string;
  icon: React.ElementType;
}

const features: IFeature[] = [
  {
    heading: 'Rendez-vous faciles',
    content:
      'Prenez facilement rendez-vous grâce à notre système de planification intuitif, disponible 24h/24 et 7j/7.',
    icon: MdEventAvailable,
  },
  {
    heading: 'Consultations rapides',
    content: 'Obtenez des consultations rapides avec des médecins expérimentés pour discuter de vos problèmes de santé.',
    icon: MdAssignment,
  },
  {
    heading: 'Soins médicaux experts',
    content:
      'Accédez à des soins médicaux personnalisés et experts de notre équipe de médecins et spécialistes expérimentés.',
    icon: MdLocalHospital,
  },
  {
    heading: 'Accéder aux ressources médicales',
    content: 'Accédez à une bibliothèque de ressources médicales, de FAQ et de conseils de santé.',
    icon: MdLibraryBooks,
  },
];

const AppointmentFeatures = () => {
  const headingColor = useColorModeValue("teal.600", "teal.200");
  const textColor = useColorModeValue("gray.500", "gray.300");
  const iconColor = useColorModeValue("blue.400", "teal.400");
  const titleSize = "4xl";
  const contentSize = "md";

  return (
    <Box py={{ base: 8, md: 16 }}>
      <Container maxW="6xl" p={{ base: 5, md: 10 }}>
        <chakra.h3 fontSize={titleSize} fontWeight="bold" mb={3} textAlign="center" color={headingColor}>
          Pourquoi nous choisir?
        </chakra.h3>
        <chakra.p fontSize={contentSize} color={textColor} mb={8} textAlign="center">
         Découvrez les avantages de nos services qui nous distinguent.
        </chakra.p>
        <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={16} mt={4} mb={8}>
          {features.map((feature, index) => (
            <Box key={index} textAlign="center">
              <Icon as={feature.icon} w={10} h={10} color={iconColor} />
              <chakra.h3 fontWeight="semibold" fontSize="2xl">
                {feature.heading}
              </chakra.h3>
              <Text fontSize={contentSize} color={textColor}>{feature.content}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AppointmentFeatures;

