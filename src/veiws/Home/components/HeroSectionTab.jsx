import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import TabItem from './TabItem'

const HeroSectionTab = ({currentTab, setCurrentTab, tabs}) => {

    const onTabChangeHandler = (e) => {
        const value = e.target.getAttribute('data-value');
        console.log(value)
        setCurrentTab(value);
    }

  return (
    <div class="mt-6">
        <ul class="flex flex-row gap-2 text-sm font-medium">
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