import React from 'react';

const Contact = () => {
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div id='contact-left'>
                <h3>Prasta Agency</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Enim, veritatis?
                </p>
                <div id='contact-info'>
                  <address>
                    <strong>Headquarters:</strong>
                    <br />
                    <p>
                      123 Lorem Ipsum, Dolor 600
                      <br />
                      Jakarta, 12354{' '}
                    </p>{' '}
                  </address>
                  <div id='phone-email'>
                    <p>
                      <strong>Phone:</strong>
                      <span> +021 1234 56789 </span> <br />
                      <strong>Email:</strong>
                      <span> example@test.com </span> <br />
                    </p>
                  </div>
                </div>
                <ul className='social-list'>
                  <li>
                    <a href='#home' className='social-icon icon-white'>
                      <i className='fab fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#home' className='social-icon icon-white'>
                      <i className='fab fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#home' className='social-icon icon-white'>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-6'>
              <div id='contact-right'>
                <h3>Contact Us</h3>
                <form action='#'>
                  <input
                    type='text'
                    name='full-name'
                    placeholder='Full Name'
                    className='form-control'
                  />
                  <input
                    type='text'
                    name='email'
                    placeholder='Email Address'
                    className='form-control'
                  />
                  <textarea
                    rows='5'
                    name='message'
                    placeholder='Message...'
                    className='form-control'
                  ></textarea>
                  <div id='send-btn'>
                    <a href='#home'>
                      <button className='btn-send btn-lg'> SEND</button>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
