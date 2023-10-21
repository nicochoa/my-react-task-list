import './Header.css';
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Heading,
} from '@chakra-ui/react'

export const Header = () => {
  return (
    <>
      <Heading as='h1' size='2xl' mt={6} >To DO App</Heading>
      <Breadcrumb separator='-' display="flex" justifyContent="center" mt={6}>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/" >Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/tasks" >TaskList</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/about-us" >AboutUs</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}