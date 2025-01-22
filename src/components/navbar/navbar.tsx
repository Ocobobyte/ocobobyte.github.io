import { Box, Container, Flex, HStack, IconButton, Image, Link, MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import ocoboByteLogo from '/logo.svg';
import { Button } from "../ui/button";
import './navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  return (
    <Container fluid as="nav" className="navbar" display="flex" flexDirection="column" justifyContent="center" padding={{ lg: "1rem 5rem", lgDown: "1rem" }}>
      <HStack className="navbar-content" justify="space-between" flexDirection="row">
        <Image className="navbar-logo" src={ocoboByteLogo}></Image>
        <HStack className="navbar-menu-links" hideBelow="md" gap={{ lg: "6", lgDown: "4" }}>
          <Link href="#">Quiénes Somos</Link>
          <Link href="#">Sponsors</Link>
          <Link href="#">Eventos</Link>
          <Link href="#">Organizadores</Link>
        </HStack>
        <Button className="navbar-collaborator-button" hideBelow="md">Ser Colaborador</Button>
        <Box hideFrom="md" className="navbar-hamburger-menu">
          <MenuRoot>
            <MenuTrigger asChild>
              <IconButton aria-label="Search database" color="green.400">
                <GiHamburgerMenu />
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
}