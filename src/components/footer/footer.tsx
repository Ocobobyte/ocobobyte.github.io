import './footer.css';

import { Container, HStack, Image, Link, Span } from '@chakra-ui/react';

import facebookIcon from '@/assets/facebook.svg';
import githubIcon from '@/assets/github.svg';
import twitterIcon from '@/assets/twitter.svg';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container
      fluid
      as="footer"
      className="footer"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={{ lg: '1rem 1rem', lgDown: '2rem' }}
      gap={{ lg: '2rem', lgDown: '4' }}
    >
      <HStack
        className="footer-icons"
        justify="center"
        flexDirection="row"
        gap={{ lg: '16px', lgDown: '4' }}
      >
        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src={facebookIcon} alt="Facebook" boxSize="24px" />
          {/* <FacebookIcon/> */}
        </Link>
        <Link href="https://www.github.com" target="_blank" rel="noopener noreferrer">
          <Image src={githubIcon} alt="Github" boxSize="24px" />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <Image src={twitterIcon} alt="Twitter" boxSize="24px" />
        </Link>
      </HStack>
      <Span fontStyle="italic" fontSize="16px" textAlign="center">
        © ocobobyte {year}. All Rights Reserved.
      </Span>
    </Container>
  );
};
