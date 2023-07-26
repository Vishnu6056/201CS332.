import React from 'react'

const Footer = ({length}) => {
    // const year = new Date();
  return (
    <footer>
        {/* Copyright &copy; {year.getFullYear()} */}

        {length} available tasks are here
    </footer>
  )
}

export default Footer;