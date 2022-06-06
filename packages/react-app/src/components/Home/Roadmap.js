import React from 'react'
import styled from 'styled-components'
import roadmaps from './components/roadmaps'
import RoadmapParts from './components/RoadmapParts'

const Roadmap = () => {
   return (
      <RoadStyled id='roadmap'>
         {/* <div className="lines">
               <img src={lines} alt="" />
            </div> */}
         <div className="questions-con" >
            <div data-aos='fade-right'>
               <h3 className="small-heading">Roadmap</h3>
            </div>
            {
               roadmaps.map(q => (
                  <RoadmapParts key={q.id} {...q} />
               ))
            }
         </div>
      </RoadStyled>
   )
}
const RoadStyled = styled.section`
   background: black;
   color: white;
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
      padding: 50px 0;
      padding-left: 15px;
      margin: auto;
      width: 1150px;
      .small-heading {
         margin: 0;
      }
   }

   @media only screen and (max-width: 1300px) {
      .questions-con{
         width: 90%;
      }
   }
`

export default Roadmap  
