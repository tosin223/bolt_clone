import Button from "../shared/Button"
import appImg1 from '../../asset/appImg1.png'
import appImg2  from '../../asset/appImg2.png'
import { useState } from "react"
const Apps = () => {
    const[step, setStep] = useState(0)
    const nextStep = ()=> {
        setStep(step + 1)
        if(step === 1) {
            setStep(step)
        }
    }
    const prevStep = ()=> {
        setStep(step - 1)
        if(step === 0) {
            setStep(step)
        }
    }
  return (
    <div className='w-full min-h-screen'>
        <div className='max-w-[1110px] mx-auto px-[1rem] '>
            <div className='mb-8'>
                <h2 className='text-[48px] leading-[56px] font-semibold text-center text-[#2f313f]'>Download our apps</h2>
            </div>
            <div className='text-center mb-8'>
                <button onClick={nextStep} className='px-[1rem] py-[.4rem] rounded-full text-[14px] text-[#fafafb] bg-[#2e313f] mr-3'>Rides</button>
                <button onClick={prevStep} className='px-[1rem] py-[.4rem] rounded-full text-[14px] text-[#fafafb] bg-[#2e313f]'>Delivery</button>
            </div>
            <div className='bg-[#009861] flex justify-between rounded-2xl'>
                <div className="flex items-center ">
                    <div className="ml-[5rem] ">
                        <div className="w-[28rem] mb-8">
                            {
                                step === 0 &&  <h3 className="text-[40px] leading-[48px] font-semibold text-white">Request in seconds, ride in minutes.</h3>
                            }
                            {
                                step === 1 &&  <h3 className="text-[40px] leading-[48px] font-semibold text-white">Your favourite food, delivered fast.</h3>
                            }
                           
                        </div>
                        <div className=" mb-8">
                            <p className="text-white text-[20px] leading-[28px]">Available for iOS and Android devices.</p>
                        </div>
                        <div>
                        <Button background='white' fontWeight='600' color='#2f313f' fontSize='1rem' width='8rem' text='Get the app'/>  
                        </div>
                        
                    </div>
                </div>
                <div className="w-[33rem]">
                    {
                        step === 0 && <img src={appImg1} alt="" />
                    }
                    {
                        step === 1 && <img src={appImg2} alt="" />
                    }
                    
                </div>
            </div>
                
        </div>
    </div>
  )
}

export default Apps