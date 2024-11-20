import React, { useState } from 'react'

const AboutImage = ({ src }) => {
    const [flag, setFlag] = useState(false);
    return (
        <img className={`about_images ${flag ? 'makeSm' : ''}`} onClick={() => setFlag(!flag)} onMouseLeave={() => setFlag(false)}  src={src} alt="" />
    )
}

export default AboutImage