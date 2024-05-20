// import React from 'react'

// function About() {
//   return (
//     <div>About</div>
//   )
// }

// export default About
import Navbar from '../Navbar/Navbar'

const links = [
  { name: 'Email : thitiporn.ntk@gmail.com', href: 'https://www.google.com/gmail/about/' },
  { name: 'Github : https://github.com/nthiti', href: 'https://github.com/nthiti' },
  { name: 'Linkedin : www.linkedin.com/in/thitiporn-kaewburong', href: 'https://www.linkedin.com/in/thitiporn-kaewburong' },
]
  export default function About() {
    return (
      <>
        <Navbar></Navbar>
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 bg-black-800">
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Thitiporn Kaewburong</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              I am a recent Computer Science graduate with 4 months of internship experience in developing and creating responsive websites. 
              I have hands-on experience with HTML, CSS, JavaScript, PHP, and MySQL. 
              I am eager to learn new things and ready to learn the job.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="flex-col gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    <button className="bg-blue-500/20 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">{link.name}</button>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  