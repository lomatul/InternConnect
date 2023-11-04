import "./contact/contact.css"
import React from 'react';

function Page404() {
  return (
    <main>
      <article>
    <section className="contact" id="contact">
      <div className="contactcontainer">
                <div className="contact-content">
                
                <figure className="contact-banner">
                    <img src="404.gif" alt="contact banner" />
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

export default Page404;
