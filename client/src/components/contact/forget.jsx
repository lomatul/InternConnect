import "./contact.css"
import React from 'react';

function Forgets() {
  return (
    <main>
      <article>
    <section className="contact" id="contact">
      <div className="contactcontainer">
                <div className="contact-content">
                <h2 className="contact-title">Write the Email where you get the otp</h2>
                <figure className="contact-banner">
                    <img src="contact.gif" alt="contact banner" />
                </figure>
                </div>

            <form action="" className="contact-form">
           

              <label htmlFor="">Email <span>*</span></label>
              <input type="text"/>
  
              

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
