import React from 'react'
import GetInTouch from './GetInTouch'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Partnership = ({ setPartner }) => {
  return (
    <div className='refer_main_component'>
      <div className="refer_inner_component">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginRight: '5%' }}><FontAwesomeIcon style={{ cursor: 'pointer' }} onClick={() => setPartner(false)} icon={faXmark} /></div>
        <GetInTouch />
      </div>
    </div>
  )
}

export default Partnership