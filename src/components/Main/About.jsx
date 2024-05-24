import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import profile from '../img/logo.png'
import imgHtml from '../img/html.png'
import imgCss from '../img/css.png'
import imgJS from '../img/javascript.png'
import imgReact from '../img/react.png'
import imgVue from '../img/vue.png'
import imgVuetify from '../img/vuetify.png'
import imgBoostap from '../img/boostap.png'
import imgVscode from '../img/vscode.png'

const ImgLogo = [
  { img: imgHtml,},
  { img: imgCss,},
  { img: imgJS,},
  { img: imgReact,},
  { img: imgVue,},
  { img: imgVuetify,},
  { img: imgBoostap,},
  { img: imgVscode,},
]

const links = [
  { name: 'Email : thitiporn.ntk@gmail.com', href: 'https://www.google.com/gmail/about/' },
  { name: 'Github : https://github.com/nthiti', href: 'https://github.com/nthiti' },
  { name: 'Linkedin : www.linkedin.com/in/thitiporn-kaewburong', href: 'https://www.linkedin.com/in/thitiporn-kaewburong' },
]

export default function About() {
  return (
    <>
      <Navbar></Navbar>
      <div className="relative isolate overflow-hidden  py-24 sm:py-32 ">
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8 -mt-24">
          <div className="group flex items-center">
            <img className="shrink-0 h-min w-2/6 rounded-full" src={profile} alt="" />
            <div className="ltr:ml-3 rtl:mr-3">
              <div className="mx-auto  lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-[#68D2E8] sm:text-8xl text-center"> Hello!</h2><br />
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl"> My name is Thitiporn Kaewburong</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  I am a recent Computer Science graduate with 4 months of internship experience in developing systems and creating responsive websites. 
                  I have hands-on experience with HTML, CSS, JavaScript, and front-end frameworks such as Vue.js and React.js. 
                  I am eager to learn new things and ready to use my abilities to benefit the organization.
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
          <div className="mx-auto  lg:mx-0 mt-10">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl text-center"> My Skill</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8 ">
          {ImgLogo.map((link) => (
                <div key={link.img}>
                  <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={link.img}
                    alt="Transistor"
                    width={158}
                    height={48}
                  />
                </div>   
              ))}              
          </div>
        </div>
      </div>
      <Footer></Footer>

    </>
  )
}
  