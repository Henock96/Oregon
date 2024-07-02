import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Faq = () => {
  return (
    <Container maxW="container.lg" mt={16} mb={16}>
      <Box textAlign="center">
        <Heading as="h2" size="xl" mb={8} color={useColorModeValue('teal.600', 'teal.300')}>
        Questions fréquemment posées
        </Heading>
      </Box>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            Quels services offrez-vous?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color={useColorModeValue('gray.600', 'gray.300')}>
            Nous proposons une large gamme de services médicaux comprenant des 
            examens généraux, des consultations spécialisées, des diagnostics, 
            des vaccinations, etc. N&apos;hésitez pas à nous contacter pour des demandes spécifiques.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            Comment prendre rendez-vous ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color={useColorModeValue('gray.600', 'gray.300')}>
            Prendre rendez-vous est facile. Vous pouvez appeler notre réception au +1 (123) 456-7890 
            ou utiliser notre système de prise de rendez-vous en ligne sur notre site Internet.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            Des consultations virtuelles sont-elles disponibles ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color={useColorModeValue('gray.600', 'gray.300')}>
            Oui, nous proposons des consultations virtuelles pour certains problèmes médicaux.
             Veuillez nous contacter pour planifier un rendez-vous virtuel.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
             Quelles assurances acceptez-vous ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color={useColorModeValue('gray.600', 'gray.300')}>
            Nous acceptons une large gamme de régimes d&apos;assurance. 
            Veuillez nous fournir vos informations d&apos;assurance lors du processus 
            de prise de rendez-vous, et nous pourrons vérifier la couverture pour vous.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        {/* Add more FAQ items as needed */}
      </Accordion>
    </Container>
  );
};

export default Faq;

