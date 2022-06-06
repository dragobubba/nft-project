import React from 'react'
import styled from 'styled-components'

const RoadmapParts = ({ title, description }) => {
   return (
      <QuestionStyled >
         <div  className="q-con">
            <div className="toggle-title">
               <h3>{title}</h3>
            </div>
            <ul>
               {
                  description.map(d => (
                     <li key={d.textId}>
                        {d.content}
                        {
                           d.subtext && 
                           <ul className='subtext'>
                              {
                                 d.subtext.map(s => (
                                    <li className="sub-li" key={s.subId}>{s.subtext}</li>
                                 ))
                              }
                           </ul>
                        }
                     </li>
                  ))
               }
            </ul> 
         </div>
      </QuestionStyled>
   )
}

const QuestionStyled = styled.div`
   margin-top: .5rem;
   background-color: #000;
   margin: 1rem 0;
   border-radius: 18px;
   transition: all 5s ease-in-out;
   box-shadow: 0px 25px 50px rgba(22,25,79,0.05);
   .q-con{
      li{
         list-style: disc;
         font-size: 25px;
         padding: 10px 0;
      }
      .toggle-title{
         display: flex;
         align-items: center;
         justify-content: space-between;
         transition: all 5s ease-in-out;
         h3{
            color: white;
            font-size: 25px;
            letter-spacing: 1px;
            font-family: azo-sans-uber,sans-serif;
            font-weight: 900;
            font-style: normal;
            margin: 10px;
         }
         button{
            background: transparent;
            outline: none;
            border: none;
            cursor: pointer;
            i{
               color: black;
               font-size: 20px;
            }
         }
      }
   }
`

export default RoadmapParts
