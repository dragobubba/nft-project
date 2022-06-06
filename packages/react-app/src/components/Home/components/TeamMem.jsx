import React from 'react'
import styled from 'styled-components'

const TeamMem = ({ image, name, position }) => {

   return (
      <MemberCard>
         <div className="q-con">
            <div className="toggle-title">
               <img src={image} alt="" />
               <div className='name'>{name}</div>
               <div>{position}</div>
            </div>
         </div>
      </MemberCard>
   )
}

const MemberCard = styled.div`
   justify-content: center;
   display: flex;
   margin-top: .5rem;
   margin: 1rem 0;
   padding: 1.3rem 1rem;
   border-radius: 18px;
   transition: all 5s ease-in-out;
   color: white;
   box-shadow: 0px 25px 50px rgba(22,25,79,0.05);
   .q-con{
      .toggle-title{
         width: 300px;
         text-align: center;
         transition: all 5s ease-in-out;
         .name {
            font-weight: bold;
            ext-transform: uppercase;
            font-size: 30px;
         }
         img {
            width: 300px;
            border-radius: 20px;
            border: 10px solid #363638;
         }
      }
   }

   @media only screen and (max-width: 1300px) {
      .q-con{
         p{
            font-size: 20px;
         }
         .toggle-title{
            h3{
               font-size: 20px;
            }       
         }
      }
   }
`

export default TeamMem
