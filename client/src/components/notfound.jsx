import "./contact/contact.css"
import React from 'react';

function page404() {
  return (
    <main>
      <article>
    <section className="contact" id="contact">
      <div className="contactcontainer">
                <div className="contact-content">
                <h2 className="contact-title">Write the Email where you get the otp</h2>
                <figure className="contact-banner">
                    <img src="404.png" alt="contact banner" />
                </figure>
                </div>

            <form action="" className="contact-form">
        
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

export default page404;
