import React from 'react'
import './portfolio.css'
import WonderStudyimg from '../../assets/portfolio1.jpg'
import RTOimg from '../../assets/portfolio2.jpg'
import Vaultimg from '../../assets/portfolio3.jpg'
import TAMSimg from '../../assets/portfolio4.jpg'

const data=[
    {
        id:1,
        image:RTOimg,
        title:'RTO',
        github:'https://github.com/itsayushmathur/road-and-transport-office.github.io'
    },
    {
        id:2,
        image:Vaultimg,
        title:'The Vault',
        github:'https://github.com/itsayushmathur/The_Vault.github.io'
    },
    {
        id:3,
        image:WonderStudyimg,
        title:'Wonder Study',
        github:'https://github.com/itsayushmathur/WonderStudy-Course_Management'
       
    },
    {
        id:4,
        image:TAMSimg,
        title:'Talent Allocation Management System',
        github:'https://github.com/itsayushmathur/TAMS',
    }
]


const Portfolio = () => {
  return (
   <section id="portfolio">
     <h5>My Recent Work</h5>
     <h2>Portfolio</h2>
     <div className="container portfolio__container">
       {data.map(({id,image,title,github})=>(
         <article key={id} className="portfolio__item">
           <div className="portfolio__item-image">
             <img src={image} alt={title} />
           </div>
           <h3>{title}</h3>
           <div className="portfolio__item-cta">
             <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
           </div>
         </article>
       ))}
     </div>
   </section>
  )
};

export default Portfolio