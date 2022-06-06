import React from 'react'
import styled from 'styled-components'
import Flex from "@react-css/flex"
import { Icon } from '@iconify/react';
import logo from '../assets/img/logo.png'

const Navigation = () => {
   return (
      <NavigationStyled>
         <Flex className='logo'>
            <img src={logo} alt="" />
         </Flex>

         <Flex className='social_icon'>
            <div onClick={() => window.open("https://www.instagram.com/theuncannyclub/", "_blank")}>
               <Icon icon="ph:instagram-logo-fill" width="30" height="30" />
            </div>
            <div onClick={() => window.open("https://twitter.com/TheUncannyClub", "_blank")}>
               <Icon icon="akar-icons:twitter-fill" width="30" height="30" />
            </div>
            <div onClick={() => window.open("https://discord.gg/7DKnvv7Cct", "_blank")}>
               <Icon icon="akar-icons:discord-fill" width="30" height="30" />
            </div>
         </Flex>

         {/* <ul className='desktop-nav'>
            <li>
               <Link to="header" spy={true} smooth={true}>HOME</Link>
            </li>
            <li>
               <Link to="aboutus" spy={true} smooth={true}>ABOUT</Link>
            </li>
            <li>
               <Link to="roadmap" spy={true} smooth={true}>ROADMAP</Link>
            </li>
            <li>
               <Link to="team" spy={true} smooth={true}>TEAM</Link>
            </li>
         </ul>
         <button className='mobile-menu' onClick={showMenu}>&#9776;</button>
         {isMobile && <div className="sidepanel">
            <button className="closebtn" onClick={closeMenu}>&times;</button>
            <li style={{marginTop: "70px"}}>
               <Link to="header" spy={true} smooth={true}>HOME</Link>
            </li>
            <li>
               <Link to="aboutus" spy={true} smooth={true}>ABOUT</Link>
            </li>
            <li>
               <Link to="roadmap" spy={true} smooth={true}>ROADMAP</Link>
            </li>
            <li>
               <Link to="team" spy={true} smooth={true}>TEAM</Link>
            </li>
         </div>} */}
      </NavigationStyled>
   )
}

const NavigationStyled = styled.nav`
   top: 0;
   left: 0;
   background: transparent;
   z-index: 10000;
   width: 100%;
   padding: 1% 10%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   color: white;

   img{
      width: 100px;
   }
   
   ul{
      display: flex;
      justify-content: space-between;
      width: 40%;
      margin: 0;
      li{
         cursor: pointer;
      }
   }

   .mobile-menu {
      display: none;
   }

   .sidepanel {
      width: 300px;
      position: fixed;
      z-index: 1;
      height: 250px;
      top: 0;
      right: 0;
      height: 100vh;
      background-color: #3d3d3d;
      overflow-x: hidden;
      transition: 0.5s;
      padding: 30px;
      li {
         margin: 20px 0;
      }
      .closebtn {
         position: fixed;
         padding: 0 33px;
         font-size: 35px;
         background: #3d3d3d;
         border: none;
         color: white;
      }
   }

   .social_icon {
      div {
         margin-right: 20px;
         transition: all 0.3s;
         cursor: pointer;
         :hover {
            transform: scale(1.2);
         }
      }
   }

   @media screen and (max-width: 1000px) {
      justify-content: center;
      padding-top: 30px;
      .desktop-nav {
         display: none;
      }
      .wallet_btn {
         display: none;
      }
      .mobile-menu {
         display: block;
         font-size: 30px;
         color: white;
         background: black;
         border: none;
      }
      .logo {
         display: none !important;
      }
   }
   
`
const PrimaryButton = styled.button`
   padding: 0.7rem 2rem;
   background-color: #848484;
   border: none;
   outline: none;
   border-radius: 18px;
   color: inherit;
   font-size: 1rem;
   font-family: inherit;
   cursor: pointer;

`

export default Navigation
