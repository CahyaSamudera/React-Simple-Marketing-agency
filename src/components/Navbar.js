import background from '../Images/marketing-01.jpg';

const Navbar = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), 
    url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '60vh',
    width: '100%',
    position: 'relative',
    padding: '0',
    zIndex: '1',
    marginBottom: '-120px',
  };
  return (
    <>
      <header id='home'>
        <nav className='navbar navbar-expand-lg px-4'>
          <a href='#home' className='navbar-brand'>
            <span className='font-weight-bold text-uppercase logo'>
              Prasta Agency
            </span>
          </a>
          <button
            type='button'
            className='navbar-toggler'
            data-toggle='collapse'
            data-target='#myNavbar'
          >
            <span className='toggler-icon'>
              <i className='fas fa-bars'></i>
            </span>
          </button>
          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='navbar-nav text-capitalize mx-auto'>
              <li className='nav-item active'>
                <a href='#home' className='nav-link'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a href='#services-section' className='nav-link'>
                  Services
                </a>
              </li>
              <li className='nav-item'>
                <a href='#team' className='nav-link'>
                  Team
                </a>
              </li>
              <li className='nav-item'>
                <a href='#price' className='nav-link'>
                  Pricing
                </a>
              </li>
              <li className='nav-item'>
                <a href='#contact' className='nav-link'>
                  Contact
                </a>
              </li>
            </ul>
            <div className='nav-info-items d-none d-lg-flex'>
              <div className='nav-info align-items-center d-flex justify-content-between mx-lg-5'>
                <span className='info-icon mx-lg-3'>
                  <i className='fab fa-whatsapp-square fa-2x app'></i>
                </span>
                {/* <p className='mb-0'>+021 123 456 78 </p> */}
              </div>
            </div>
          </div>
        </nav>

        <section
          id='hero'
          className='d-flex flex-column justify-content-center align-items-center'
          style={backgroundStyle}
        >
          <div className='container'>
            <h1 className='text-uppercase'>Marketing Agency</h1>
            <h2>Welcome to Prasta Marketing Agency</h2>
            <div className='d-flex align-items-center'>
              <a href='#services-section'>
                {' '}
                <button className='btn-start'>Get Started</button>
              </a>
            </div>
          </div>
        </section>

        <section id='skills' className='skills'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-4 col-lg-5'></div>
              <div className='col-xl-8 col-lg-7 d-flex'>
                <div className='icon-boxes d-flex flex-column justify-content-center'>
                  <div className='row'>
                    <div className='col-xl-4 d-flex align-items-center'>
                      <div className='icon-box mt-4 mt-xl-0'>
                        <i className='fab fa-fly'></i>
                        <h4>Corporis voluptates sit</h4>
                        <p>
                          Consequuntur sunt aut quasi enim aliquam quae harum
                          pariatur laboris nisi ut aliquip
                        </p>
                      </div>
                    </div>
                    <div className='col-xl-4 d-flex align-items-center'>
                      <div className='icon-box mt-4 mt-xl-0'>
                        <i className='fas fa-leaf'></i>
                        <h4>Ullamco laboris ladore pan</h4>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt
                        </p>
                      </div>
                    </div>
                    <div className='col-xl-4 d-flex align-items-center'>
                      <div className='icon-box mt-4 mt-xl-0'>
                        <i className='fas fa-virus'></i>
                        <h4>Labore consequatur</h4>
                        <p>
                          Aut suscipit aut cum nemo deleniti aut omnis.
                          Doloribus ut maiores omnis facere
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Navbar;
