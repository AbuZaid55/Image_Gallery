import React from 'react'

const Preloader = ({preloader}) => {
  return (
    <div id='preloader' style={{display:`${(preloader)?'':'none'}`}}>
      <img src="./Images/preloader.gif" alt="Preloader" />
    </div>
  )
}

export {
  Preloader 
} 
