import "./contact.css"
import React from 'react';

function Forgets() {
  return (
    <main>
      <article>
    <section className="contact" id="contact">
      <div className="contactcontainer">
                <div className="contact-content">
                <h2 className="contact-title">Write your Student ID, Your OTP will go to your IUT Email </h2>
                <figure className="contact-banner">
                    <img src="contact.gif" alt="contact banner" />
                </figure>
                </div>

            <form action="" className="contact-form">
           

              <label htmlFor="">Student ID <span>*</span></label>
              <input type="Number" min={0}/>
  
              

          <button >
            <a href="/Updatepassword">Send OTP</a>
          </button>
          <button >
            <a href="/">Go Back</a>
          </button>

        </form>
        
      </div>
    </section>
    </article>
    </main>
  );
}

export default Forgets;
