import Image from "next/image";
import { Button } from "flowbite-react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from "flowbite-react";
import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup
} from "flowbite-react";
import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";

export default function Home() {
  return (
    <>
      <Navbar fluid rounded>
        <NavbarBrand as={Link} href="https://flowbite-react.com">
          <img src="/next.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink as={Link} href="#">
            About
          </NavbarLink>
          <NavbarLink href="#">Services</NavbarLink>
          <NavbarLink href="#">Pricing</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-screen">
        <Carousel>
          <img src="https://i.pinimg.com/564x/56/52/66/565266c6bd09b302ce096ad86e6e4dfd.jpg" className="flex h-full w-auto " alt="..." />
          <img src="https://i.pinimg.com/564x/fc/b0/e6/fcb0e64ed6e6b44612a9198f2c0a8b0f.jpg" className="flex h-full w-auto" alt="..." />
          <img src="https://i.pinimg.com/564x/44/68/98/44689878b2de08cabd23ff2c31658ce5.jpg" className="flex h-full w-auto" alt="..." />
          <img src="https://i.pinimg.com/564x/f6/47/6a/f6476adbe036218886edf37cc17c5a31.jpg" className="flex h-full w-auto" alt="..." />
          <img src="https://i.pinimg.com/564x/c6/e8/51/c6e8510425bac642903930ae8dfd71fd.jpg" className="flex h-full w-auto" alt="..." />
        </Carousel>
      </div>

      <Card href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Test
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
      

      <Footer container>
        <FooterCopyright href="#" by="Flowbite™" year={2022} />
        <FooterLinkGroup>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>
      
    </>
    
  );
}