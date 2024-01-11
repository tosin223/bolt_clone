import { useState } from 'react';
import downArrow from '../../asset/arrow-down.png'
import naija from '../../asset/naija.png'
import menu from '../../asset/menu.png'
import Button from '../shared/Button';
const Navbar = () => {
  const[click, setClick] = useState(false)
  const[signUp, setSignUp] = useState(false)
  const clicked = ()=> {
    setClick(!click)
  }
  const signedUp = ()=> {
    setSignUp(!signUp)
  }

  return (
      <nav className=" w-full  relative ">
        <div className='max-w-[1110px] py-[1rem] px-[1rem] bg-transparent mx-auto flex justify-between items-center '>
          <div className='cursor-pointer'>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjkiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01NS4yNjIgMHYzMC4wNzRoLTcuMTM2VjEuNTA0TDU1LjI2MiAwek0zNC45NDUgMzIuOTI0YzEuOTcgMCAzLjU2OCAxLjU4NCAzLjU2OCAzLjUzOCAwIDEuOTU0LTEuNTk4IDMuNTM4LTMuNTY4IDMuNTM4cy0zLjU2OC0xLjU4NC0zLjU2OC0zLjUzOGMwLTEuOTU0IDEuNTk3LTMuNTM4IDMuNTY4LTMuNTM4em0wLTI0LjM4M2M2LjA3NSAwIDExLjAxIDQuODg0IDExLjAxIDEwLjkxOCAwIDYuMDM1LTQuOTM1IDEwLjkyLTExLjAxIDEwLjkyLTYuMDg1IDAtMTEuMDEtNC44ODUtMTEuMDEtMTAuOTIgMC02LjAzNCA0LjkzNS0xMC45MTggMTEuMDEtMTAuOTE4em0wIDE0LjQ1NmMxLjk3MiAwIDMuNTY4LTEuNTgyIDMuNTY4LTMuNTM4IDAtMS45NTUtMS41OTYtMy41MzgtMy41NjgtMy41MzhzLTMuNTY4IDEuNTgzLTMuNTY4IDMuNTM4YzAgMS45NTYgMS41OTYgMy41MzggMy41NjggMy41Mzh6bS0yMi40NDggMGMxLjIzIDAgMi4yMy0uOTkyIDIuMjMtMi4yMWEyLjIyNCAyLjIyNCAwIDAwLTIuMjMtMi4yMTJINy4xNDZ2NC40MjJoNS4zNTF6TTcuMTQ2IDcuMDc3djQuNDIyaDMuOTY0YzEuMjI5IDAgMi4yMy0uOTkzIDIuMjMtMi4yMTJhMi4yMjQgMi4yMjQgMCAwMC0yLjIzLTIuMjFINy4xNDZ6bTExLjkyMiA3LjA5NWMxLjcyNCAxLjY5IDIuNzk1IDQuMDMgMi43ODUgNi42MTQgMCA1LjEzLTQuMTkyIDkuMjg4LTkuMzY2IDkuMjg4SDBWMGgxMS4xYzUuMTczIDAgOS4zNjUgNC4xNTcgOS4zNjUgOS4yODcgMCAxLjc5LS41MDUgMy40Ny0xLjM5NyA0Ljg4NXpNNjguNzQgMTYuMDJoLTMuNTU4djUuNTUzYzAgMS42OC41NDUgMi45MTggMS45NzIgMi45MTguOTIyIDAgMS41OTYtLjIwNiAxLjU5Ni0uMjA2djUuMjA5cy0xLjQ3Ny44ODQtMy40NzkuODg0aC0uMDg5Yy0uMDkgMC0uMTY4LS4wMS0uMjU4LS4wMWgtLjA2OWMtLjA0IDAtLjA5LS4wMS0uMTI5LS4wMS0zLjk4NC0uMjA2LTYuNjktMi42OTItNi42OS03LjAwN1Y1LjA0MWw3LjEzNi0xLjUwM3Y1LjQwNWgzLjU2OHY3LjA3N3oiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
              alt="" className='w-[3rem]'
            />
          </div>
          <div  className=' flex items-center'>
            <div onClick={clicked} className='flex items-center gap-[.3rem] mr-[3rem] '>
              <div>
                  <img src={naija} alt="" className='w-[1.4rem] cursor-pointer '/>
              </div>
              <div className='cursor-pointer '>
                <p className="text-white text-[14px]">
                  Nigeria <span>(EN)</span>
                </p>
              </div>
              <div>
                <img src={downArrow} alt="" className='w-[.9rem] cursor-pointer '/>
              </div>
            {
              click && <div className='w-[14.5rem] h-[14.5rem] px-[1rem] py-[2rem] rounded-2xl  bg-white absolute top-[4.5rem]'>
                  
                  <form action=""  className='' >
                    <div className='mb-5'>
                      <p className='mb-3'>Select your country</p>
                      <select name="" id="" className=' border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'>
                          <option value="">Nigeria</option>
                          <option value="">Angola</option>
                          <option value="">Azerbajan</option>
                          <option value="">Belgie</option>
                          <option value="">Bostwana</option>
                          <option value="">Cameroun</option>
                      </select>
                    </div>
                  
                    <div>
                      <p className='mb-3'>Select your language</p>
                      <select name="" id="" className='w-[100%] rounded-lg text-gray-400 bg-[#f1f1f1] py-[0.5rem] px-[.8rem]'>
                          <option value="">English</option>
                      </select>
                    </div>
                  
                  </form>
              </div> 
            }
            </div>
            
            <div className='flex items-center gap-[2.3rem]'>
                <p className='font-medium text-white text-[14px]'>Support</p>
                <Button onClick={signedUp} text='Sign up' width='5rem'/>
                {
                    signUp &&
                    <div className='w-[15rem]  px-[1rem] py-[2rem] rounded-2xl  bg-white absolute top-[4.5rem] right-36'>
                      <div>
                        <p>Become a driver</p>
                        <p>Make money on your terms</p>
                      </div>
                      <div>
                        <p>Become a courier</p>
                        <p>Deliver food and get paid weekly</p>
                      </div>
                      <div>
                        <p>Add a restaurant or store</p>
                        <p>Reach more custmers and increase your earnings</p>
                      </div>
                      <div>
                        <p>Sign up as a fleet owner</p>
                        <p>Add your fleet to bolt and boost your income</p>
                      </div>
                      <div>
                        <p>Bolt Business</p>
                        <p>Bolt product and services scaled up for any business</p>
                      </div>
                    </div> 
                  
                }
                <img src={menu} alt="" />
            </div>
          </div>

        </div>
        
    </nav>   
    //   <nav className=" bg-black flex justify-between items-center py-[1rem] px-[6rem] relative">
    //     <div className='cursor-pointer'>
    //       <img
    //         src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjkiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01NS4yNjIgMHYzMC4wNzRoLTcuMTM2VjEuNTA0TDU1LjI2MiAwek0zNC45NDUgMzIuOTI0YzEuOTcgMCAzLjU2OCAxLjU4NCAzLjU2OCAzLjUzOCAwIDEuOTU0LTEuNTk4IDMuNTM4LTMuNTY4IDMuNTM4cy0zLjU2OC0xLjU4NC0zLjU2OC0zLjUzOGMwLTEuOTU0IDEuNTk3LTMuNTM4IDMuNTY4LTMuNTM4em0wLTI0LjM4M2M2LjA3NSAwIDExLjAxIDQuODg0IDExLjAxIDEwLjkxOCAwIDYuMDM1LTQuOTM1IDEwLjkyLTExLjAxIDEwLjkyLTYuMDg1IDAtMTEuMDEtNC44ODUtMTEuMDEtMTAuOTIgMC02LjAzNCA0LjkzNS0xMC45MTggMTEuMDEtMTAuOTE4em0wIDE0LjQ1NmMxLjk3MiAwIDMuNTY4LTEuNTgyIDMuNTY4LTMuNTM4IDAtMS45NTUtMS41OTYtMy41MzgtMy41NjgtMy41MzhzLTMuNTY4IDEuNTgzLTMuNTY4IDMuNTM4YzAgMS45NTYgMS41OTYgMy41MzggMy41NjggMy41Mzh6bS0yMi40NDggMGMxLjIzIDAgMi4yMy0uOTkyIDIuMjMtMi4yMWEyLjIyNCAyLjIyNCAwIDAwLTIuMjMtMi4yMTJINy4xNDZ2NC40MjJoNS4zNTF6TTcuMTQ2IDcuMDc3djQuNDIyaDMuOTY0YzEuMjI5IDAgMi4yMy0uOTkzIDIuMjMtMi4yMTJhMi4yMjQgMi4yMjQgMCAwMC0yLjIzLTIuMjFINy4xNDZ6bTExLjkyMiA3LjA5NWMxLjcyNCAxLjY5IDIuNzk1IDQuMDMgMi43ODUgNi42MTQgMCA1LjEzLTQuMTkyIDkuMjg4LTkuMzY2IDkuMjg4SDBWMGgxMS4xYzUuMTczIDAgOS4zNjUgNC4xNTcgOS4zNjUgOS4yODcgMCAxLjc5LS41MDUgMy40Ny0xLjM5NyA0Ljg4NXpNNjguNzQgMTYuMDJoLTMuNTU4djUuNTUzYzAgMS42OC41NDUgMi45MTggMS45NzIgMi45MTguOTIyIDAgMS41OTYtLjIwNiAxLjU5Ni0uMjA2djUuMjA5cy0xLjQ3Ny44ODQtMy40NzkuODg0aC0uMDg5Yy0uMDkgMC0uMTY4LS4wMS0uMjU4LS4wMWgtLjA2OWMtLjA0IDAtLjA5LS4wMS0uMTI5LS4wMS0zLjk4NC0uMjA2LTYuNjktMi42OTItNi42OS03LjAwN1Y1LjA0MWw3LjEzNi0xLjUwM3Y1LjQwNWgzLjU2OHY3LjA3N3oiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
    //         alt="" className='w-[3rem]'
    //       />
    //     </div>
    //     <div  className=' flex items-center'>
    //       <div onClick={clicked} className='flex items-center gap-[.3rem] mr-[3rem] '>
    //         <div>
    //             <img src={naija} alt="" className='w-[1.4rem] cursor-pointer '/>
    //         </div>
    //         <div className='cursor-pointer '>
    //           <p className="text-white text-[14px]">
    //             Nigeria <span>(EN)</span>
    //           </p>
    //         </div>
    //         <div>
    //           <img src={downArrow} alt="" className='w-[.9rem] cursor-pointer '/>
    //         </div>
    //        {
    //         click && <div className='w-[14.5rem] h-[14.5rem] px-[1rem] py-[2rem] rounded-2xl  bg-white absolute top-[4.5rem]'>
                
    //             <form action=""  className='' >
    //               <div className='mb-5'>
    //                 <p className='mb-3'>Select your country</p>
    //                 <select name="" id="" className=' border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'>
    //                     <option value="">Nigeria</option>
    //                     <option value="">Angola</option>
    //                     <option value="">Azerbajan</option>
    //                     <option value="">Belgie</option>
    //                     <option value="">Bostwana</option>
    //                     <option value="">Cameroun</option>
    //                 </select>
    //               </div>
                 
    //               <div>
    //                 <p className='mb-3'>Select your language</p>
    //                 <select name="" id="" className='w-[100%] rounded-lg text-gray-400 bg-[#f1f1f1] py-[0.5rem] px-[.8rem]'>
    //                     <option value="">English</option>
    //                 </select>
    //               </div>
                
    //             </form>
    //         </div> 
    //        }
    //       </div>
          
    //       <div className='flex items-center gap-[2.3rem]'>
    //           <p className='font-medium text-white text-[14px]'>Support</p>
    //           <Button onClick={signedUp} text='Sign up' width='5rem'/>
    //           {
    //               signUp &&
    //               <div className='w-[15rem]  px-[1rem] py-[2rem] rounded-2xl  bg-white absolute top-[4.5rem] right-36'>
    //                 <div>
    //                   <p>Become a driver</p>
    //                   <p>Make money on your terms</p>
    //                 </div>
    //                 <div>
    //                   <p>Become a courier</p>
    //                   <p>Deliver food and get paid weekly</p>
    //                 </div>
    //                 <div>
    //                   <p>Add a restaurant or store</p>
    //                   <p>Reach more custmers and increase your earnings</p>
    //                 </div>
    //                 <div>
    //                   <p>Sign up as a fleet owner</p>
    //                   <p>Add your fleet to bolt and boost your income</p>
    //                 </div>
    //                 <div>
    //                   <p>Bolt Business</p>
    //                   <p>Bolt product and services scaled up for any business</p>
    //                 </div>
    //               </div> 
                 
    //           }
    //           <img src={menu} alt="" />
    //       </div>
    //     </div>
    // </nav>   
  );
};

export default Navbar;
