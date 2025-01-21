import { Box, HStack, Image, Link } from "@chakra-ui/react";
import ocoboByteLogo from '/logo.png';
import { Button } from "../ui/button";
import './navbar.css';

export const Navbar = () => {
  return (
    <Box as="nav">
      <HStack justify="space-between" maxW="7xl" mx="auto">
        <Image src={ocoboByteLogo}></Image>
        <HStack gap="6">
          <Link href="#">Quiénes Somos</Link>
          <Link href="#">Sponsors</Link>
          <Link href="#">Eventos</Link>
          <Link href="#">Organizadores</Link>
        </HStack>
        <Button>Ser Colaborador</Button>
      </HStack>
    </Box>
  );
}