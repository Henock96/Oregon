import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Text,
} from '@chakra-ui/react';

const CalorieCalculator = () => {
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [activityLevel, setActivityLevel] = useState<
    'sedentary' | 'lightlyActive' | 'moderatelyActive' | 'veryActive'
  >('sedentary');
  const [calories, setCalories] = useState<number | null>(null);

  const calculateCalories = () => {
    // Convert input values to numbers
    const parsedAge = parseFloat(age);
    const parsedWeight = parseFloat(weight);
    const parsedHeight = parseFloat(height);

    // Constants for calculating calories
    const maleCalorieConstant = 66.5;
    const femaleCalorieConstant = 655.1;
    const weightConstant = 13.75;
    const heightConstant = 5.003;
    const ageConstant = 6.75;

    // Calculate BMR (Basal Metabolic Rate)
    let bmr = 0;
    if (gender === 'male') {
      bmr =
        maleCalorieConstant +
        weightConstant * parsedWeight +
        heightConstant * parsedHeight -
        ageConstant * parsedAge;
    } else {
      bmr =
        femaleCalorieConstant +
        weightConstant * parsedWeight +
        heightConstant * parsedHeight -
        ageConstant * parsedAge;
    }

    // Calculate total calories based on activity level
    let activityFactor = 1.2; // Sedentary
    if (activityLevel === 'lightlyActive') {
      activityFactor = 1.375;
    } else if (activityLevel === 'moderatelyActive') {
      activityFactor = 1.55;
    } else if (activityLevel === 'veryActive') {
      activityFactor = 1.725;
    }

    const totalCalories = Math.round(bmr * activityFactor);

    setCalories(totalCalories);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Heading as="h3" size="md" mb={2}>
        Calculateur de calories
      </Heading>
      <FormControl mb={3}>
        <FormLabel>Age</FormLabel>
        <Input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Genre</FormLabel>
        <Select
          value={gender}
          onChange={(e) => setGender(e.target.value as 'male' | 'female')}
        >
          <option value="male">Homme</option>
          <option value="female">Femme</option>
        </Select>
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Poids (kg)</FormLabel>
        <Input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Taille (cm)</FormLabel>
        <Input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Niveau d&apos;activité</FormLabel>
        <Select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value as any)}
        >
          <option value="sedentary">Sédentaire</option>
          <option value="lightlyActive">Légèrement actif</option>
          <option value="moderatelyActive">Modérément actif</option>
          <option value="veryActive">Très actif</option>
        </Select>
      </FormControl>
      <Button onClick={calculateCalories}>Calculer les calories</Button>
      {calories !== null && (
        <Text mt={3}>Calories quotidiennes estimées: {calories}</Text>
      )}
    </Box>
  );
};

export default CalorieCalculator;

