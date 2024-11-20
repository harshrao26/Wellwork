import React from 'react'

const SmartCard = ({logo,p1}) => {
  return (
    <div className='main_smart_card'>
        <img src={logo} className='smart_card_img' alt="" />
        <p className='smart_card_desc'>{p1}</p>
    </div>
  )
}

export default SmartCard