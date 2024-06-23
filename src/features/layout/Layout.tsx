import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
