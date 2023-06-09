import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {ethers } from 'ethers';

import { money } from '../assets'
import { CustomButton, FormField } from '../components'
import { checkIfImage } from '../utils'

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: '',
  });

  const handleSubmit = () =>{

  }

  return (
    <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
      {isLoading && 'Loading...'}
      <div>
        <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white '>Start a Campaign</h1>
      </div>
      <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px]'>
        <div className='flex flex-wrap gap-[40px]'>
          <FormField 
            labelName="Your Name"
            placeholder="Joe Rogan"
            inputType="text"
            value={form.name}
            handleChange={()=>{}}
          />
          <FormField
            LabelName="Campaign Title"
            placeholder="Write a title"
            inputType="text"
            value={form.name}
            handleChange={()=>{}}
          />
        </div>
      </form>
    </div>
  )
}

export default CreateCampaign