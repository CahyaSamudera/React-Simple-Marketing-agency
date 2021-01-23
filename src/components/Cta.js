import background from '../Images/marketing-01.jpg';

const Cta = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), 
        url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    padding: '120px 0',
  };

  return (
    <>
      <div id='cta' className='cta mt-5' style={backgroundStyle}>
        <div className='container'>
          <div className='text-center'>
            <h3>Lorem ipsum dolor sit!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              soluta, excepturi maiores nemo id alias!
            </p>
            <a href='#contact'>
              <button className='cta-btn'>Contact Us</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
