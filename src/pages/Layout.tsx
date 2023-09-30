import { Outlet } from "react-router-dom";
import { NavBar } from "../components/nav-bar";
import { Box } from "@chakra-ui/react";

export function Layout() {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
}
