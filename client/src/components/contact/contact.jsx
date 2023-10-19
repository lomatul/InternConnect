import "./contact.css"
import React from 'react';

function Contacts() {
  return (
    <main>
      <article>
    <section className="contact" id="contact">
      <div className="contactcontainer">
                <div className="contact-content">
                <h2 className="contact-title">We are Here to Help You</h2>
                <figure className="contact-banner">
                    <img src="contact.gif" alt="contact banner" />
                </figure>
                </div>

            <form action="" className="contact-form">
            <label htmlFor="">Name<span>*</span></label>
            <input type="text" />

              <label htmlFor="">Email <span>*</span></label>
              <input type="text"/>
  
              <label htmlFor="">Contact Number<span>*</span></label>
              <input type="number" min="0"/>

              <label htmlFor="">Short Description<span>*</span></label>
              <textarea name="" id="" placeholder="Short description of your problem" cols="30" rows="10"></textarea>
  

          <button type="submit" >
            Send Message
          </button>
        </form>
        
      </div>
    </section>
    </article>
    </main>
  );
}

export default Contacts;
