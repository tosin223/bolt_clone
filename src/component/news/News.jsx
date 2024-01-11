import blogImg1 from '../../asset/blogImg1.jpg'
import blogImg2 from '../../asset/blogImg2.jpg'
import blogImg3 from '../../asset/blogImg3.jpg'
import { FaArrowRightLong } from "react-icons/fa6"
import Navbar from '../navbar/Navbar'
const News = () => {
  return (
    <div className="w-full m-h-[40rem] py-[4rem]">
        {/* <Navbar /> */}
            
        <div className="max-w-[1110px] mx-auto px-[1rem]">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-[40px] leading-[48px] font-semibold text-[#2f313f]">
                        News and updates
                    </h2>
                </div>
                <div className="flex items-center gap-x-4 cursor-pointer font-semibold leading-[24px] text-[20px] text-[#2f313f]">
                    <a href="">View all</a>
                    <FaArrowRightLong />
                </div>
               
            </div>
            <div className='flex gap-x-4'>
                <div className="cursor-pointer mb-4">
                    <div className='mb-3'>
                        <img src={blogImg1} alt="" className='rounded-2xl'/>
                    </div>
                    <div className='mb-2'>
                        <h5 className='font-semibold text-[24px] leading-[30px] text-[#2f313f]'>A Ride through Time: take a journey back in time with Bolt</h5>
                    </div>
                    <div><span className='text-[12px] text-[#2f313f]'>4 min read.10/2023</span></div>
                </div>
                <div className="cursor-pointer mb-4">
                    <div className='mb-3'>
                        <img src={blogImg2} alt="" className='rounded-2xl'/>
                    </div>
                    <div className='mb-2'><h5 className='font-semibold text-[24px] leading-[30px] text-[#2f313f]'>Get a new smartphone. Pay monthly. Or even weekly.</h5></div>
                    <div><span className='text-[12px] text-[#2f313f]'>4 min read.10/2023</span></div>
                </div>
                <div className="cursor-pointer">
                    <div className='mb-3'>
                        <img src={blogImg3} alt="" className='rounded-2xl'/>
                    </div>
                    <div className='mb-2'><h5 className='font-semibold text-[24px] leading-[30px] text-[#2f313f]'>Bring your business ideas to life with the Bolt accelerator programme!</h5></div>
                    <div><span className='text-[12px] text-[#2f313f]'>4 min read.10/2023</span></div>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default News