import './newEvents.css';

import { Container, Heading, HStack, Text, VStack } from '@chakra-ui/react';

import { EventsList } from './eventsList';

export const NewEvents = () => {
  const year = new Date().getFullYear();
  return (
    <Container
      fluid
      className="new-events"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      padding={{ lg: '5rem', lgDown: '2.5rem 1.5rem' }}
    >
      <VStack className="new-events-contain" gap={{ base: '2.5rem' }}>
        <VStack className="new-events-tittle" gap={{ base: '1rem' }}>
          <Heading
            className="schedule-tittle"
            fontWeight="bold"
            fontSize={{ base: '32px', md: '32px' }}
          >
            Calendario de Eventos {year}
          </Heading>
          <Text className="text-events" fontSize={{ base: '16px', md: '16px' }}>
            Descubre eventos inspiradores y educativos para la comunidad tecnológica. ¡Conéctate y
            aprende de expertos!
          </Text>
        </VStack>
        <HStack 
        width="100%" 
        className="new-events-list" 
        display="flex" 
        justifyContent="space-between"
        >
          <EventsList />
        </HStack>
      </VStack>
    </Container>
  );
};
