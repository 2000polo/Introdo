import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import TabItem from './TabItem'

const HeroSectionTab = ({currentTab, setCurrentTab, tabs}) => {

    const onTabChangeHandler = (e) => {
        const value = e.target.getAttribute('data-value');
        setCurrentTab(value);
    }

  return (
    <div class="mt-6">
        <ul class="flex gap-2 w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                {
                    tabs?.map((tab) => {
                        return <TabItem tab={tab} onTabChangeHandler={onTabChangeHandler} currentTab={currentTab} />;
                    })
                }
        </ul>
    </div>
  )
}

export default HeroSectionTab