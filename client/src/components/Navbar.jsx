import React, {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { CustomButton } from './';
import { logo, menu, search, thirdweb } from '../assets';
import { navlinks } from '../constants';

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false)

  const address = '0xabc'

  return (
    <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6'>
      <div className='lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]'>
        <input type="text" placeholder='Search for campaigns' className='flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none' />
        <div className='w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer'>
          <img src={search} alt="search" className='w-[15px] h-[15px] object-contain' />
        </div>
      </div>

      <div className='sm:flex hidden flex-row justify-end gap-4'>
        <CustomButton 
          btnType="button"
          title={address ? 'Create a campaign' : 'Connect'}
          styles={address ? 'bg-[#1dc071]':'bg-[#8c6dfd]'}
          handleOnClick={()=> {
            if(address) navigate('create-campaign')
            else 'connect()'
          }}
        />

        <Link to="/profile">
          <div className='w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer'>
            <img src={thirdweb} alt="user" className='w-[60%] h-[60%] object-contain' />
          </div>
        </Link>
      </div>

      {/* Small screen navigation */}
          <div className='sm:hidden flex justfy-between items-center relative'>
            <div className='w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer'>
              <img src={thirdweb} alt="user" className='w-[60%] h-[60%] object-contain' />
            </div>

          <img 
            src={menu} 
            alt="menu" 
              className='w-[34px] h-[34px] object-contain cursor-pointer'
              onClick={() => setToggleDrawer(!toggleDrawer)}
          />
          <div className={`absolute top-[50px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer} ? '-translate-y-[100vh]' : 'translate-y-0]' transition-all duration-700`}></div>
            <ul className='mb-4'>
              {navlinks.map((link) => (
                <li>
                  
                </li>
              ))}
            </ul>
          </div>

    </div>
  )
}

export default Navbar