import { project } from '../data/Mydata';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const CardProject = ({item}) => {
    return(
        <div className="xs:w-[370px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='p-3'>
                <a href="#">
                    <img className="rounded-t-lg" src={item.image} alt="" style={{width:'100%',height:'200px'}} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.detail}</p>
                    <div className="pt-4 pb-2">
                        <span className="inline-block  rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.skill}</span>
                    </div>
                    <a href={item.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#049DD9] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {item.n_link}
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            
        </div>
    );
};

function Project() {
  return (
    <>
        <Navbar></Navbar>
        <div className='mx-auto max-w-7xl px-6 lg:px-8 bg-black-500 '>
            <div className="sectionSubText mt-10">Introduction</div>
            <h2 className='sectionHeadText '>My Project</h2> 
            {/* card */}
            <div className='mt-10 my-10 flex flex-wrap gap-10'>
                {project.map((item,index) => 
                    <CardProject key={index} item={item}/>
                )}
            </div>    
        </div>
        <Footer></Footer>
    </>
  )
}

export default Project