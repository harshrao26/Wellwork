import React, { useState } from 'react'
import './auth.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const Auth = ({setFlag}) => {
    const [authState, setAuthState] = useState('Login');
    const [show, setShow] = useState(false)
    return (
        <div className='refer_main_component'>
            <div className="auth_main_component" style={{ maxWidth: '400px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '40px' }}>
                    <FontAwesomeIcon onClick={()=>setFlag(false)} style={{ fontSize: '20px',cursor:'pointer' }} icon={faXmark} />
                </div>
                <p className="brand_heading" style={{ padding: '0',marginTop:'0' }}>WellWork</p>
                <div className="auth_headings">
                    <p className="login_button" style={{ borderBottom: `${authState === 'Login' ? '1px solid black' : ''}` }} onClick={() => setAuthState('Login')}>Login</p>
                    <p className="sign_up_button" style={{ borderBottom: `${authState === 'signup' ? '1px solid black' : ''}` }} onClick={() => setAuthState('signup')}>Sign Up</p>
                </div>
                <div className="auth_form">
                    <input type="text" className='auth_email' placeholder='Email Address' />
                    <div style={{ display: 'flex', alignItems: 'center', border: "1px solid rgb(112, 110, 110)", paddingRight: "25px", gap: '10px' }}>
                        <input type={`${show ? 'text' : 'password'}`} className='auth_password' placeholder='Password' />
                        <svg onClick={() => setShow(!show)} style={{ cursor: 'pointer', color: 'blue' }} fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="24px" height="24px" viewBox="0 0 37.519 37.519"
                            xmlSpace="preserve">
                            <g>
                                <path d="M37.087,17.705c-0.334-0.338-8.284-8.276-18.327-8.276S0.766,17.367,0.433,17.705c-0.577,0.584-0.577,1.523,0,2.107
                        c0.333,0.34,8.284,8.277,18.327,8.277s17.993-7.938,18.327-8.275C37.662,19.23,37.662,18.29,37.087,17.705z M18.76,25.089
                        c-6.721,0-12.604-4.291-15.022-6.332c2.411-2.04,8.281-6.328,15.022-6.328c6.72,0,12.604,4.292,15.021,6.332
                        C31.369,20.802,25.501,25.089,18.76,25.089z M18.76,13.009c3.176,0,5.75,2.574,5.75,5.75c0,3.175-2.574,5.75-5.75,5.75
                        c-3.177,0-5.75-2.574-5.75-5.75C13.01,15.584,15.583,13.009,18.76,13.009z" />
                            </g>
                        </svg>
                    </div>
                </div>
                {authState === 'Login' && <p className="forgot_password">Forgot password?</p>}
                {authState === 'signup' && <p className="signup_text">
                    By clicking "continue" you acknowledge WellWork's <span className='forgot_password'>Global Privacy Policy.</span>
                </p>}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className='submit_auth'>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Auth