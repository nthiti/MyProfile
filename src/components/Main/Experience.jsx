import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../data/Mydata';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const TimeEx = ({item}) => {
  return(
    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      contentStyle={{ background: '#049DD9', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={item.date}
      iconStyle={{ background: '#0E46A3', color: '#fff' }}
    >
      <h3 className="vertical-timeline-element-title font-[800] text-gray-900">{item.title}</h3>
      <h4 className="vertical-timeline-element-subtitle font-[600] text-gray-900">{item.company_name}</h4>
      <ul className='text-gray-200'>
        {item.points.map((p,i)=>
          <li key={i}>{p}</li>
        )}
      </ul>
      <img src={item.icon} alt="" />
    </VerticalTimelineElement>
  )
}

function Experience() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <div className="sectionSubText mt-10">My Education</div>
          <h2 className='sectionHeadText'>My Experience</h2>
        <VerticalTimeline>
          {experiences.map((item,index)=>
            <TimeEx key={index} item={item}/>
          )}
        </VerticalTimeline>
      </div>
      <Footer></Footer>

    </>
  )
}

export default Experience