import { Box, Container, Heading, Grid, GridItem, Divider, Text, Flex } from '@chakra-ui/react';
import { FaCalculator } from 'react-icons/fa';
import { IoMdFlower, IoIosMedkit, IoIosHeart, IoIosWater, IoIosBody } from 'react-icons/io';
import { GiBabyBottle, GiWeightLiftingUp, GiSmokingOrb } from 'react-icons/gi';
import { AiOutlineRise, AiOutlinePercentage } from 'react-icons/ai';
import type { NextPage } from 'next';

// Import all calculator components
import NavBar from '../components/NavBar';
import BmiCalculator from '../components/calculators/BmiCalculator';
import CalorieCalculator from '../components/calculators/CalorieCalculator';
import PregnancyDueDateCalculator from '../components/calculators/PregnancyDueDateCalculator';
import MedicationDosageCalculator from '../components/calculators/MedicationDosageCalculator';
import HeartRateCalculator from '../components/calculators/HeartRateCalculator';
import BloodPressureCalculator from '../components/calculators/BloodPressureCalculator';
import IdealBodyWeightCalculator from '../components/calculators/IdealBodyWeightCalculator';
import OvulationCalculator from '../components/calculators/OvulationCalculator';
import Footer from '../components/Footer';

const Calculator: NextPage = () => {
  return (
    <div>
      <main>
        <Box as="main" p={6}>
          <NavBar />
          <Container maxW="container.md" mt={16} mb={16}>
            <Heading as="h2" size="xl" mb={4} textAlign="center" color="teal.400">
              Calculatrices médicales
            </Heading>
            <Text fontSize="lg" textAlign="center" mb={4}>
              Explorez une variété de calculateurs médicaux et de santé.
            </Text>
            <Divider mb={8} />
            <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
              <CalculatorCard title="Calculateur d'IMC" icon={<FaCalculator />} component={<BmiCalculator />} />
              <CalculatorCard title="Calculateur de Calories" icon={<IoMdFlower />} component={<CalorieCalculator />} />
              <CalculatorCard title="Calculateur de Date d'échéance de Grossesse" icon={<GiBabyBottle />} component={<PregnancyDueDateCalculator />} />
              <CalculatorCard title="Calculateur de Dosage de Médicaments" icon={<IoIosMedkit />} component={<MedicationDosageCalculator />} />
              <CalculatorCard title="Calculateur de Fréquence Cardiaque" icon={<IoIosHeart />} component={<HeartRateCalculator />} />
              <CalculatorCard title="Calculateur de Tension Artérielle" icon={<IoIosWater />} component={<BloodPressureCalculator />} />
              <CalculatorCard title="Calculateur de Poids Corporel Idéal" icon={<IoIosBody />} component={<IdealBodyWeightCalculator />} />
              <CalculatorCard title="Calculateur d'Ovulation" icon={<IoMdFlower />} component={<OvulationCalculator />} />
              
            </Grid>
          </Container>
          <Footer />
        </Box>
      </main>
    </div>
  );
};

interface CalculatorCardProps {
  title: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({ title, icon, component }) => (
  <Box boxShadow="md" p={4} borderRadius="md" bg="teal">
    <Flex alignItems="center" justifyContent="center" fontSize="2xl" mb={3}>
      {icon}
    </Flex>
    <Text fontWeight="semibold" textAlign="center" mb={2}>
      {title}
    </Text>
    {component}
  </Box>
);

export default Calculator;

