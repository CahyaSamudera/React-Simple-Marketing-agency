import Image1 from '../Images/id.png';
import Image2 from '../Images/macaca.png';
const Client = () => {
  return (
    <>
      <div id='clients' className='clients mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-sm-6 text-center'>
              <h1 className='text-capitalize mb-4'>Our Clients</h1>
            </div>
          </div>
        </div>
        <div className='row no-gutters clients-wrap clearfix'>
          <div className='col-lg-3 col-md-4 col-xs-6'>
            <div className='client-logo'>
              <img src={Image1} className='img-fluid' alt='' />
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-xs-6'>
            <div className='client-logo'>
              <img src={Image2} className='img-fluid' alt='' />
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-xs-6'>
            <div className='client-logo'>
              <img src={Image1} className='img-fluid' alt='' />
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-xs-6'>
            <div className='client-logo'>
              <img src={Image2} className='img-fluid' alt='' />
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-xs-6'>
            <div className='client-logo'>
              <img src={Image1} className='img-fluid' alt='' />
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-xs-6'>
            <div className='client-logo'>
              <img src={Image2} className='img-fluid' alt='' />
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-xs-6'>
            <div className='client-logo'>
              <img src={Image1} className='img-fluid' alt='' />
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-xs-6'>
            <div className='client-logo'>
              <img src={Image2} className='img-fluid' alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
