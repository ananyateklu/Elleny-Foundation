// src/pages/Mission.tsx
import React, { useState }  from 'react';
import axios from 'axios';
import "../components/CSS/ContactUs.css";

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // Call the sendEmail function
      await sendEmail();

      // Clear the input fields after sending the email
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
  };

  const sendEmail = async () => {
      const data = {
          service_id: process.env.REACT_APP_SERVICE_ID,
          template_id: process.env.REACT_APP_TEMPLATE_ID_M,
          user_id: process.env.REACT_APP_USER_ID,
          template_params: {
              'reply_to': email,
              'from_name': name,
              'phoneNumber': phone,
              'message': message,
          },
      };

      try {
          const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data, {
              headers: { 'Content-Type': 'application/json' },
          });

          if (response.status === 200) {
              alert('Thanks for your message. We will get back to you as soon as possible.');
          } else {
              throw new Error('Failed to send email');
          }
      } catch (error) {
          alert('Oops... ' + JSON.stringify(error));
      }
  };



  return (
    <div className='contact-main'>
      <div className='contact-header'>
        Contact Us
      </div>
      <div className='contact-sub'>

        <div className='contact-form'>
          <h1> For general inquiries, please contact us here:</h1>
          <div className='form'>
            <form onSubmit={handleSubmit} >


              <input
                type="text"
                placeholder="First & Last Name"
                value={name} onChange={(e) => setName(e.target.value)}

                required
              />

              <div className='email-phone-inputs'>
                <input
                  type="email"
                  placeholder="Email Address"

                  required
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Phone"

                  required
                  value={phone} onChange={(e) => setPhone(e.target.value)} 
                />
                <textarea
                  placeholder="Message"

                  required
                  value={message} onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactUs;
