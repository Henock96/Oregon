import { useState } from 'react';
import { Container, Box, Heading, Text, Flex, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import { FaUser, FaCalendar, FaStethoscope } from 'react-icons/fa';

const DoctorAppointmentForm = () => {
  const [patientName, setPatientName] = useState('');
  const [appointmentDateTime, setAppointmentDateTime] = useState('');
  const [appointmentReason, setAppointmentReason] = useState('');

  const handleScheduleAppointment = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sender-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ patientName, appointmentDateTime, appointmentReason }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        alert('Appointment scheduling faile. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('Appointment scheduling failed. Please try again later.');
    }
  };

  return (
    <Container maxW="lg" p={{ base: 5, md: 10 }}>
      <Heading as="h2" size="lg" mb="2" fontWeight="bold" textAlign="left">
        Planifier un rendez-vous
      </Heading>
      <Text fontSize="md" color="teal.500" mb="6" textAlign="left">
       Votre santé est notre priorité. Veuillez remplir les détails ci-dessous pour planifier votre rendez-vous.
      </Text>
      <Box as="form" borderRadius="lg" boxShadow="lg" p="8" mx="auto" maxW="md" onSubmit={handleScheduleAppointment}>
        <FormControl mb="4">
          <Flex align="center">
            <FormLabel htmlFor="patientName">
              <Box as={FaUser} mr="2" />
              Nom du patient
            </FormLabel>
          </Flex>
          <Input
            type="text"
            id="patientName"
            placeholder="Entrez le nom du patient"
            size="lg"
            focusBorderColor="teal.400"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </FormControl>
        <FormControl mb="4">
          <Flex align="center">
            <FormLabel htmlFor="appointmentDateTime">
              <Box as={FaCalendar} mr="2" />
              Date et heure du rendez-vous
            </FormLabel>
          </Flex>
          <Input
            type="datetime-local"
            id="appointmentDateTime"
            size="lg"
            focusBorderColor="teal.400"
            value={appointmentDateTime}
            onChange={(e) => setAppointmentDateTime(e.target.value)}
          />
        </FormControl>
        <FormControl mb="4">
          <Flex align="center">
            <FormLabel htmlFor="appointmentReason">
              <Box as={FaStethoscope} mr="2" />
              Raison du rendez vous
            </FormLabel>
          </Flex>
          <Textarea
            id="appointmentReason"
            placeholder="Entrez le motif du rendez-vous"
            size="lg"
            focusBorderColor="teal.400"
            value={appointmentReason}
            onChange={(e) => setAppointmentReason(e.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          onClick={(e) => {handleScheduleAppointment}}
          colorScheme="teal"
          size="lg"
          mt="4"
          w="100%"
        >
          Rendez-vous
        </Button>
        <Text mt="2" fontSize="sm" textAlign="center">
          Nous respectons votre vie privée. Votre information est en sécurité avec nous.
        </Text>
      </Box>
    </Container>
  );
};

export default DoctorAppointmentForm;

