import React, { useEffect, useState } from 'react'
import gridImage1 from '../../../assets/gridImage1.png';
import avatar1 from '../../../assets/avatar1.png';
import gridImage3 from '../../../assets/gridImage3.png';
import gridImage4 from '../../../assets/gridImage4.png';
import gridImage5 from '../../../assets/gridImage5.png';
import { FaAngleUp } from 'react-icons/fa';
import { IoChevronUp } from 'react-icons/io5';
import { FcApproval } from 'react-icons/fc';

const PerksSection = () => {
    const [seconds, setSeconds] = useState(0); // Total seconds elapsed
    const totalTime = 60; // 60 seconds (from 14:00 to 14:59)

    useEffect(() => {
        if (seconds < totalTime) {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000); // Update every second
        return () => clearInterval(timer);
        }
    }, [seconds]);

    // To Convert seconds to minutes (starting from 14 as per in the feature desc doc)
    const minutes = Math.floor(14 + seconds / 60); 
    // To Get the current second (0-59)
    const currentSeconds = seconds % 60; 

    // Calculate progress percentage based on the seconds elapsed
    const progressPercentage = (seconds / totalTime) * 100;


  return (
    <div className='grid grid-cols-12 justify-items-center px-3 md:px-24 lg:px-64 pt-20 gap-6'>
        <span class=" col-span-12 w-fit rounded-full py-2 px-6 text-[#FC1777] text-semibold md:text-lg font-medium me-2 rounded border-2 border-[#FC1777]">WHY INTRODO?</span>
        <h1 className=' col-span-12 text-4xl md:text-6xl font-bold w-fit text-secondary'>Unlock The Perks!</h1>

        <div className="col-span-12 ">
                <div className="my-10 h-full grid gap-8 sm:mt-16 grid-cols-3 grid-rows-3">

                    <div className="col-span-3 lg:col-span-1 lg:row-span-3">
                        {/* <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div> */}

                        <div className=" text-white bg-gradient-to-br from-amber-400 to-pink-500 p-8 flex h-full flex-col rounded-3xl">
                            <div className=" pb-3 ">
                                <p className="mt-2 md:text-4xl font-semibold text-xl tracking-tight text-gray-950 max-lg:text-center">
                                    Global Payroll Simplicity
                                </p>
                                <p className="mt-2 max-w-lg font-base text-lg text-sm/6 max-lg:text-center">
                                    Manage multi-currency payroll across the GCC and beyond, in English & Arabic. Seamless onboarding included!                          </p>
                            </div>
                            <div className="flex w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <img
                                    className="size-full object-cover object-top self-end"
                                    src={gridImage1}
                                    alt=""
                                />
                            </div>
                        </div>

                    </div>

                    <div className="col-span-3 lg:col-span-1 flex gap-8 flex-col justify-between lg:row-span-3 lg:row-start-1 lg:col-start-2 h-full  ">
                        <div className="h-full bg-gradient-to-b from-[#FD4190] to-[#A8C5FF] rounded-3xl  text-white">
                            {/* <div className="absolute inset-px rounded-lg max-lg:rounded-t-[2rem]"></div> */}
                            <div className="p-8 relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                <div className="absolute left-8 right-8 bottom-0 top-16 bg-white p-10 rounded-t-2xl ">
                                    {/* <p className="mt-2 text-3xl font-semibold tracking-tight max-lg:text-center">
                                    Performance
                                    </p>
                                    <p className="mt-2 max-w-lg font-base text-lg text-sm/6 max-lg:text-center">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                                    </p> */}
                                    <div className="flex text-gray-800 gap-2 border-b-2 pb-1 lg:pb-3">
                                        <img className='w-[48px] h-[48px]' src={avatar1} alt="" />
                                        <div className="">
                                            <p className='font-semibold'>Fathima Saleem</p>
                                            <p className='text-sm text-gray-400'>(Aug 07, 2024 - Aug 15, 2024)</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-center text-gray-800 gap-2 pt-4 lg:pt-8">
                                        <p className='text-base text-gray-400'>Hours Worked</p>
                                        <div className="flex flex-col text-center">
                                            {
                                                minutes === 15 ?
                                                <div className="flex items-center gap-2 mb-3 justify-center">
                                                    <FcApproval fontSize={24} />
                                                    <p className='font-bold text-2xl mb-0 '>Completed</p>
                                                </div>
                                                : 
                                                <p className='font-bold text-2xl mb-3'>{minutes}:{currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds} Hours</p>
                                            }
                                            
                                            <div class="w-full h-2 bg-blue-200 rounded-full ">
                                                <div style={{
                                                    width: `${progressPercentage}%`
                                                }} class="h-full text-center text-xs text-white bg-gradient-to-r from-[#FC1777] to-[#3A86FF] rounded-full transition-all rounded-full ease-in-out">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex font-base items-center absolute py-2 px-6 right-16 top-11 rounded-full bg-[#3F1C74] text-white">
                                    <p className=' ' >45%</p>
                                    <div className="pl-2 text-lg">
                                        <IoChevronUp />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="h-[400px] bg-gradient-to-b from-[#FEBED9] to-[#C8DDFF] rounded-3xl  ">
                            <div className=" flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className=" pt-8 sm:px-8 sm:pt-8 text-primary text-center">
                                <p className=" md:text-4xl font-semibold text-xl tracking-tight text-gray-950 max-lg:text-center">Smart Insights</p>
                                <p className="mt-2 max-w-lg font-base text-lg text-sm/6 max-lg:text-center tracking-wide">
                                Craft customized reports and dashboards to steer data-driven decisions. All your historic employee data within one end-to-end solution.
                                </p>
                            </div>
                            
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 lg:col-span-1 relative lg:col-start-3 lg:row-start-1 lg:row-span-3 overflow-hidden ">
                        <div className=" overflow-hidden text-white bg-gradient-to-br from-[#69489A] to-[#5E9CFF] p-8 flex h-full flex-col rounded-3xl">
                            <div className=" pb-3 ">
                                <p className="mt-2 md:text-4xl font-semibold text-xl tracking-tight text-gray-950 max-lg:text-center">
                                    Global Payroll Simplicity
                                </p>
                                <p className="mt-2 max-w-lg font-base text-lg text-sm/6 max-lg:text-center">
                                    Manage multi-currency payroll across the GCC and beyond, in English & Arabic. Seamless onboarding included!                          </p>
                            </div>
                            <div className=" absolute bottom-0 right-0 left-0 flex w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <img
                                    className="size-full object-cover object-top self-end"
                                    src={gridImage3}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 w-full col-span-12 mt-5 lg:mt-10 pt-8">
            
            <div className="bg-gradient-to-br from-[#FD6BA8] to-[#5E9CFF] rounded-3xl w-full overflow-hidden ">
                <div className="h-[450px] md:h-full text-white relative py-8 px-8 sm:pt-8 flex flex-col lg:flex-row flex-row-reverse text-end rounded-[calc(theme(borderRadius.lg)+1px)]">
                    <div className="lg:w-[65%] text-start">
                        <p className=" md:text-4xl font-semibold text-xl tracking-tight text-gray-950 max-lg:text-center">Rock-Solid Compliance</p>
                        <p className="mt-2 max-w-lg text-gray-200 font-base md:text-lg text-sm/6 max-lg:text-center tracking-wide">
                        Stay GCC law-aligned amidst changing regulations. Worry-free compliance across locations, preventing penalties and legal hassles.                        </p>
                    </div>
                    <div className="absolute lg:h-full bottom-0 lg:top-2 right-0">
                        <img
                            className="h-[250px] size-full object-fit object-top self-end"
                            src={gridImage4}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#8A70B0] to-[#482084] rounded-3xl w-full overflow-hidden ">
                <div className="h-[350px] md:h-full text-white relative py-8 px-16 sm:pt-8 flex flex-col lg:flex-row flex-row-reverse text-end rounded-[calc(theme(borderRadius.lg)+1px)]">
                    
                    <div className="absolute lg:h-full bottom-0 right-0 left-0">
                        <img
                            className="h-full size-full object-cover object-top self-end"
                            src={gridImage5}
                            alt=""
                        />
                    </div>
                    <div className="lg:w-[100%]">
                        <p className=" md:text-4xl font-semibold text-xl tracking-tight text-gray-950 max-lg:text-center">Cloud-Powered Savings</p>
                        <p className="mt-2 max-w-lg text-gray-200 font-base md:text-lg text-sm/6 max-lg:text-center tracking-wide">
                        Centralize people management with one HR software. Save time and cut costs by leveraging cloud technology.                         </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default PerksSection;