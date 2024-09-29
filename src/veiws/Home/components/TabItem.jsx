import React, { useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

const TabItem = ({currentTab, onTabChangeHandler, tab: {Tab, value, visiblity, tab_color, tab_border}}) => {
    
    // console.log("currentTab in tab item", tab_color)

    return (
        <>
            <div data-value={value+''} onClick={onTabChangeHandler} className={` flex md:hidden ${currentTab === value ? `border-b-4 ${tab_border}` : ''} pb-1 items-center gap-1`}>
                <div data-value={value+''} className={`${currentTab === value ? `text-white ${'bg-'+tab_color}` : ' text-secondary'} p-2 rounded-full grid justify-center content-center`}>
                    <FaUser />
                </div>
                <p data-value={value+''} className={`${currentTab === value ? 'text-secondary' : 'text-secondary'} text-sm mr-6`}>{Tab}</p>
            </div>
            <div data-value={value+''} onClick={onTabChangeHandler} className={`hidden md:flex ${currentTab === value ? `bg-${tab_color}` : ' border-solid border-[1px] border-secondary'} border-solid border-[1px] rounded-full p-1 items-center gap-2`}>
                <div data-value={value+''} className={`${currentTab === value ? `bg-white ${'text-'+tab_color}` : 'bg-gray-200 text-secondary'} p-2 rounded-full w-[40px] h-[40px] grid justify-center content-center mr-2`}>
                    <FaUser />
                </div>
                <p data-value={value+''} className={`${currentTab === value ? 'text-white' : 'text-secondary'} font-base mr-6`}>{Tab}</p>
            </div>
        </>
        
    )
}

export default TabItem