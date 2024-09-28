import React, { useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

const TabItem = ({currentTab, onTabChangeHandler, tab: {title, value, visiblity, tab_color}}) => {
    
    console.log("currentTab in tab item", currentTab)

    return (
        <div data-value={value} onClick={onTabChangeHandler} className={`${currentTab === value ? 'bg-'+tab_color : 'bg-white border-solid border-[1px] border-secondary'}  min-w-[150px] flex border-solid border-[1px] rounded-full p-1 items-center gap-2`}>
            <div data-value={value} className={`${currentTab === value ? `bg-white ${'text-'+tab_color}` : 'bg-gray-200 text-secondary'} p-2 rounded-full w-[40px] h-[40px] grid justify-center content-center mr-2`}>
                <FaUser />
            </div>
            <p data-value={value} className={`${currentTab === value ? 'text-white' : 'text-secondary'} font-base mr-6`}>For HR Managers</p>
        </div>
    )
}

export default TabItem