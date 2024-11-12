import React from 'react'
import Card from '../Card/Card'
import './graphcard.css'

const GraphCard = ({content}) => {
    return (
        <Card className="card-border card-padding">
            <div className='graphCard-left'>
                <h1>{content.heading}</h1>
                <p className='num'>{content.num}</p>
                <div className='strength'>
                    <p>{content.men} Men</p>
                    <p>{content.women} Women</p>
                </div>
            </div>

            <div className='graphCard-right'>
                <img src={content.img} alt="graph" />
                <div className='percentage'>
                    {content.percentage} Past month
                </div>

            </div>
        </Card>
    )
}

export default GraphCard
