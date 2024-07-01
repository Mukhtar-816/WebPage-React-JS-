import React from 'react'
import code from '../assets/code.jpg'
import {checklistItems} from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Workflow = () => {
  return (
    <div className='relative flex-col items-center lg:mt-5 p-5 '>
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text:6xl tracking-wide mt-10 lg:mt-20">
          Accelerate Your
          <span className="bg-gradient-to-r from-violet-400 to-purple-950 text-center text-transparent bg-clip-text">
            {' '} Coding Workflow
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap items-center mt-10 justify-center">
        <div className='p-2 w-20 lg:w-2/5'>
        <img src={code} alt='code' />
        </div>
        <div className="pt-10 w-full lg:w-1/2">
        {checklistItems?.map((item, index) => (
          <div key={index} className='flex mb-12'>
            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
              <CheckCircle2/> 
            </div>
            <div>
              <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
              <p className='text-md text-neutral-500'>{item?.description}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Workflow;
