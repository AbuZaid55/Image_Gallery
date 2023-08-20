import React from 'react'

const Preloader = ({preloader}) => {
  return (
    <div id='preloader' style={{display:`${(preloader)?'':'none'}`}}>
      <img src="/Image_Gallery/Images/preloader.gif" alt="Preloader" />
    </div>
  )
}

export {
  Preloader 
} 
