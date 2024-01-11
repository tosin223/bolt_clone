import scanImg from '../asset/scanned.png'
import { useState } from "react";
import Navbar from "../component/navbar/Navbar";
import Button from "../component/shared/Button";
const Header = () => {
  const[getApp, setGetApp] = useState(false)

  const getAppClicked = ()=> {
    setGetApp(!getApp)
  }
  return (
   
    <header className="bg-hero-pattern w-full h-screen bg-center bg-cover bg-no-repeat relative">
      <Navbar />
        <div className="text-white h-screen  p-[3rem] w-full relative">
          <div className='mx-auto max-w-[1110px]  p-[1rem]'>
            <div className='w-[60%] '>
              <h1 className="text-5xl font-bold mb-8 text-[4rem] leading-[4.5rem]  w-[25rem]">Go wherever, whenever</h1>
              <p className="w-[35rem] text-[1.25rem] leading-[1.75rem] mb-8 ">
                Bolt is the all-in-one mobility app. Get picked up by a top-rated driver
                in minutes and enjoy a comfortable ride to wherever you’re going; or
                skip the traffic entirely on one of our industry-leading scooters.
              </p>
              <Button onClick={getAppClicked} text='Get the app' padding="0.8rem 0.7rem" background="#00BE7E" color="white"/> 

              {
                getApp ? <div className=" bg-[#00BE7E] p-[7rem] absolute w-[55rem] h-[30rem] top-4">
                    <div className='flex relative'> 
                      <div>
                        <h2 className='bg-red-500 text-[3rem] font-bold leading-[3.5rem] w-[30rem]'>Request in seconds, ride in minutes.</h2>
                        <p className='text-[1.2rem] w-[25rem]'>Scan the QR code with your phone camera to download the Bolt app. Available for iOS and Android devices.</p>
                        <p  className='text-[.9rem]'>Or you can <a href="#" className='underline underline-offset-2'>request a ride online.</a></p>
                      </div>
                     {/* <div className='w-[200rem]'>
                       <img src={popUp} alt="" />
                     </div>
                        
                     
                          <div>
                            <img src={scanImg} alt="" />
                          </div> */}
                        
                     
                   
                       
                    </div>
                </div>
                : ''
              }
            </div>           
          </div>        
        </div>
      
      {/* <div className="mt-32 flex items-center pl-[6rem]">
        <div className="text-white ">
          <h1 className="text-5xl font-bold mb-8 text-[4rem] leading-[4.5rem]  w-[25rem]">Go wherever, whenever</h1>
          <p className="w-[35rem] text-[1.25rem] leading-[1.75rem] mb-8 ">
            Bolt is the all-in-one mobility app. Get picked up by a top-rated driver
            in minutes and enjoy a comfortable ride to wherever you’re going; or
            skip the traffic entirely on one of our industry-leading scooters.
          </p>
          <Button onClick={getAppClicked} text='Get the app' padding="0.8rem 0.7rem" background="#00BE7E" color="white"/> 

          {
            getApp ? <div className=" bg-red-600">
                <div>
                    <h2>Request in seconds, ride in minutes.</h2>
                    <p>Scan the QR code with your phone camera to download the Bolt app. Available for iOS and Android devices.</p>
                    <p>Or you can request a ride online</p>
                </div>
            </div>
            : ''
          }
        </div>
      </div>
       */}
      
    </header>
  );
};

export default Header;
