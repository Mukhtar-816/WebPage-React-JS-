import React from 'react'
import { pricingOptions } from '../constants'
import { CheckCircle2 } from 'lucide-react'

const Pricing = () => {
    return (
        <div className='flex flex-col mt-10 lg:mt-20'>
            <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl tracking-wider my-8">Pricing</h2>
            <div className="flex flex-wrap mt-5">
                {pricingOptions?.map((item, index) => (
                    <div className="items-center p-2 w-full sm:w-1/2 lg:w-1/3" key={index}>
                        <div className="p-10 border border-neutral-700 rounded-xl">
                            <p className=" text-4xl sm:5xl lg:6xl mb-8">{item?.title}
                                {item?.title === 'Pro' && <span className='bg-gradient-to-r from-violet-400 to-purple-950 text-transparent bg-clip-text text-xl mb-4 ml-2'>(Most Popular)</span>}
                            </p>
                            <p className='mb-8'>
                            <span className='text-5xl mt-6 mr-2'>{item?.price}</span>
                            <span className='text-neutral-400 tracking-tight'>/Month</span>
                            </p>
                            <ul>
                                {item?.features?.map((item, index) => (<li className='item-center flex mt-8' key={index}><CheckCircle2/><span className='ml-2'>{item}</span></li>))}
                            </ul>
                            <a href="$" className= "inline-flex justify-center items-center text-center w-full h-12 mt-20 p-5 tracking-tight text-xl hover:bg-violet-900 border border-violet-900 transition duration-200 rounded-md">Subscribe</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing
