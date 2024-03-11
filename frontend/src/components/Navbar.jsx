import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
// import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <>
      <HStack justifyContent="space-between" paddingX="20px">
        <Image src={logo} boxSize="120px" />
        {/* <ColorModeSwitch /> */}
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
