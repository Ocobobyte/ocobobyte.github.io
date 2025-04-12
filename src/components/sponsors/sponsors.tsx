import { Badge, Button, Container, HStack, Image, Text, VStack } from '@chakra-ui/react';

import DinasgaBrand from '../../assets/Dinasga_Full_Color.svg';

export const Sponsors = () => {
  return (
    <Container
      fluid
      backgroundColor="green.500"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      padding={{ lg: '5rem', lgDown: '2.5rem 1.5rem' }}
      margin={0}
    >
      <HStack
        display="flex"
        justifyContent="space-between"
        gap={{ base: '2rem', md: '5rem' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <VStack
          flex={1.5}
          fontSize="16px"
          textAlign={{ base: 'center', md: 'left' }}
          alignItems={{ base: 'center', xl: 'flex-start' }}
          gap={{ base: '1rem' }}
        >
          <Badge
            borderRadius="4xl"
            backgroundColor="green.400"
            padding="0.5rem 1rem"
          >
            Sponsors
          </Badge>
          <Text
            color="zircon.100"
            fontStyle="italic"
            fontSize={{ base: '20px', md: '20px' }}
          >
            ¡Únete a nuestra red de patrocinadores y sé parte de impulsar el crecimiento y
            desarrollo de nuestra comunidad!
          </Text>
          <Button
            backgroundColor="green.500"
            border="2px solid"
            borderColor="zircon.100"
            borderRadius="4xl"
            color="green.100"
            width={{ base: '100%', md: 'auto' }}
          >
            Ser Patrocinador
          </Button>
        </VStack>
        <VStack
          display="flex"
          alignItems={{ base: 'center', md: 'flex-start' }}
          flex={3}
          gap={{ base: '1rem' }}
        >
          <Text
            color="zircon.100"
            textAlign={{ base: 'center', md: 'left' }}
            fontSize={{ base: '16px', md: '16px' }}
          >
            Respaldados por patrocinadores de todo el mundo.
          </Text>
          <Image
            src={DinasgaBrand}
            alt="Dinasga-Brand"
            height={{ base: '45px', md: '45px' }}
          />
        </VStack>
      </HStack>
    </Container>
  );
};
