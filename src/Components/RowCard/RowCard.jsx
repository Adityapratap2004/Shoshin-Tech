import React from 'react'
import Card from '../Card/Card'
import './rowcard.css'

const RowCard = ({ data, heading, pin, subheading }) => {
    
    return (
        <div className='rowcard'>
            <div className='rowcard-upper'>
                <div className='heading'>
                    <h1>{heading}</h1>
                    <select>
                        <option>Today,13 Sep 2021</option>
                    </select>
                </div>

                {!subheading && <div className='row-container'>
                    {
                        data.map((d) => {
                            return <Card className="card-border card-grey card-padding">
                                <div className='row'>
                                    <h2>{d.heading}</h2>
                                    <p>{d.time}</p>
                                </div>
                                <div className='options'>
                                    {pin && <button>
                                        <img src="/images/bi_pin-angle-fill.svg" alt="pin" />
                                    </button>}
                                    <button>
                                        <img src="/images/carbon_overflow-menu-horizontal.svg" alt="dots" />
                                    </button>
                                </div>
                            </Card>
                        })
                    }
                </div>}
                {subheading && <div className='row-container'>
                    {
                        data.Priority && <><h2>Priority</h2>

                            {data.Priority.map((d) => {
                                return <Card className="card-border card-grey card-padding">
                                    <div className='row'>
                                        <h2>{d.heading}</h2>
                                        <p>{d.time}</p>
                                    </div>
                                    <div className='options'>
                                        {pin && <button>
                                            <img src="/images/bi_pin-angle-fill.svg" alt="pin" />
                                        </button>}
                                        <button>
                                            <img src="/images/carbon_overflow-menu-horizontal.svg" alt="dots" />
                                        </button>
                                    </div>
                                </Card>
                            })}
                        </>
                    }
                    {
                        data.Other && <><h2>Other</h2>

                            {data.Other.map((d) => {
                                return <Card className="card-border card-grey card-padding">
                                    <div className='row'>
                                        <h2>{d.heading}</h2>
                                        <p>{d.time}</p>
                                    </div>
                                    <div className='options'>
                                        {pin && <button>
                                            <img src="/images/bi_pin-angle-fill.svg" alt="pin" />
                                        </button>}
                                        <button>
                                            <img src="/images/carbon_overflow-menu-horizontal.svg" alt="dots" />
                                        </button>
                                    </div>
                                </Card>
                            })}
                        </>
                    }
                </div>}
            </div>
            <div className='lower'>
                {subheading ? 'See All Announcement ':'Creat a New Schedule'}
            </div>
        </div>
    )
}

export default RowCard
