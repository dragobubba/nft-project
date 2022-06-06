import React from 'react'
import styled from 'styled-components'
import teams from './components/teams'
import TeamMem from './components/TeamMem'


const Team = () => {
   return (
      <AboutStyled id='team'>
         {/* <div className="lines">
               <img src={lines} alt="" />
            </div> */}
         <div className="questions-con" >
            <div data-aos='fade-right'>
               <h3 className="small-heading">Team</h3>
            </div>
            <div className='teams'>
               {
                  teams.map(t => (
                     <TeamMem  key={t.id} {...t} />
                  ))
               }
            </div>
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
      padding: 100px 0;
      font-size: 25px;
      .teams {
         display: flex;
         justify-content: space-between;
         width: 100%;
      }
   }

   
   @media only screen and (max-width: 1300px) {
      .questions-con{
         width: 90%;
         .teams {
            display: block;
         }
      }
   }
`

export default Team
