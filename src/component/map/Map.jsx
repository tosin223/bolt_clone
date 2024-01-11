import Navbar from '../navbar/Navbar'
import user from '../../asset/user.svg'
import continent from '../../asset/continent.svg'
import mark from '../../asset/mark.svg'
import Button from '../shared/Button'
const Map = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <div className='w-full bg-[#f9fafb] py-[4rem]'>
            <div className='max-w-[1110px] mx-auto px-[1rem]'>
                <div className='text-center text-[3rem] leading-[3.5rem] font-semibold text-[#2f313f]'>
                    <h2>À propos</h2>
                </div>
                <div className='py-[2rem]'>
                    <div className='w-[55rem] mx-auto'>
                        <p className='text-[1.25rem]  text-center text-[#2f313f] leading-[1.5rem]'>
                        Bolt is the first European mobility super-app. We’re making cities for people, offering better alternatives for every purpose a private car serves — including ride-hailing, shared cars, scooters, and food and grocery delivery.
                        </p>
                    </div>

                </div>
                <div className="w-full h-screen">
                    <img src="https://bolt.eu/static/world-map-optimized-6338bdae39fa9d215fb417b5845792a7.svg" alt="" />

                </div>
                <div className='flex'>
                    <div className=' w-[33.33%] h-fit text-center'>
                        <img src={mark} className='w-[2rem] mx-auto' alt="" />
                        <div className='w-[57%] text-center mx-auto'>
                            <div className='text-[#2f313f] leading-[1.87rem] font-semibold text-[1.5rem]'>
                                <p>150+ million</p>

                            </div>
                            <div>
                                <p className='font-normal leading-[1.5rem] text-[#121D2B99]'>customers around the world.</p>
                            </div>
                        </div>
                       
                                               
                    </div>
                    <div className='0 w-[33.33%] h-fit '>
                        <img src={continent} alt="" className='w-[2rem] mx-auto'/>
                        <div className='w-[57%] text-center mx-auto'>
                            <div className='text-[#2f313f] leading-[1.87rem] font-semibold text-[1.5rem]'>
                                <p>5 continents</p>
                            </div>
                            <div>
                                <p className='font-normal leading-[1.5rem] text-[#121D2B99]'>45+ countries.</p>
                               
                            </div>
                        </div>                           
                    </div>
                    <div className=' w-[33.33%] h-fit'>
                    <img src={user} alt="" className='w-[2rem] mx-auto'/>
                        <div className='w-[40%] mx-auto text-center'>
                            <div className='text-[#2f313f] leading-[1.87rem] font-semibold text-[1.5rem]'>
                                <p>3.1+ million</p>
                            </div>
                            <div>
                                <p className='font-normal leading-[1.5rem] text-[#121D2B99]'>drivers and couriers.</p>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className='text-left  mx-auto'>
                    <div className='w-fit mx-auto pt-[1.5rem]'>
                        <Button background='#061A370A' fontWeight='600' color='#2f313f' fontSize='1rem' width='11rem' text=' More about Bolt'/>
                    </div>
                    
                </div>
            </div>

        </div>

    </div>
  )
}

export default Map

// import React from 'react'


// const Map = () => {
//   return (
//     <div>
//         <Navbar/>
//         <div className="w-full h-screen bg-[url('https://bolt.eu/static/world-map-optimized-6338bdae39fa9d215fb417b5845792a7.svg')]">
//             <div className='max-w-[1110px] mx-auto px-[1rem]'>
//                 <div className='text-center'>
//                     <h2 className='text-[3rem] leading-[3.5rem] font-semibold text-[#2f313f]'>À propos</h2>
//                 </div>
//                 <div className=' bg-red-500 py-[]'>
//                     <div className='w-[55rem] mx-auto'>
//                         <p className='text-[1.25rem]  text-center '>
//                         Bolt is the first European mobility super-app. We’re making cities for people, offering better alternatives for every purpose a private car serves — including ride-hailing, shared cars, scooters, and food and grocery delivery.
//                         </p>
//                     </div>
                    
//                 </div>
          
//             </div>
           
  
//         </div>
//     </div>
//   )
// }

// export default Map