import React from 'react'

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }) => {
  return (
    <label className='flex-1 w-fll flex flex-col'>
        {labelName && (
            <span className='font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]'>{labelName}</span>
        )}
        {isTextArea ? (
            <textarea />
        ):(
            <input 
                required
                value={value}
                onChange={handleChange}
                type={inputType}
                step="0.1"
                placeholder={placeholder}
            />
        )}
    </label>
  )
}

export default FormField