import Team1 from '../Images/1.jpg';
import Team2 from '../Images/2.jpg';
import Team3 from '../Images/3.jpg';

const Team = () => {
  return (
    <>
      <div id='team' className='py-5'>
        <div className='container'>
          <div className='row title mb-5'>
            <div className='col text-center'>
              <h1 className='text-uppercase'>Our Team</h1>
              <h3 className='text-capitalize'>Lorem ipsum dolor sit amet.</h3>
            </div>
          </div>

          <div className='row'>
            <article className='team-member col-sm-6 col-lg-4 my-3'>
              <div className='member-container'>
                <img src={Team1} className='img-fluid team-image' alt='' />
                <div className='member-info d-flex justify-content-around '>
                  <div className='member-text'>
                    <h3 className='text-capitalize'>Team</h3>
                    <p className='text-capitalize text-light'>
                      Lorem ipsum dolor sit amet.
                    </p>
                    <div className='team-icons'>
                      <a href='#home' className='mr-2'>
                        <i className='fab fa-facebook'></i>
                      </a>
                      <a href='#home' className='mx-2'>
                        <i className='fab fa-twitter'></i>
                      </a>
                      <a href='#home' className='mx-2'>
                        <i className='fab fa-instagram'></i>
                      </a>
                      <a href='#home' className='mx-2'>
                        <i className='fab fa-linkedin'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className='team-member col-sm-6 col-lg-4 my-3'>
              <div className='member-container'>
                <img src={Team2} className='img-fluid team-image' alt='' />
                <div className='member-info d-flex justify-content-around '>
                  <div className='member-text'>
                    <h3 className='text-capitalize'>Team</h3>
                    <p className='text-capitalize text-light'>
                      Lorem ipsum dolor sit amet.
                    </p>
                    <div className='team-icons'>
                      <a href='#home' className='mr-2'>
                        <i className='fab fa-facebook'></i>
                      </a>
                      <a href='#home' className='mx-2'>
                        <i className='fab fa-twitter'></i>
                      </a>
                      <a href='#home' className='mx-2'>
                        <i className='fab fa-instagram'></i>
                      </a>
                      <a href='#home' className='mx-2'>
                        <i className='fab fa-linkedin'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className='team-member col-sm-6 col-lg-4 my-3 mx-auto'>
              <div className='member-container'>
                <img src={Team3} className='img-fluid team-image' alt='' />
                <div className='member-info d-flex justify-content-around '>
                  <div className='member-text'>
                    <h3 className='text-capitalize'>Team</h3>
                    <p className='text-capitalize text-light'>
                      Lorem ipsum dolor sit amet.
                    </p>
                    <div className='team-icons'>
                      <a href='#home' className='mr-2'>
                        <i className='fab fa-facebook'></i>
                      </a>
                      <a href='#home' className='mx-2'>
                        <i className='fab fa-twitter'></i>
                      </a>
                      <a href='#home' className='mx-2'>
                        <i className='fab fa-instagram'></i>
                      </a>
                      <a href='#home' className='mx-2'>
                        <i className='fab fa-linkedin'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
