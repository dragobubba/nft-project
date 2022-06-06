import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout'
import roadquestions from './components/roadquestions'
import Questions from './components/Questions'

const FAQSection = () => {
   return (
      <FaqStyled id='faq'>
         <InnerLayout>
            <div  data-aos='fade-right'>
               <h3 className="small-heading">FAQ'S</h3>
            </div>
            {/* <div className="lines">
               <img src={lines} alt="" />
            </div> */}
            <div className="questions-con" >
               {
                  roadquestions.map(q => (
                     <Questions  key={q.id} {...q} />
                  ))
               }
            </div>
         </InnerLayout>
      </FaqStyled>
   )
}
const FaqStyled = styled.section`
   background: black;
   margin: auto;
   width: 1150px;
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
      padding-top: 2rem;
   }

   @media only screen and (max-width: 1300px) {
      width: 90%;
   }
`

export default FAQSection
