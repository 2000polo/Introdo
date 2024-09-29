import React, { useEffect, useState } from 'react'
import HeroSectionTab from './HeroSectionTab'
import { BiChat } from 'react-icons/bi';

const HeroSection = () => {

  const [currentTab, setCurrentTab] = useState(1);
  const [progress, setProgress] = useState(0); // Tracks the progress percentage

  useEffect(() => {
    // Set interval to update progress every 100ms
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          // Once progress reaches 100%, reset progress and switch tab
          setCurrentTab((prevTab) => (prevTab < 3 ? prevTab + 1 : 1)); // Switch between tabs 1, 2, 3
          return 0; // Reset progress
        }
        return prevProgress + 2; // Increment progress by 2% every 100ms
      });
    }, 100); // 100ms interval (to make 5 seconds for full progress)

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // console.log('printing the interval progress', progress)

  const tabs = [
    {
        Tab: 'For HR Managers',
        value: 1,
        tab_color: 'blue-600',
        'box-shadow':  "40px 40px #A4C7FF, 80px 80px #81B2FF",
        'box-shadow-min':  "5px 5px #A4C7FF, 10px 10px #81B2FF",
        'align': 'place-self-start',
        'tab_border': 'border-blue-600'
    },
    {
        Tab: 'For Line Managers',
        value: 2,
        tab_color: 'violet-600',
        'box-shadow': "-40px 40px #8A70B0, 40px 80px #69489A",
        'box-shadow-min': "-5px 5px #8A70B0, 10px 10px #69489A",
        'align': 'place-self-center',
        'tab_border': 'border-violet-600'
    },
    {
        Tab: 'For Employees',
        value: 3,
        tab_color: 'orange-600',
        'box-shadow': "-40px 40px #FFC58A, -80px 80px #FFAE5C",
        'box-shadow-min': "-5px 5px #FFC58A, -10px 10px #FFAE5C",
        'align': 'place-self-end',
        'tab_border': 'border-orange-600'
    },
  ]

  return (
    <div className="grid grid-cols-12 justify-items-center px-1 md:px-24 lg:px-64 py-20 gap-6 ">
        <span class=" col-span-12 w-fit rounded-full py-2 px-6 text-[#FC1777] text-semibold md:text-lg font-medium me-2 rounded border-2 border-[#FC1777]">EMPOWER EVERY ROLE</span>
        <h1 className=' col-span-12 text-4xl md:text-6xl font-bold w-fit text-secondary'>Triple The Benefits!</h1>
        
        <div className="hidden md:block col-span-2 md:col-span-3">
          {/* <HeroSectionTab tabs={tabs} setCurrentTab={setCurrentTab} currentTab={currentTab} /> */}
        </div>
        <div className="place-self-center md:place-self-start col-span-12 md:col-span-9">
          <HeroSectionTab tabs={tabs} setCurrentTab={setCurrentTab} currentTab={currentTab} setProgress={setProgress} />
        </div>

        <section className='col-span-12 grid gap-5 grid-cols-12 place-items-center mt-6'>
            <div className="flex md:flex-col rotate-[-90deg] md:rotate-0 col-span-2 md:col-span-3 divide-y divide-blue-200 text-base md:text-lg text-secondary">
                <div className="flex p-4 gap-2 align-self">
                  <div className="text-4xl"><BiChat /></div>
                  <div className="font-semibold min-w-[160px]">Streamline Workforce Management </div>
                </div>
                <div className="flex p-4 gap-2 align-self">
                  <div className="text-4xl"><BiChat /></div>
                  <div className="font-semibold min-w-[160px]">Streamline Workforce Management </div>
                </div>
                <div className="flex p-4 gap-2 align-self">
                  <div className="text-4xl"><BiChat /></div>
                  <div className="font-semibold min-w-[160px]">Streamline Workforce Management </div>
                </div>
            </div>

            <div className="col-span-10 md:col-span-9 w-full ">
                <div className="relative place-self-start w-full">
                  
                  <div className="relative md:grid hidden ">
                    
                    {
                      tabs?.map((tab) => {
                        return (
                          <div className={`relative w-[90%] ${tab?.align} ${currentTab === tab?.value ? 'visible' : 'hidden'}
                          md:mt-2 p-7 rounded-3xl border-blue-200 border-2 divide-y divide-blue-200 text-primary`}
                            
                            style={{
                              boxShadow: tab?.['box-shadow']
                            }}
                          >
                            <div className="w-[90%] top-0 left-0 overflow-hidden ">
                              <div
                                className="h-1 bg-gradient-to-r from-[#FC1777] to-[#3A86FF] rounded-full transition-all rounded-full ease-in-out"
                                style={{ width: `${progress}% ` }}
                              ></div>
                            </div>
                            <p className='text-lg font-poppins pb-8'>Handle employee information digitally on our user-friendly platform. With automation, accuracy is guaranteed for reliable record-keeping. </p>
                            <p className='text-lg font-poppins pt-8 pb-8'>Handle employee information digitally on our user-friendly platform. With automation, accuracy is guaranteed for reliable record-keeping. </p>
                            <p className='text-lg font-poppins pt-8'>Handle employee information digitally on our user-friendly platform. With automation, accuracy is guaranteed for reliable record-keeping. </p>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="grid md:hidden ">
                    {
                      tabs?.map((tab) => {
                        return (
                          <div className={`w-[95%] ${tab?.align} ${currentTab === tab?.value ? 'visible' : 'hidden'}
                          md:mt-2 p-7 rounded-3xl border-blue-200 border-2 divide-y divide-blue-200 text-primary`}
                            
                            style={{
                              boxShadow: tab?.['box-shadow-min']
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