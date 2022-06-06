import React, { useState } from 'react'
import styled from 'styled-components'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

const Questions = ({ title, description }) => {
   const [toggle, setToggle] = useState(false)

   const toggleQuestion = () => {
      setToggle(!toggle)
   }
   return (
      <QuestionStyled>
         <div className="q-con">
            <div className="toggle-title" onClick={toggleQuestion}>
               <h3>{title}</h3>
               <button>
                  {toggle ? <MinusOutlined /> : <PlusOutlined />}
               </button>
            </div>
            {toggle && <p>{description.split("\n").map((i,key) => {
            return <div style={{padding: "10px 0"}} key={key}>{i}</div>;
        })}</p>}
         </div>
      </QuestionStyled>
   )
}

const QuestionStyled = styled.div`
   cursor: pointer;
   margin-top: .5rem;
   background-color: lightgrey;
   margin: 1rem 0;
   padding: 1.3rem 1rem;
   border-radius: 18px;
   transition: all 5s ease-in-out;
   box-shadow: 0px 25px 50px rgba(22,25,79,0.05);
   .q-con{
      p{
         margin-top: 1rem;
         font-size: 25px;
         color: black;
         padding: 10px;
         cursor: default;
      }
      .toggle-title{
         display: flex;
         align-items: center;
         justify-content: space-between;
         transition: all 5s ease-in-out;
         h3{
            font-size: 25px;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-family: azo-sans-uber,sans-serif;
            font-weight: 900;
            font-style: normal;
            margin: 10px;
            color: black;
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

export default Questions
