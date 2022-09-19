import React from 'react'
import LoadingBar from 'react-top-loading-bar'

const TopLoader = ({progress}) => {

  const colorArr = ['#F7EC09','#06FF00','#00EAD3','#2EC1AC','#F9B208','#f11946']

  return (
    <LoadingBar
        color={colorArr[Math.floor(Math.random()*6)]}
        progress={progress}
        waitingTime={400}
        transitionTime={500}
        className="mt-20"
    />
  )
}

export {TopLoader}