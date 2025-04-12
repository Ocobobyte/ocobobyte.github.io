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
      borderBottom="1px solid"
      borderColor="zircon.300"
      h={20}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      padding={{ lg: '1rem 5rem', lgDown: '1rem 1.25rem' }}
    >
      <HStack justify="space-between" flexDirection="row">
        <Image src={ocoboByteLogo}></Image>
        <HStack hideBelow="md" gap={{ lg: '6', lgDown: '4' }}>
          <Link color="green.500" href="#">
            Quiénes Somos
          </Link>
          <Link color="green.500" href="#">
            Sponsors
          </Link>
          <Link color="green.500" href="#">
            Eventos
          </Link>
          <Link color="green.500" href="#">
            Organizadores
          </Link>
        </HStack>
        <Button borderRadius="4xl" backgroundColor="green.500" color="green.100" hideBelow="md">
          Ser Colaborador
        </Button>
        <Box hideFrom="md" className="navbar-hamburger-menu">
          <MenuRoot
            onOpenChange={(details: MenuOpenChangeDetails) => {
              setMenuIsOpen(details.open);
            }}
          >
            <MenuTrigger
              _focusVisible={{
                outlineStyle: 'none',
              }}
              backgroundColor="transparent"
              asChild
            >
              <IconButton aria-label="Open menu" color="green.400">
                {isMenuOpen ? <GrClose /> : <GiHamburgerMenu />}
              </IconButton>
            </MenuTrigger>
            <MenuContent
              borderRadius={0}
              boxShadow="none"
              backgroundColor="zircon.100"
              position="absolute"
              top={20}
              left={0}
              width="100%"
              padding="20px"
            >
              <MenuItem
                asChild
                _highlighted={{
                  backgroundColor: 'transparent',
                }}
                color="green.500"
                cursor="pointer"
                justifyContent="center"
                fontWeight={700}
                padding="10px"
                value="quienes_somos"
              >
                <Link href="#q">Quiénes Somos</Link>
              </MenuItem>
              <MenuItem
                asChild
                _highlighted={{
                  backgroundColor: 'transparent',
                }}
                color="green.500"
                cursor="pointer"
                justifyContent="center"
                fontWeight={700}
                padding="10px"
                value="sponsors"
              >
                <Link href="#s">Sponsors</Link>
              </MenuItem>
              <MenuItem
                asChild
                _highlighted={{
                  backgroundColor: 'transparent',
                }}
                color="green.500"
                cursor="pointer"
                justifyContent="center"
                fontWeight={700}
                padding="10px"
                value="eventos"
              >
                <Link href="#e">Eventos</Link>
              </MenuItem>
              <MenuItem
                asChild
                _highlighted={{
                  backgroundColor: 'transparent',
                }}
                color="green.500"
                cursor="pointer"
                justifyContent="center"
                fontWeight={700}
                padding="10px"
                value="organizadores"
              >
                <Link href="#o">Organizadores</Link>
              </MenuItem>
              <MenuItem
                asChild
                _highlighted={{
                  backgroundColor: 'transparent',
                }}
                color="green.500"
                cursor="pointer"
                justifyContent="center"
                fontWeight={700}
                padding="10px"
                value="organizadores"
              >
                <Button color="green.100" margin="10px 0">
                  Ser Colaborador
                </Button>
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </Box>
      </HStack>
    </Container>
  );
};
