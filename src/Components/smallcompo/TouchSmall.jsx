import React from 'react'

const TouchSmall = ({setFlag2}) => {
  return (
    <div className='touch_small_main'>
        <div className="content_small">
            <p className='form_heading'>Got questions? We've got answers.</p>
            <p className="form_description">Fill out the form below and a member of our team will get in touch with you to learn more about your workplace needs</p>
        </div>
       <div className="contact_button" onClick={()=>setFlag2(true)}>Contact Us</div>
    </div>
  )
}

export default TouchSmall
