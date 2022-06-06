import React from 'react'
import styled from 'styled-components'

const Aboutus = () => {
   return (
      <AboutStyled id='aboutus'>
         {/* <div className="lines">
               <img src={lines} alt="" />
            </div> */}
         <div className="questions-con" >
            <div data-aos='fade-right'>
               <h3 className="small-heading">What is The Underground?</h3>
            </div>
            <p>The Underground NFT collection is an NFT for the people. With a total supply of 2,500 NFT’s, the utilities were specifically designed to create value for every single holder, by sharing minting proceeds and secondary sales through returning Ethereum back to its holders.
               The 3D designed NFT’s consist of 5 different variations that each represent a different pay out percentage for its holders. Not to mention, these utilities are also designed so the floor price does not determine the projects success.
               The goal behind this project is to create real value for its holders, while building a strong community through sharing wealth. This NFT collection will be known as the NFT for the people!
            </p>
         </div>
      </AboutStyled>
   )
}
const AboutStyled = styled.section`
   background: black;
   margin: auto;
   .c-para{
      width: 60%;
      margin: 0 auto;
   }
   .lines{
      position: absolute;
      left: 0;
      top: 360%;
      width: 100%;
      z-index: -1;

      img{
         width: 100%;
      }
   }
   .questions-con{
      width: 1150px;
      margin: auto;
      padding: 100px 0 50px 0;
      font-size: 25px;
      p{
        color: white;
         letter-space: 10px;
         padding: 20px 0;
      }
   }

   @media only screen and (max-width: 1300px) {
      .questions-con{
         width: 90%;
      }
   }
`

export default Aboutus
