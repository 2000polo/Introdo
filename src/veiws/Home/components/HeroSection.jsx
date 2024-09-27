import React from 'react'
import HeroSectionTab from './HeroSectionTab'

const HeroSection = () => {
  return (
    <div className="grid justify-items-center md:px-24 lg:px-64 pt-20 gap-6 ">
        <span class=" w-fit rounded-full py-2 px-6 text-[#FC1777] text-lg font-medium me-2 rounded border border-[#FC1777]">EMPOWER EVERY ROLE</span>
        <h1 className='text-6xl font-bold w-fit text-secondary'>Triple The Benefits!</h1>

        <section className='grid grid-cols-12'>
            <div className="col-span-4">
                
            </div>
            <div className="col-span-8">
                <HeroSectionTab />
                <div className="shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
                    Tab
                </div>
            </div>
        </section>
    </div>
  )
}

export default HeroSection