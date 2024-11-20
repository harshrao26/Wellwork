import React from 'react'
import './refer.css'
import GetInTouch from './GetInTouch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const Referrals = ({ setRefer }) => {

  return (
    <div className='refer_main_component'>
      <div className="refer_inner_component">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px', marginRight: '5%', position: 'relative', right: '4%', width: '100%' ,top:'2%'}}>
            <FontAwesomeIcon style={{ cursor: 'pointer', }} onClick={() => setRefer(false)} icon={faXmark} />
        </div>
        <GetInTouch />
      </div>
    </div>
  )
}

export default Referrals