import React from 'react'

function Dashboard() {

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className="add">
      <div className="addcontainer">
        <h1>Add New Company</h1>
        <div className="addsections">
        <div className="info">
        </div> 

          <div className="details">

          <label htmlFor="">Add Companies</label>
            <input type="file" />
            <input type="submit" value="Submit"></input><br />

            <label htmlFor="">Company Title</label>
            <input type="text" placeholder="Give Company name" />

            <label htmlFor="">Short Description</label>
            <textarea name="" id="" placeholder="Short description of the company" cols="30" rows="10"></textarea>

            <label htmlFor="">Location</label>
            <input type="text" />

            <label htmlFor="">Contact Number</label>
            <input type="number" />
           
            <button>Create</button>
          </div>
          
        </div>
      </div>
    </div>

    </main>
  )
}

export default Dashboard