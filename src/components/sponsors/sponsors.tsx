import './sponsors.css';

import { Badge, Button, Container, HStack, Image, Text, VStack } from '@chakra-ui/react';

import DinasgaBrand from '../../assets/Dinasga_Full_Color.svg';

export const Sponsors = () => {
  return (
    <Container
      fluid
      className="sponsors"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      padding={{ lg: '5rem', lgDown: '2.5rem 1.5rem' }}
      margin={0}
    >
      <HStack
        className="sponsors-contain"
        display="flex"
        justifyContent="space-between"
        gap={{ base: '2rem', md: '5rem' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <VStack
          flex={1.5}
          className="join-sponsor"
          fontSize="16px"
          textAlign={{ base: 'center', md: 'left' }}
          alignItems={{ base: 'center', xl: 'flex-start' }}
          gap={{ base: '1rem' }}
        >
          <Badge className="join-sponsor-badge" padding="0.5rem 1rem">
            Sponsors
          </Badge>
          <Text
            className="join-sponsor-text"
            fontStyle="italic"
            fontSize={{ base: '20px', md: '20px' }}
          >
            ¡Únete a nuestra red de patrocinadores y sé parte de impulsar el crecimiento y
            desarrollo de nuestra comunidad!
          </Text>
          <Button className="join-sponsors-button" width={{ base: '100%', md: 'auto' }}>
            Ser Patrocinador
          </Button>
        </VStack>
        <VStack
          className="sponsors-brands"
          display="flex"
          alignItems={{ base: 'center', md: 'flex-start' }}
          flex={3}
          gap={{ base: '1rem' }}
        >
          <Text
            className="sponsors-brands-text"
            textAlign={{ base: 'center', md: 'left' }}
            fontSize={{ base: '16px', md: '16px' }}
          >
            Respaldados por patrocinadores de todo el mundo.
          </Text>
          <Image
            src={DinasgaBrand}
            alt="Dinasga-Brand"
            height={{ base: '45px', md: '45px' }}
            // height={{ base: '259.9px', md: '480px' }}
          />
        </VStack>
      </HStack>
    </Container>
  );
};
