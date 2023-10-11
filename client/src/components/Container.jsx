import React from 'react'

const Container = () => {
  return (
    <div>
        <div className='homecontainer'>
            <div className='text'>
                <h3>Connecting you </h3>
                <h1>InternConnect</h1>
                <p>This software would significantly streamline the entire internship placement process, alleviating the burdens faced by everyone involved</p>
                <div className='button'><a href="/">Explore Now &#8599;</a></div>
            </div>
            <div className='image'>
                <img src="bk-removed.png" alt="" />
            </div>
        </div>
        <div className='partners'>
            <span><img src="BS.svg" alt="" /></span>
            <span><img src="mparticle.png" alt="" /></span>
            <span><img src="chargebee.png" alt="" /></span>
            <span><img src="corsair.svg" alt="" /></span>
            <span><img src="emachines.png" alt="" /></span>
        </div>
    </div>
  )
}

export default Container