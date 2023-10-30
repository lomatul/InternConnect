import React from 'react'

const FAQ = () => {
  return (
    <div className='faq'>
        <h1>Frequently Asked Questions</h1>
        <p>Have question? We are here to help</p>
        <section className='services'>
            <div className='service-right'>
                <div className='qa'>
                    <input type="checkbox" id='collapsible-head-1' />
                    <label for = "collapsible-head-1">What are the companies listed here ?</label>
                    <div className='collapsible-text-1'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque
                            ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.</p>
                    </div>
                </div>
                <div className='qa'>
                <input type="checkbox" id="collapsible-head-2" />
                <label for="collapsible-head-2">How do I find an internship?</label>
                <div class="collapsible-text-2">
                    <p>You can find internships through various channels, including university career centers, online job boards, company websites, networking, and even social media. Additionally, some organizations actively recruit interns at career fairs.</p>
                </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-3" />
                    <label for="collapsible-head-3">What should I include in my internship application?</label>
                    <div class="collapsible-text-3">
                        <p>Your application should include a well-crafted resume, a cover letter explaining your interest and qualifications, and any requested application materials. Tailor your application to the specific internship and company.</p>
                    </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-4" />
                    <label for="collapsible-head-4">What's the interview process like for internships?</label>
                    <div class="collapsible-text-4">
                        <p>The interview process may involve phone or video interviews, in-person interviews, and sometimes assessment tests or tasks. It's essential to prepare by researching the company and practicing common interview questions.</p>
                    </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-5" />
                    <label for="collapsible-head-5">Is it possible to do remote internships?</label>
                    <div class="collapsible-text-5">
                        <p>Yes, remote or virtual internships have become more common, especially with the growth of remote work. Many organizations offer remote internship opportunities, allowing interns to work from anywhere.</p>
                    </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-6" />
                    <label for="collapsible-head-6">How to appply ?</label>
                    <div class="collapsible-text-6">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque
                            ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FAQ