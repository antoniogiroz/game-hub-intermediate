import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./color-mode-switch";
import { SearchInput } from "./search-input";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <HStack>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}
