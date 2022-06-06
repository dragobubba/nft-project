import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root{
      --purple-primary: #554DDE;
      --accent-pink: #F44E77;
      --neutral-light: #F2F6FF;
      --lavender-secondary: #6A6D9E; /*Primary Font Color*/
      --dark-primary: #000;
      --border-colour: #CAD6F1;
   }
   *{
      margin: 0;
      padding: 0;
      list-style: none;
      box-sizing: border-box;
      font-family: azo-sans-uber,sans-serif;
      text-decoration: none;
   }

   body{
      font-size: 1.2rem;
      background-image: linear-gradient(180deg, rgba(14, 9, 5, 0.8), rgba(14, 9, 5, 0.8)), url("https://uploads-ssl.webflow.com/620aa02f5d1169e3a89ae290/62143d5489bb581fe3fdad6b_UCC_Website_Gif_AdobeCreativeCloudExpress-poster-00001.jpg");
      background-position: 0px 0px, 50% 50%;
      background-size: cover;
   }

   a{
      color: inherit;
   }
   p{
      line-height: 1.9rem;
   }
   .secondary-heading{
      font-size: 3rem;
   }
   .small-heading{
      color: lightgrey;
      font-size: 100px;
      text-align: center;
      font-weight: bolder;
      line-height: 1.2;
   }

   //utilities

   .c-para{
      text-align: center;
   }

   @media only screen and (max-width: 800px) {
      .small-heading{
         font-size: 40px;
      }
   }
   .subtext {
      margin-left: 20px;
   }

   .sub-li {
      list-style: square !important;
   }
`;

export default GlobalStyle;