import React from 'react'
import "./Footer.css"

export const Footer = () => {
  let footerStyle = {
    position : "absolute",
    top : "100vh",
    width : "100%"
  }

  return (
    <footer className='bg-dark text-light text-center py-3' style={footerStyle}>
      <p>
        Copyright &copy; MytodosList.com
      </p>
    </footer>
  )
}

//export default Footer


