import React from 'react';
import { useRouter } from 'next/router';
import { Container, VStack, Text, Heading, Box, Avatar, Button, Link } from '@chakra-ui/react';
import { FaCalendarAlt } from 'react-icons/fa';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const router = useRouter();

  const handleBookAppointment = () => {
    router.push('/#BookAppointment'); // Navigate to the contact page
  };

  return (
    <>
      <NavBar />
      <Container maxW="3xl" mt={10} mb={10} centerContent>
        <VStack spacing={10} align="stretch">
          <Heading size="xl" textAlign="center" color="gray.700">
            A Propos de Nous Dr. Gilbert
          </Heading>
          <Box>
            <Avatar size="xl" name="Dr. Smith" src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" mb={4} />
            <Text fontSize="lg" color="gray.600">
             Le Docteur Gilbert Daniel est un expert renommé en médecine pédiatrique avec plus de 20 ans d&apos;expérience.
             Son dévouement aux soins et au bien-être des patients lui a valu une 
             réputation de prestataire de soins de santé de confiance.
            </Text>
            <Text fontSize="lg" color="gray.600" mt={4}>
              Ici à la Clinique Oregon, nous nous engageons à fournir des services 
            médicaux personnalisés et empreints de compassion à nos patients. 
            Nos installations ultramodernes et notre personnel médical expérimenté 
            garantissent que vous recevez des soins de la plus haute qualité.
            </Text>
            <Button
              leftIcon={<FaCalendarAlt />}
              colorScheme="teal"
              variant="solid"
              mt={6}
              alignSelf="center"
              onClick={handleBookAppointment}
            >
              <Link href='/#BookAppointment'>
                Prendre rendez-vous
              </Link>
            </Button>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;

