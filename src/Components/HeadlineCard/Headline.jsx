import React from 'react'
import './headline.css'
import Card from '../Card/Card'

const Headline = ({headlineContent,className,cardcss}) => {
    
    return (
        <div className='headline'>
            <Card className={cardcss}>
                <h1>{headlineContent.heading}</h1>
                <p className='num'>{headlineContent.num}</p>
                <p className={`${className}`}>{headlineContent.highlight}</p>
            </Card>
        </div>
    )
}

export default Headline
