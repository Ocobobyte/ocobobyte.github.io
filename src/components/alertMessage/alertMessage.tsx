import './alertMessage.css';

import { Container, Heading, HStack } from '@chakra-ui/react';

export const AlertMessage = () => {
  return (
    <Container
      fluid
      className="alertMessage"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      padding={{ lg: '2rem 5rem', lgDown: '2.5rem 1.5rem' }}
      margin={0}
    >
      <HStack
        className="alertMessage-contain"
        display="flex"
        justifyContent="center"
        padding={'1.5rem'}
      >
        <Heading className="alertMessage-text" textAlign="center" fontSize="20px">
          ¿Quieres proponer/exponer una charla? Abre un issue en nuestro repositorio de Github con
          tu propuesta.
        </Heading>
      </HStack>
    </Container>
  );
};
