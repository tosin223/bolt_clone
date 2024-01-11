import Navbar from "../navbar/Navbar"
import Button from "../shared/Button"
import  city from '../../asset/cities.png'
const Cities = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <div className="w-full mt-[2rem]">
            <div  className="max-w-[1110px] mx-auto px-[1rem] flex py-[4rem] ">
                <div className="mr-[2rem]">
                    <div className="w-[18rem] mb-4">
                        <h2 className="text-[#2f313f] leading-[3.5rem] text-4xl font-bold">
                            Making cities for people, not cars
                        </h2>
                    </div> 
                    <div className="w-[28rem] mb-6">
                        <p className="text-[#2f313f] text-[1.25rem] leading-[1.75rem] font-normal">
                        By sharing our knowledge of the industry and real-time data we’re helping to improve our cities.
                        </p>
                    </div>
                    <div className=" w-[33rem]">
                        <div className="flex mb-3 w-[28rem]">
                            <p  className="w-6 mr-3 h-6 bg-[#27b973] text-white flex justify-center
                            items-center rounded-full text-xs font-semibold ">1</p>
                            <div>
                                <div className="text-[18px] w-[18rem] text-[#2f313f] font-medium leading-[24px] mb-2"><h5>Sharing best practices</h5></div>
                                <div className="w-[25rem]">
                                    <p className="text-[#121D2B99]">
                                        We’re able to provide insights that help local authorities make their cities more connected and liveable.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex mb-3">
                            <p  className="w-6 mr-3 h-6 bg-[#27b973] text-white flex justify-center
                            items-center rounded-full text-xs font-semibold ">1</p>
                            <div>
                                <div className="text-[18px] w-[18rem] text-[#2f313f] font-medium leading-[24px] mb-2"><h5>One app, many ways to move</h5></div>
                                <div className="w-[28rem]">
                                    <p className="text-[#121D2B99]">
                                    With multiple transport services inside a single app, getting around safely, in a more sustainable way, has never been easier.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex mb-3">
                            <p  className="w-6 mr-3 h-6 bg-[#27b973] text-white flex justify-center
                            items-center rounded-full text-xs font-semibold ">1</p>
                            <div>
                                <div className="text-[18px] w-[18rem] text-[#2f313f] font-medium leading-[24px] mb-2"><h5>Less is more</h5></div>
                                <div className="w-[28rem]">
                                    <p className="text-[#121D2B99]">
                                    Shared transport can transform our cities by lowering emissions, reducing congestion, and the demand for parking spaces.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <Button background='#061A370A' fontWeight='600' color='#2f313f' fontSize='1rem'  width='9rem' text=' Learn More'/>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={city} alt="" />
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Cities