import React, { useEffect } from 'react';
import ScrollOut from 'scroll-out';

const AboutUs = () => {
  useEffect(() => {
    ScrollOut({
      targets: 'h2,h3,p,a',
    });
  }, []);

  return (
    <div>
      <section>
        <div className="aboutcontent">
          <h2 data-scroll="out">About InternConnect</h2>
          <h3 data-scroll="out">To address the challenges of Intern Managment, our goal is to introduce software as a solution that will be robust enough to effectively diminish the mentioned limitations. This software would significantly streamline the entire internship placement process, alleviating the burdens faced by everyone involved.
</h3>
          <p data-scroll="out"> Our goal is to develop a user-friendly web application that will not only eliminate these issues but also enhance the overall experience of all parties involved, including students, Islamic University of Technology (IUT) administrators, participating companies, supervisors, system administrators, visitors and authorities.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
