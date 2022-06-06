import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  color: white;
  min-height: calc(100vh - 180px);
  overflow: hidden;

  @media (min-width: 800px) {
    padding: 0 30px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (min-width: 1000px) {
    margin: auto;
    flex-direction: row;
    width: 90%;
  }

  @media (min-width: 1024px) {
    width: 85%;
    max-width: 1500px;
    margin: 0 auto;
  }
`;

export const TextWrapper = styled.div`
  margin: auto;
  width: 50%;

  img {
    width: 100%;
  }

  @font-face {
    font-family: LuloClean;
    src: url("./Lulo Clean W01 One Bold.ttf");
  }

  > h1 {
    text-align: center;
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 36px;
    color: #fff;

    @media (max-width: 768px) {
      font-size: 50px !important;
    }
  }

  > h2 {
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
  }

  @media screen and (max-width: 1200px){
    width: 100%;
  }

  @media (min-width: 768px) {
    > h1 {
      font-size: 40px;
    }

    > h2 {
      font-size: 24px;
    }
  }

  @media (min-width: 1024px) {
    > h1 {
      font-size: 57px;
    }

    > h2 {
      font-size: 36px;
    }

    img {
      width: 450px;
    }
  }

  @media (min-width: 1200px) {
    > h1 {
      font-size: 62px;
    }

    > h2 {
      font-size: 52px;
    }

    img {
      width: 550px;
    }
  }

  @media (min-width: 1440px) {
    > h1 {
      font-size: 75px;
      line-height: 106px;
    }

    > h2 {
      font-size: 60px;
    }

    img {
      width: 700px;
    }
  }

  @media (min-width: 1700px) {
    img {
      width: 800px;
    }
  }
`;

export const NFTContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: auto;
  box-shadow: 

  p {
    font-weight: 300;
    font-size: 24px;
    margin: 0px;
  }

  button {
    background: #333;
    background-image: linear-gradient(180deg, #333, #1f1f1f);
    box-shadow: 0 16px 0 -8px rgb(0 0 0 / 25%);
    border: none;
    padding: 0px 15px;
    transition: all 0.3s linear;
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    height: 50px;

    &:hover {
      background-color: #571e1e;
      background-image: linear-gradient(180deg, #612323, #421111);
      outline-color: hsla(0, 0%, 100%, 0.1);
      outline-offset: -8px;
      outline-style: solid;
      outline-width: 2px;
    }
  }

  .mint_count {
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: 0px 50px;
    font-size: 35px;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    p {
      font-size: 28px;
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: 32px;
    }
  }

  @media (min-width: 1440px) {
    p {
      font-size: 36px;
    }
  }
`;

export const StepWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
  justify-content: center;
  padding-top: 50px;

  button {
    background: #333;
    background-image: linear-gradient(180deg, #333, #1f1f1f);
    box-shadow: 0 16px 0 -8px rgb(0 0 0 / 25%);
    border: none;
    padding: 0px 15px;
    transition: all 0.3s linear;
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    height: 50px;

    &:hover {
      background-color: #571e1e;
      background-image: linear-gradient(180deg, #612323, #421111);
      outline-color: hsla(0, 0%, 100%, 0.1);
      outline-offset: -8px;
      outline-style: solid;
      outline-width: 2px;
      color: white;
    }
  }

  .back {
    background: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    border: none;
    padding: 9px 30px !important;
    transition: all 0.3s linear;
    color: black;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      box-shadow: 0 0 10px #fff;
      color: black;
    }

    &:focus,
    &:active {
      text-decoration: none;
      background: #fff !important;
    }

    &.ant-btn:focus {
      color: black !important;
      background: #fff !important;
      border: none !important;
    }
  }

`;

export const ButtonOpensea = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
    
  button {
    background: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    border: none;
    height: 50px;
    transition: all 0.3s linear;
    color: black;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      box-shadow: 0 0 10px #fff;
      color: black;
    }
  }

  .opensea {
    background: #333;
    background-image: linear-gradient(180deg, #333, #1f1f1f);
    box-shadow: 0 16px 0 -8px rgb(0 0 0 / 25%);
    border: none;
    transition: all 0.3s linear;
    color: white;
    padding: 9px 15px !important;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
    text-align: center;

    &:hover {
      background-color: #571e1e;
      background-image: linear-gradient(180deg, #612323, #421111);
      outline-color: hsla(0, 0%, 100%, 0.1);
      outline-offset: -8px;
      outline-style: solid;
      outline-width: 2px;
    }
  }
`;


export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 1200px){
    width: 100%;
  }
`;

export const GifWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  
  .hero_img {
    align-items: center;
    width: 70%;
    border-radius: 40px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    margin-top: 50px;

    @media screen and (max-width: 1200px) {
      max-width: 300px;
      width: 100%;
    }

  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;


export const ProgressBarContainer = styled.ul`
  padding: 0px;
  width: 100%;
  margin-top: -4px;

  @media (min-width: 768px) {
    margin-top: -8px;
  }
`;

export const PointWrapper = styled.li`
  list-style-type: none;
  width: 25%;
  float: left;
  position: relative;
  background: rgba(66, 63, 81, 0.55);

  &:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  &:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &::before {
    content: "";
    counter-increment: step;
    display: block;
    text-align: center;
    margin: 20px auto 20px auto;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    min-width: 30px;
    box-sizing: border-box;
    border: 5px solid #c4c4c4;
    background: #c4c4c4;
  }

  &:not(:first-child)::after {
    width: 100%;
    height: 4px;
    content: "";
    position: absolute;
    background-color: #c4c4c4;
    top: 33px;
    left: -50%;
    z-index: -1;
  }

  ${({ active }) =>
    active &&
    css`
      &::before {
        background: #f6560f;
        border: 5px solid #f6560f;
      }
      &:not(:first-child)::after {
        background-color: #f6560f;
      }
    `}
`;

export const VideoWrapper = styled.div`
  video {
    background-image: url(https://uploads-ssl.webflow.com/620aa02f5d1169e3a89ae290/62143d5489bb581fe3fdad6b_UCC_Website_Gif_AdobeCreativeCloudExpress-poster-00001.jpg);
    position: absolute;
    z-index: -1;
    background-size: cover;
    background-position: 50% 50%;
    width: 100%;
    height: 100vh;
    opacity: 0.4;
    object-fit: cover;  
    @media screen and (max-width: 600px){
      display: none;
    }
  }
`