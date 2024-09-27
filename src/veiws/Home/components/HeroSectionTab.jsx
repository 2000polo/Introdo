import React from 'react'
import { FaUser } from 'react-icons/fa'

const HeroSectionTab = () => {

    const Tabs = [
        {
            Tab: 'For HR Managers',
            value: 1,
            visiblity: true
        },
        {
            Tab: 'For Line Managers',
            value: 2,
            visiblity: false
        },
        {
            Tab: 'For Employees',
            value: 3,
            visiblity: false
        },
    ]


    const tabItem = ({title, value, visiblity}) => {
        return (
            <div className={`${visiblity ? 'bg-blue-600' : 'bg-white border-solid border-[1px] border-secondary'}  min-w-[150px] flex border-solid border-[1px] rounded-full p-1 items-center gap-2`}>
                <div className={`${visiblity ? 'bg-white text-blue-600' : 'bg-gray-200 text-secondary'} p-2 rounded-full w-[40px] h-[40px] grid justify-center content-center mr-2`}>
                    <FaUser />
                </div>
                <p className={`${visiblity ? 'text-white' : 'text-secondary'} font-base mr-6`}>For HR Managers</p>
            </div>
        )
    }

  return (
    <div class=" dark:border-gray-700 mt-6">
        <ul class="flex flex-wrap gap-2 -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            {/* <li class="me-2"> */}
                {
                    Tabs?.map((tab) => {
                        return tabItem(tab);
                    })
                }
            {/* </li> */}
            
        </ul>

    </div>
  )
}

export default HeroSectionTab