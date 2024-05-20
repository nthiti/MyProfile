import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../data/Mydata';
import Navbar from '../Navbar/Navbar'

const TimeEx = ({item}) => {
  return(
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={item.date}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    >
      <h3 className="vertical-timeline-element-title">{item.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{item.company_name}</h4>
      <ul>
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
          <h2 className='sectionHeadText'>AND Study Project</h2>
        <VerticalTimeline>
          {experiences.map((item,index)=>
            <TimeEx key={index} item={item}/>
          )}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Experience


// const callouts = [
//     {
//       name: 'Desk and Office',
//       description: 'Work from home accessories',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
//       imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
//       href: '#',
//     },
//     {
//       name: 'Self-Improvement',
//       description: 'Journals and note-taking',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
//       imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
//       href: '#',
//     },
//     {
//       name: 'Travel',
//       description: 'Daily commute essentials',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
//       imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
//       href: '#',
//     },
//   ]
  
//   export default function Example() {
//     return (
//       <div className="bg-gray-800">
//         <img
//           src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
//           alt=""
//           className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
//         />
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
//             <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
  
//             <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
//               {callouts.map((callout) => (
//                 <div key={callout.name} className="group relative">
//                   <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
//                     <img
//                       src={callout.imageSrc}
//                       alt={callout.imageAlt}
//                       className="h-full w-full object-cover object-center"
//                     />
//                   </div>
//                   <h3 className="mt-6 text-sm text-gray-500">
//                     <a href={callout.href}>
//                       <span className="absolute inset-0" />
//                       {callout.name}
//                     </a>
//                   </h3>
//                   <p className="text-base font-semibold text-gray-900">{callout.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
  