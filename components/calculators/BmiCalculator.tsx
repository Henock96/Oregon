import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue) || heightValue === 0) {
      setMessage('Veuillez saisir des valeurs valides.');
      setBmiResult('');
      return;
    }

    const bmi = weightValue / Math.pow(heightValue / 100, 2);
    const bmiRounded = bmi.toFixed(2);

    let bmiMessage = '';
    if (bmi < 18.5) bmiMessage = 'Insuffisance Pondérale (maigreur)';
    else if (bmi < 24.9) bmiMessage = 'Corpulence normale';
    else if (bmi < 29.9) bmiMessage = 'En surpoids';
    else if (bmi < 34.9) bmiMessage = 'Obésité modérée';
    else if (bmi < 39.9) bmiMessage = 'Obésité sévèvre';
    else bmiMessage = 'Obèse morbide';

    setMessage('');
    setBmiResult(`Votre IMC: ${bmiRounded}`);
    setMessage(`Catégorie IMC: ${bmiMessage}`);
  };

  return (
    <Container maxW="container.md" mt={16} mb={16}>
      <Box textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          IMC Calculateur
        </Heading>
        <Text mb={4}>Calculez votre Indice de Masse Corporelle (IMC)</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Input
          type="number"
          placeholder="Poids (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          mb={4}
        />
        <Input
          type="number"
          placeholder="Taille (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          mb={4}
        />
        <Button onClick={calculateBMI}>
        Calculer l&apos;IMC
        </Button>
        {bmiResult && <Text mt={4}>{bmiResult}</Text>}
        {message && <Text color="red.500" mt={2}>{message}</Text>}
      </Box>
    </Container>
  );
};

export default BmiCalculator;

