import React, { useState } from 'react'
import HeroSectionTab from './HeroSectionTab'
import { BiChat } from 'react-icons/bi';

const HeroSection = () => {

  const [currentTab, setCurrentTab] = useState('1');

  const [tabs, setTabs] = useState([
    {
        Tab: 'For HR Managers',
        value: '1',
        tab_color: 'blue-600',
        'box-shadow':  "40px 40px #A4C7FF, 80px 80px #81B2FF",
        'align': 'place-self-start',
    },
    {
        Tab: 'For Line Managers',
        value: '2',
        tab_color: 'violet-600',
        'box-shadow': "-40px 40px #8A70B0, 40px 80px #69489A",
        'align': 'place-self-center',
    },
    {
        Tab: 'For Employees',
        value: '3',
        tab_color: 'orange-600',
        'box-shadow': "-40px 40px #FFC58A, -80px 80px #FFAE5C",
        'align': 'place-self-end',
    },
  ])

  const onTabChangeHandler = (e) => {
    const value = e.target.getAttribute('data-value');
    console.log('Clicked value:', value);
    setCurrentTab(value);
  }

  console.log('updated value', currentTab)

  return (
    <div className="grid grid-cols-12 justify-items-center md:px-24 lg:px-64 pt-20 gap-6 ">
        <span class=" col-span-12 w-fit rounded-full py-2 px-6 text-[#FC1777] text-lg font-medium me-2 rounded border border-[#FC1777]">EMPOWER EVERY ROLE</span>
        <h1 className=' col-span-12 text-6xl font-bold w-fit text-secondary'>Triple The Benefits!</h1>

        <section className='col-span-12 grid gap-5 grid-cols-12 place-items-center'>
            <div className="col-span-3 divide-y divide-blue-200 text-lg text-secondary">
                <div className="flex p-4 gap-2 align-self">
                  <div className="text-4xl"><BiChat /></div>
                  <div className="font-semibold">Streamline Workforce Management </div>
                </div>
                <div className="flex p-4 gap-2 align-self">
                  <div className="text-4xl"><BiChat /></div>
                  <div className="font-semibold">Streamline Workforce Management </div>
                </div>
                <div className="flex p-4 gap-2 align-self">
                  <div className="text-4xl"><BiChat /></div>
                  <div className="font-semibold">Streamline Workforce Management </div>
                </div>
            </div>

            <div className="col-span-9 w-full ">
                <div className=" place-self-start w-full">
                  <HeroSectionTab tabs={tabs} setCurrentTab={setCurrentTab} currentTab={currentTab} />
                  <div className="grid">
                  {
                    tabs?.map((tab) => {
                      return (
                        <div className={` w-[90%] ${tab?.align} ${currentTab === tab?.value ? 'visible' : 'hidden'}  mt-12 p-7 rounded-3xl border-blue-200 border-2 divide-y divide-blue-200`}
                          // shadow-[40px_40px_rgba(0,_98,_90),_80px_80px_rgba(0,_98,_90)]"
                          // style={{
                          //   boxShadow: tab?.['box-shadow']
                          // }}
                          style={{
                            transition: 'box-shadow 0.5s ease-in-out', // Transition for box-shadow
                            boxShadow:
                              currentTab === tab?.value
                                ? tab?.['box-shadow'] || '0px 4px 15px rgba(0, 98, 90, 0.3)' // Add a default box-shadow if not defined
                                : '0px 0px 0px rgba(0, 0, 0, 0)', // No shadow when not active
                          }}
                  
                        >
                          <p className='text-lg font-poppins pb-8'>Handle employee information digitally on our user-friendly platform. With automation, accuracy is guaranteed for reliable record-keeping. </p>
                          <p className='text-lg font-poppins pt-8 pb-8'>Handle employee information digitally on our user-friendly platform. With automation, accuracy is guaranteed for reliable record-keeping. </p>
                          <p className='text-lg font-poppins pt-8'>Handle employee information digitally on our user-friendly platform. With automation, accuracy is guaranteed for reliable record-keeping. </p>
                        </div>
                      )
                    })
                  }
                </div>
                </div>
                
                
                  
            </div>
        </section>
    </div>
  )
}

export default HeroSection