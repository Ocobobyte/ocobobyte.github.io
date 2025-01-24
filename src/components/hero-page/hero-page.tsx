import './hero-page.css';

import { Container, Heading, HStack, Image, Span, Text, VStack } from '@chakra-ui/react';

import heroPageMan from '../../assets/hero_page_man.png';
import heroPageWoman from '../../assets/hero_page_woman.png';

export const HeroPage = () => {
  const getHeroImage = () => {
    const numRand = Math.round(Math.random() * 10);
    if (numRand % 2 === 0) {
      return heroPageMan;
    } else {
      return heroPageWoman;
    }
  };

  return (
    <Container
      fluid
      className="hero-page"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      padding={{ lg: '5rem', lgDown: '2.5rem 1.5rem' }}
      margin={0}
    >
      <HStack
        className="hero-page-content"
        display="flex"
        justifyContent="space-between"
        flexDirection={{ base: 'column', xl: 'row' }}
        gap={{ base: '2rem' }}
        alignItems="center"
      >
        <VStack
          className="description"
          gap={{ base: '2rem', md: '4rem' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
        >
          <Heading
            className="heading-large"
            fontStyle="italic"
            fontSize={{ base: '32px', md: '64px' }}
            textAlign={{ base: 'center', md: 'left' }}
            lineHeight="1"
          >
            Comunidad de desarrolladores en Ibagué
          </Heading>
          <Text
            className="paragraph-large"
            fontSize="16px"
            textAlign={{ base: 'center', md: 'left' }}
          >
            ¡Únete a <Span fontWeight="bold">ocobobyte</Span> para aprender y compartir sobre
            diversos lenguajes de programación en comunidad! Somos un espacio gratuito y abierto
            donde seguimos un Código de Conducta para garantizar un ambiente inclusivo y libre de
            acoso. Al unirte, aceptas nuestros términos y condiciones. Te esperamos en un ambiente
            informal y acogedor, donde apreciamos cualquier colaboración.
          </Text>
        </VStack>
        <Image
          src={getHeroImage()}
          alt="Hero-page-man"
          width={{ base: '320px', md: '591px' }}
          height={{ base: '259.9px', md: '480px' }}
        />
      </HStack>
    </Container>
  );
};
