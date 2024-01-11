import footerLogo from '../../asset/footer-logo.png'
import Navbar from '../navbar/Navbar'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Button from '../shared/Button';






const Footer = () => {
  return (
    <footer >
        {/* <Navbar /> */}
        <div className='w-full   h-screen'>
            <div className='max-w-[1110px] py-[4rem] mx-auto'>
                <div className='flex py-[3rem] px-[1rem]'>
                    <div className='w-[25%]'>
                        <img src={footerLogo} className='mb-[1rem]' alt="" />
                        <div>
                            <button className='bg-[#f5f6f7] block px-6 py-3 rounded-3xl mb-4'>Nigeria</button>
                        </div>
                        <div >
                             <button className='bg-[#f5f6f7] px-6 py-3 rounded-3xl'>English</button>
                        </div>
                       
                    </div>
                    <div className='w-[25%]'>
                        <h5 className='text-[1.25rem] mb-[1rem] text-[#2f313f] font-semibold leading-[1.5rem]'>Bolt</h5>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>Rides</p>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>Food Delivery</p>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>Grocery Delivery</p>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>Scooters</p>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>Car-sharing</p>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>Business</p>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>Airport</p>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>Cities</p>
                    </div>
                    <div className='w-[25%]'>
                        <h5 className='text-[1.25rem] mb-[1rem] text-[#2f313f] font-semibold leading-[1.5rem]'>Partner with Bolt</h5>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>Sign up as a driver</p>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>Sign up as a courier</p>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>Fleets</p>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>Franchise</p>
                    </div>
                    <div className='w-[25%]'>
                        <h5 className='text-[1.25rem] mb-[1rem] text-[#2f313f] font-semibold leading-[1.5rem]'>Partner with Bolt</h5>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>About us</p>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>Career</p>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>Green plan</p>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>Press</p>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>Blog</p>
                        <p className='py-[.5rem] text-[#2f313f] leading-[1.5rem] cursor-pointer hover:text-[#27b973] ease-in duration 400'>Brand guidelines</p>
                    </div>    
                </div>
                <div className='w-[100%] flex justify-between py-[1.5rem] px-[1rem] items-center'>
                       <div className='flex gap-3'>
                            <div className='text-[1.2rem] flex justify-center items-center rounded-full w-[2rem] h-[2rem] bg-[#f5f6f7] text-[#2f313f]'>
                                <FaFacebook />
                            </div>
                            <div className='text-[1.2rem] flex justify-center items-center rounded-full w-[2rem] h-[2rem] bg-[#f5f6f7] text-[#2f313f]'>
                                <FaTwitter />
                            </div>
                            <div className='text-[1.2rem] flex justify-center items-center rounded-full w-[2rem] h-[2rem] bg-[#f5f6f7] text-[#2f313f]'>
                                <FaInstagramSquare />
                            </div>
                            <div className='text-[1.2rem] flex justify-center items-center rounded-full w-[2rem] h-[2rem] bg-[#f5f6f7] text-[#2f313f]'>
                                <FaLinkedinIn />
                            </div>
                            <div className='text-[1.2rem] flex justify-center items-center rounded-full w-[2rem] h-[2rem] bg-[#f5f6f7] text-[#2f313f]'>
                                <FaTiktok /> 
                            </div>
                       </div>
                        <div className='flex gap-3'>
                            <Button background='#f5f6f7'  text='Get the bolt app' width='8rem' borderRadius='1rem' padding='0.3rem 0.5rem'/>
                            <Button background='#f5f6f7' text='Get the bolt food app'  width='11rem'/>
                            <Button background='#f5f6f7' text='Request ride online' width='10rem'/>
                       </div> 
                </div>
                <hr />
                <div className='flex justify-between items-center px-[1rem] pt-[1rem]'>
                    <div className='text-[#747A82]'>
                        <p> <span>&#169;</span>2023 Bolt Technology OÜ</p>

                    </div>
                    <div className='text-[#747A82]'>
                        <a className='p-[1rem] ' href="">Suppliers</a>
                        <a className='p-[1rem] ' href="">Terms and Conditions</a>
                        <a className='p-[1rem] ' href="">Privacy</a>
                        <a className='p-[1rem] ' href="">Cookies</a>
                        <a className='p-[1rem] ' href="">Secuirity</a>
                    </div>
                </div>

            </div>
            
        </div>
            
    </footer>
  )
}

export default Footer