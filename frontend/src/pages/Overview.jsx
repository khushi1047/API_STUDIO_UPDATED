import React from 'react'
import Intro from '../components/Overview/Intro'
import UnderstandingApi from '../components/Overview/UnderstandingApi'
import Platform from '../components/Overview/Platform'

const Overview = () => {
  return (
    <div className='flex flex-col gap-12' >
      <Intro/>
      <UnderstandingApi />
      <Platform/>
    </div>
  )
}

export default Overview
