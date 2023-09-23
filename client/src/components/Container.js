import React from 'react'

const Container = () => {
  return (
    <div>
        <div className='container'>
            <div className='text'>
                <h3>Connecting you </h3>
                <h1>InternConnect</h1>
                <p>This software would significantly streamline the entire internship placement process, alleviating the burdens faced by everyone involved</p>
                <div className='button'><a href="/">Explore Now &#8599;</a></div>
            </div>
            <div className='image'>
                <img src="https://img.freepik.com/free-vector/illustrated-woman-being-intern-company_23-2148726151.jpg?w=740&t=st=1695480849~exp=1695481449~hmac=654f24076682901d6d93d07d27319774c70bdf00c5fb0fa29cc19947053158c7" alt="" />
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