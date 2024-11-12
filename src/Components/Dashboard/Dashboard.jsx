import React from 'react'
import './dashboard.css'
import Headline from '../HeadlineCard/Headline'
import GraphCard from '../GraphCard/GraphCard'
import RowCard from '../RowCard/RowCard'
import Card from '../Card/Card'

const headline = [
  {
    id: 1,
    heading: "Available Position",
    num: 24,
    highlight: "4 urgently needed",
    cardColor: "card-red",
    highlightColor: "highlight-red",
  },
  {
    id: 2,
    heading: "Job Open",
    num: 10,
    highlight: "4 Active hiring",
    cardColor: "card-blue",
    highlightColor: "highlight-blue",
  },
  {
    id: 3,
    heading: "New Employees",
    num: 24,
    highlight: "4 Department",
    cardColor: "card-pink",
    highlightColor: "highlight-pink",
  },
]
const graphcard = [
  {
    id: 1,
    heading: "Total Employees",
    num: 216,
    men: 120,
    women: 96,
    percentage: "+2%",
    img: "/images/graph2.svg"
  },
  {
    id: 2,
    heading: "Talent Request",
    num: 16,
    men: 6,
    women: 10,
    percentage: "+5%",
    img: "/images/graph5.svg"
  },
]

const announcement = [
  {
      id: 1,
      heading: "Outing schedule for every department",
      time: "5 minutes ago",
  },
  {
      id: 2,
      heading: "Meeting HR Department",
      time: "Yesterday, 12:30 PM",
  },
  {
      id: 3,
      heading: "IT Department need two more talents for UX/UI Designer position",
      time: "Yesterday, 09:15 AM",
  },
]

const upcomingSchedule={
  Priority: [
      {
          id: 1,
          heading: "Review candidate applications",
          time: "Today - 11.30 AM",
      },
  ],
  Other: [
      {
          id: 1,
          heading: "Interview with candidates",
          time: "Today - 10.30 AM"
      },
      {
          id: 2,
          heading: "Short meeting with product designer from IT Departement",
          time: "Today - 09.15 AM",
      }

  ]
}

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <div className='dashboard-content'>
        <div className='leftside'>
          <div className='headline-div'>
            {
              headline.map((h) => {
                return <Headline headlineContent={h} key={h.id} className={h.highlightColor} cardcss={`card-column card-padding ${h.cardColor}`} />
              })
            }
          </div>
          <div className='graph-card'>
            {
              graphcard.map((card) => {
                return <GraphCard key={card.id} content={card} />
              })
            }
          </div>
          <div>
            <RowCard data={announcement} heading="Announcemnet" pin={true}/>
          </div>
        </div>
        <div className='rightside'>
          <div className='recentActivity'>
            <Card className="card-column">
              <div className='heading'>
                <h1>Recenlty Activity</h1>
              </div>
              <div className='content'>
                <p className='time'>10.40 AM, Fri 10 Sept 2021</p>
                <h1> You Posted a New Job</h1>
                <p className='lightgreytext'>
                  Kindly check the requirements and terms of work and make ure everything is right.
                </p>
              </div>
              <div className='footer'>
                <h2>Today you makes 12 Activity</h2>
                <button>See All Activity</button>
              </div>
            </Card>
          </div>
          <div className='schedule'>
            <RowCard data={upcomingSchedule} heading="Upcoming Schedule" subheading={true}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
