import Image1 from '../Images/marketing-2.jpg';
const About = () => {
  return (
    <>
      <div id='about' className='about m-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <img src={Image1} className='img-fluid' alt='' />
            </div>
            <div className='col-lg-6 pt-4 pt-lg-0'>
              <h3 className='font-weight-bold'>About Us </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
              <div className='row'>
                <div className='col-md-6'>
                  <i className='fas fa-award'></i>
                  <h4>Awards & Achievement</h4>
                  <p>
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip
                  </p>
                </div>
                <div className='col-md-6'>
                  <i className='fas fa-file-code'></i>
                  <h4>Development Goal</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
