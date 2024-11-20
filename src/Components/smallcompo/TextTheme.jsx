import React from 'react'

export const TextRed = ({children}) => {
  return (
    <span style={{color:"red"}}>{children}</span>
  )
}

export const MailToText = ({children})=>{

    return(
        <a href={`mailto:${children}`}>{children}</a>
    )
}
