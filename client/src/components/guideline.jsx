import React, { useEffect } from 'react';
import ScrollOut from 'scroll-out';

const GuildeLine = () => {
  useEffect(() => {
    ScrollOut({
      targets: 'h2,h3,p,a',
    });
  }, []);
  return (
    <div>
        <div className='guidecontainer'>
            <div className='guidetext' >
                <h3>We Welcome you </h3>
                <h1>To the Guideline Page</h1>
                <p>This software would significantly streamline the entire internship placement process, alleviating the burdens faced by everyone involved</p>
            </div>
            <div className='guideimage'>
                <img src="guideline2.png" alt="" />
            </div>
        </div>

        <section>
        <div className="guidelinecontent">
          <h2 data-scroll="out">1. Introduction to Internship</h2>
          <p data-scroll="out"> An internship is a valuable opportunity for students to gain practical 
          experience in a real work environment. It is a critical part of your educational journey and can 
          significantly impact your future career. During an internship, you have the chance to apply what 
          you've learned in the classroom, develop new skills, and build a professional network. This section
           provides an overview of the importance of internships in your educational and career development.
           </p>
        </div>
      </section>


      <section>
        <div className="guidelinecontent">
          <h2 data-scroll="out">2. Purpose of the Guideline Page</h2>
          <p data-scroll="out"> The purpose of this Guideline Page is to guide you through the entire 
          internship process. We aim to provide you with all the information you need to successfully a
          pply for and complete your internship. Whether you are a student, employer, or any other user, 
          this page serves as a comprehensive resource to answer your questions and assist you in navigating
           the internship experience.
           </p>
        </div>
      </section>


      
      <section>
        <div className="guidelinecontent">
          <h2 data-scroll="out">3. Internship Process Overview</h2>
          <p data-scroll="out"> Application: Submit your internship application within the specified deadline.
                Placement: Once accepted, you'll be matched with an internship opportunity.
                Onboarding: Prepare for your internship by completing any required documentation.
                Internship: Work at the organization, gain experience, and meet learning objectives.
                Supervision: You will have a supervisor or mentor guiding your progress.
                Evaluation: Your performance will be assessed during and at the end of the internship.
                Completion: Successfully complete the internship program and receive a certificate.
           </p>
        </div>
      </section>


   
      <section>
        <div className="guidelinecontent">
          <h2 data-scroll="out">4. Eligibility and Requirements</h2>
          <p data-scroll="out"> To be eligible for our internship program, you must meet certain criteria. 
          These criteria may include your academic standing, specific skills or qualifications, and more. 
          Please ensure you review the eligibility requirements before applying. Meeting these requirements 
          is crucial to your acceptance into the program.
           </p>
        </div>
      </section>


     
      <section>
        <div className="guidelinecontent">
          <h2 data-scroll="out">5. How to Apply</h2>
          <p data-scroll="out"> The application process is straightforward, but it's important to follow 
          the correct steps. To apply for an internship:
            Complete the online application form.
            Submit all required documents, such as your resume, cover letter, and transcripts.
            Meet the application deadline.
            Once we receive your application, our team will review it and get in touch with you regarding the next steps.
           </p>
        </div>
      </section>


     
      <section>
        <div className="guidelinecontent">
          <h2 data-scroll="out">Resources and Additional Information</h2>
          <p data-scroll="out"> The purpose of this Guideline Page is to guide you through the entire 
          internship process. We aim to provide you with all the information you need to successfully a
          pply for and complete your internship. Whether you are a student, employer, or any other user, 
          this page serves as a comprehensive resource to answer your questions and assist you in navigating
           the internship experience.
           </p>
        </div>
      </section>


     
      <section>
        <div className="guidelinecontent">
          <h2 data-scroll="out">2. Purpose of the Guideline Page</h2>
          <p data-scroll="out"> The purpose of this Guideline Page is to guide you through the entire 
          internship process. We aim to provide you with all the information you need to successfully a
          pply for and complete your internship. Whether you are a student, employer, or any other user, 
          this page serves as a comprehensive resource to answer your questions and assist you in navigating
           the internship experience.
           </p>
        </div>
      </section>

      <section>
        <div className="guidelinecontent">
          <h2 data-scroll="out">2. Purpose of the Guideline Page</h2>
          <p data-scroll="out"> The purpose of this Guideline Page is to guide you through the entire 
          internship process. We aim to provide you with all the information you need to successfully a
          pply for and complete your internship. Whether you are a student, employer, or any other user, 
          this page serves as a comprehensive resource to answer your questions and assist you in navigating
           the internship experience.
           </p>
        </div>
      </section>


    </div>
  );
};

export default GuildeLine;
