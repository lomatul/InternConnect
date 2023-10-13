import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='bulb'>
            <div className='pic'>
                {/* <img src="bulb.png" alt="" /> */}
                <h1>More than Software. Industry-Leading Support and Best Practice Advice.</h1>
            </div>
            <div className='footer-text'>
                {/* <p>More than Software. Industry-Leading Support and Best Practice Advice.</p> */}
                <a href="/login">Get Started</a>
            </div>
        </div>

        <div className='footer-menu'>
            <h1>InternConnect</h1>
            {/* <ul className='footer-inner-nav'>
                <li><a href="#hub">Hub</a></li>
                <li><a href="#mint">Mint</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#socials">Socials</a></li>
            </ul> */}
        </div>
        <hr />
        <div>
            <p className='text-center'>&#169; Copyright 2023 | All Right Reserved | InternConnect</p>
        </div>
    </div>
  )
}

export default Footer