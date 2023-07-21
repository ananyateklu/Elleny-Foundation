// src/pages/Mission.tsx
import React from 'react';
import "../components/CSS/ContactUs.css";

const ContactUs: React.FC = () => {
  return (
    <div className='contact-main'>
      <div className='contact-header'>
        Contact Us
      </div>
      <div className='contact-sub'>

        <div className='contact-form'>
          <h1> For general inquiries, please contact us here:</h1>
          <div className='form'>
            <form >


              <input
                type="text"
                placeholder="First & Last Name"


                required
              />

              <div className='email-phone-inputs'>
                <input
                  type="email"
                  placeholder="Email Address"

                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"

                  required
                />
                <textarea
                  placeholder="Message"

                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className='contact-address'>
          <div className='contact-map'>
            Map Section
          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactUs;
