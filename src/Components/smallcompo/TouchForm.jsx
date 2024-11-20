import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { TextField, styled } from '@mui/material'
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const InputField = styled(TextField)`
margin-left:20px !important;
justify-content:space-between;
`
const TouchForm = ({ setFlag2 }) => {
    const [flag, setFlag] = useState(false);
    return (
        <div className='touch_form_main' >

            <div className="get_form">
                <div className="cross">
                    <FontAwesomeIcon onClick={() => setFlag2(false)} style={{ height: '20px', width: '20px', marginTop: "20px", marginRight: '20px' }} icon={faXmark} />
                </div>
                <p className="form_heading">Got questions? We've got answers.</p>
                <p className="form_description">
                    Fill out the form below and a member of our team will get in touch with you to learn more about your workplace needs
                </p>
                <div className="form_inputs">
                    <InputField id="outlined-basic" label="Full Name*" variant="outlined" placeholder='Full Name*' />
                    <InputField id="outlined-basic" label="Work Email*" variant="outlined" placeholder='Work Email*' />
                    <InputField id="outlined-basic" label="Phone Number*" variant="outlined" placeholder='Phone Number*' />
                    <InputField id="outlined-basic" label="Workspace type*" variant="outlined" placeholder='Workspace type*' />
                    <InputField id="outlined-basic" label="Company Size*" variant="outlined" placeholder='Company Size*' />
                    <InputField id="outlined-basic" label="Additional Notes" variant="outlined" placeholder='Additional Notes' />

                    <div className="form_inputs_checkbox" style={{ border: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <label htmlFor="Do you have a broker?*">Do you have a broker?*</label>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10%' }}>
                            <div>
                                <input style={{ border: '3px solid rgb(145, 143, 143)', fontSize: '3vh' }} checked={!flag} onClick={() => setFlag(false)} type="radio" />Yes
                            </div>
                            <div>
                                <input style={{ border: '3px solid rgb(145, 143, 143)', fontSize: '3vh' }} checked={flag} onClick={() => setFlag(true)} type="radio" />No
                            </div>
                        </div>
                    </div>
                </div>
                <div className="agreement">
                    <p>By clicking the button below, you agree to our <span>Terms of Service</span> and acknowledge our <span>Privacy Policy</span></p>
                </div>
                <div className="agreement_button">Get in touch</div>

            </div>
        </div>
    )
}

export default TouchForm
