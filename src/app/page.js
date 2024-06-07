/**
 * @author Lai Yi Qun <B11117006@gemail.yuntech.edu.tw>
 */

'use client';

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
import { DarkThemeToggle } from "flowbite-react";
import CustomCard from "./components/Card";
import { useState, useEffect } from "react";

export default function Home() {

  const [items, setItems] = useState([]);
  const tokenURL = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token';
  const apiURL = 'https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/YunlinCounty';
  useEffect(() => {
    const getToken = async () => {
      const clientId = process.env.TDX_CLIENT_ID;
      const clientSecret = process.env.TDX_CLIENT_SECRET;

      const tokenParams = new URLSearchParams();
      tokenParams.append('grant_type', 'client_credentials')
      tokenParams.append('client_id', clientId);
      tokenParams.append('client_secret', clientSecret);

      const tokenResponse = await fetch(tokenURL,{
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        body: tokenParams.toString()
      });
    };
  }, []);

  return (
    <>
      <div className="bg-[#EE6D8D]">
        <div className="container mx-auto">
          <Navbar fluid className="bg-[#EE6D8D]">
            <NavbarBrand as={Link} href="/">
              <img src="https://i.pinimg.com/564x/fc/61/2c/fc612c8657ee61a816b182f91fdb5a9f.jpg" className="mr-3 h-6 sm:h-9" alt="" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">資工磨大米</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
              <NavbarLink href="#" className="text-white ">
                <span className="px-4 py-2 hover:border-[#FEaDbD] hover:border-b-2 hover:text-[#FEaDbD]">本店地點</span>
              </NavbarLink>
              <NavbarLink href="#" className="text-white">
                <span className="px-4 py-2 hover:border-[#FEaDbD] hover:border-b-2 hover:text-[#FEaDbD]">成員介紹</span>
              </NavbarLink>
              <NavbarLink href="#" className="text-white">
                <span className="px-4 py-2 hover:border-[#FEaDbD] hover:border-b-2 hover:text-[#FEaDbD]">服務總攬</span>
              </NavbarLink>
              <NavbarLink href="#" className="text-white">
                <span className="px-4 py-2 hover:border-[#FEaDbD] hover:border-b-2 hover:text-[#FEaDbD]">價格查詢</span>
              </NavbarLink>
              <NavbarLink as={Link} href="#" className="text-white">
                <span className="px-4 py-2 hover:border-[#FEaDbD] hover:border-b-2 hover:text-[#FEaDbD]">聯絡資訊</span>
              </NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle />
          </Navbar>
        </div>
      </div>
      
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-screen bg-[#F4A7B9]">
        <Carousel>
          <img src="/sky1.jfif" className="flex h-full w-auto" alt="https://i.pinimg.com/564x/56/52/66/565266c6bd09b302ce096ad86e6e4dfd.jpg" />
          <img src="/sky2.jpg" className="flex h-full w-auto" alt="https://i.pinimg.com/564x/fc/b0/e6/fcb0e64ed6e6b44612a9198f2c0a8b0f.jpg" />
          <img src="/sky3.jpg" className="flex h-full w-auto" alt="https://i.pinimg.com/564x/44/68/98/44689878b2de08cabd23ff2c31658ce5.jpg" />
          <img src="/sky4.jpg" className="flex h-full w-auto" alt="https://i.pinimg.com/564x/f6/47/6a/f6476adbe036218886edf37cc17c5a31.jpg" />
          <img src="/sky5.jpg" className="flex h-full w-auto" alt="https://i.pinimg.com/564x/c6/e8/51/c6e8510425bac642903930ae8dfd71fd.jpg" />
        </Carousel>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {
            items.map( item =>
              <CustomCard item={item}/>
            )
          }
        </div>
      </div>
      

      <div className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-4 gap-4">
          {items.map( item =>
            <Card href="#" 
              className="max-w-sm"
              imgAlt={item.Picture.PictureDescription1}
              imgSrc={item.Picture.PictureUrl1}  
              >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.ScenicSpotName}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.DescriptionDetail}
              </p>
              <button type="button" 
                class="text-white 
                  bg-gradient-to-r
                  from-purple-500
                  to-pink-500
                  hover:bg-gradient-to-l
                  focus:ring-4
                  focus:outline-none
                  focus:ring-purple-200
                  dark:focus:ring-purple-800
                  font-medium
                  rounded-lg
                  text-sm
                  px-5
                  py-2.5
                  text-center
                  me-2
                  mb-2"
                >
                More Imformation
              </button>
            </Card>
          )}
        </div>
          
      </div>
      
      

      <Footer container>
        <FooterCopyright href="#" by="Flowbite™" year={2077} />
        <FooterLinkGroup>
          <FooterLink href="#">這</FooterLink>
          <FooterLink href="#">裡</FooterLink>
          <FooterLink href="#">沒</FooterLink>
          <FooterLink href="#">東</FooterLink>
          <FooterLink href="#">西</FooterLink>
        </FooterLinkGroup>
      </Footer>
      
    </>
    
  );
}