import './navbar.css';

import {
  Box,
  Container,
  HStack,
  IconButton,
  Image,
  Link,
  MenuContent,
  MenuItem,
  MenuOpenChangeDetails,
  MenuRoot,
  MenuTrigger,
} from '@chakra-ui/react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

import ocoboByteLogo from '/logo.svg';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  return (
    <Container
      fluid
      as="nav"
      className="navbar"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      padding={{ lg: '1rem 5rem', lgDown: '1rem 1.25rem' }}
    >
      <HStack className="navbar-content" justify="space-between" flexDirection="row">
        <Image className="navbar-logo" src={ocoboByteLogo}></Image>
        <HStack className="navbar-menu-links" hideBelow="md" gap={{ lg: '6', lgDown: '4' }}>
          <Link href="#">Quiénes Somos</Link>
          <Link href="#">Sponsors</Link>
          <Link href="#">Eventos</Link>
          <Link href="#">Organizadores</Link>
        </HStack>
        <Button className="navbar-collaborator-button" hideBelow="md">
          Ser Colaborador
        </Button>
        <Box hideFrom="md" className="navbar-hamburger-menu">
          <MenuRoot
            onOpenChange={(details: MenuOpenChangeDetails) => {
              setMenuIsOpen(details.open);
            }}
          >
            <MenuTrigger asChild>
              <IconButton aria-label="Open menu" color="green.400">
                {isMenuOpen ? <GrClose /> : <GiHamburgerMenu />}
              </IconButton>
            </MenuTrigger>
            <MenuContent className="navbar-hamburger-menu-content">
              <MenuItem asChild value="quienes_somos">
                <Link href="#q">Quiénes Somos</Link>
              </MenuItem>
              <MenuItem asChild value="sponsors">
                <Link href="#s">Sponsors</Link>
              </MenuItem>
              <MenuItem asChild value="eventos">
                <Link href="#e">Eventos</Link>
              </MenuItem>
              <MenuItem asChild value="organizadores">
                <Link href="#o">Organizadores</Link>
              </MenuItem>
              <MenuItem asChild value="organizadores">
                <Button className="navbar-collaborator-button">Ser Colaborador</Button>
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </Box>
      </HStack>
    </Container>
  );
};
