import React, { useState } from 'react';
import { Box, Input, Button, Text } from '@chakra-ui/react';

const BloodPressureCalculator: React.FC = () => {
  const [systolic, setSystolic] = useState<number | null>(null);
  const [diastolic, setDiastolic] = useState<number | null>(null);
  const [classification, setClassification] = useState<string | null>(null);

  const classifyBloodPressure = () => {
    if (systolic && diastolic) {
      if (systolic < 90 || diastolic < 60) {
        setClassification('Hypotension (Hypotension Artérielle)');
      } else if (systolic >= 90 && systolic <= 120 && diastolic >= 60 && diastolic <= 80) {
        setClassification('Pression Artérielle Normale');
      } else if (systolic > 120 && systolic <= 129 && diastolic <= 80) {
        setClassification('Pression Artérielle élevée');
      } else if ((systolic >= 130 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)) {
        setClassification('Hypertension de stade 1');
      } else if (systolic >= 140 || diastolic >= 90) {
        setClassification('Hypertension de stade 2');
      }
    }
  };

  return (
    <Box p={4}>
      <Input
        type="number"
        placeholder="Tension Artérielle Systolique"
        value={systolic || ''}
        onChange={(e) => setSystolic(parseFloat(e.target.value))}
      />
      <Input
        type="number"
        placeholder="Pression Sanguine Diastolique"
        value={diastolic || ''}
        onChange={(e) => setDiastolic(parseFloat(e.target.value))}
      />
      <Button mt={4} onClick={classifyBloodPressure}>
      Classer la Pression Artérielle
      </Button>
      {classification && (
        <Text mt={4}>
          Classification de la Pression Artérielle: {classification}
        </Text>
      )}
    </Box>
  );
};

export default BloodPressureCalculator;

