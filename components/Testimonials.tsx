import React from 'react';
import {
  Container,
  Box,
  chakra,
  Flex,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react';

interface TestimonialAttributes {
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: TestimonialAttributes[] = [
  {
    name: 'Amanda Johnson',
    position: 'Chirurgien orthopédique',
    company: 'Clinique de santé osseuse',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: `Je pratique la médecine depuis des années et je dois dire que le niveau d'expertise et de soins prodigués dans cette clinique est exceptionnel. L'équipe ici se consacre à améliorer la vie des patients grâce à des traitements efficaces et des soins empreints de compassion.`
  },
  {
    name: 'Sophia Nguyen',
    position: 'Dermatologue',
    company: 'Clinique de soins de la peau',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: `En tant que dermatologue, je suis fier d'être associé à cette clinique. Les techniques avancées et les traitements personnalisés proposés ici ont eu un impact significatif sur la santé cutanée et la confiance de nos patients. C'est vraiment gratifiant de voir les transformations positives.`
  },
  {
    name: 'Michael Patel',
    position: 'Gastro-entérologue',
    company: 'Centre de bien-être digestif',
    image: 'https://images.pexels.com/photos/2770600/pexels-photo-2770600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: `Les patients viennent chez nous pour soulager leurs problèmes gastro-intestinaux et je suis fier de faire partie d'une équipe qui prodigue des soins exceptionnels. L'approche globale du diagnostic et du traitement garantit que nos patients reçoivent les meilleurs résultats possibles.`
  },
  {
    name: 'Emily Turner',
    position: 'Médecin de famille',
    company: 'Clinique de vie saine',
    image: 'https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: `Promouvoir la santé et le bien-être des familles est ma passion. Dans cette clinique, nous fournissons des services de santé complets axés sur les soins préventifs et le maintien d’un mode de vie sain. C'est un privilège de faire partie du parcours de bien-être de nos patients.`
  }
];

const Testimonials = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('#eff5f1', '#252d3a');
  const blurBgColor = useColorModeValue('green.200', 'gray.600');

  return (
    <Container maxW="5xl" p={6}>
      <Flex justify="center" mb={8} direction="column" alignItems="center">
        <chakra.h2 fontSize="3xl" fontWeight="bold" mb={2} color="teal.500">
        Témoignages de patients
        </chakra.h2>
        <chakra.p
          color="gray.500"
          fontSize="lg"
          textAlign="center"
          mt={3}
        >
          Découvrez ce que nos patients ont à dire sur leur expérience avec notre équipe soignante dévouée.
        </chakra.p>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={8} mt={12} mb={8}>
        {testimonials.map((obj, index) => (
          <Stack key={index} direction="column" mb={5} spacing={0} alignItems="center">
            <Stack
              maxW="345px"
              spacing={5}
              mb={10}
              boxShadow="lg"
              rounded="md"
              p={6}
              pos="relative"
              bg={bgColor}
              transform="rotate(-4deg)"
              _after={{
                content: `""`,
                borderColor: `${borderColor} transparent`,
                borderStyle: 'solid',
                borderWidth: '25px 30px 0 0',
                position: 'absolute',
                bottom: '-25px',
                left: '40px',
                display: 'block'
              }}
            >
              <Box
                position="relative"
                rounded="md"
                transform="rotate(4deg)"
                _before={{
                  content: '""',
                  bg: blurBgColor,
                  filter: 'blur(55px)',
                  position: 'absolute',
                  top: '-0.15rem',
                  right: '-0.15rem',
                  bottom: '-0.15rem',
                  left: '-0.15rem',
                  borderRadius: '5px'
                }}
              >
                <chakra.p position="relative" fontSize="lg">{obj.content}</chakra.p>
              </Box>
            </Stack>
            <Stack spacing={1} p={2} justify="center" alignItems="center">
              <Avatar
                size="xl"
                name={obj.name}
                src={obj.image}
              />
              <Box textAlign="center">
                <Text fontWeight="bold" fontSize="xl">
                  {obj.name}
                </Text>
                <Text fontWeight="medium" fontSize="md" color="teal.500">
                  {obj.position}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {obj.company}
                </Text>
              </Box>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Testimonials;

