const Pricing = () => {
  return (
    <>
      <div id='price' className='price py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-sm-6 text-center'>
              <h1 className='text-capitalize'>Our Pricing</h1>
            </div>
          </div>

          <div className='row'>
            <div className='col-11 mx-auto col-md-6 col-lg-4 my-4 text-capitalize text-center'>
              <h3 className='py-3'>Basic</h3>
              <div className='text-muted'>
                <p className='my-3'>20 GB of Storage</p>
                <p className='my-3'>1 Email Account</p>
                <p className='my-3'>24/7 Support</p>
                <p className='my-3'>300 GB Bandwidth</p>
                <p className='my-3'>User Management</p>
                <button
                  type='button'
                  className='btn-price text-capitalize mb-3'
                >
                  order now
                </button>
                <p className='text-lowercase mb-4 font-weight-bold'>
                  Starting at $10
                </p>
              </div>
            </div>

            <div className='col-11 mx-auto col-md-6 col-lg-4 my-4 text-capitalize text-center'>
              <h3 className='py-3'>Professional</h3>
              <div className='text-muted'>
                <p className='my-3'>50 GB of storage</p>
                <p className='my-3'>2 Email Account</p>
                <p className='my-3'>24/7 Support</p>
                <p className='my-3'>Unlimited</p>
                <p className='my-3'>User Management</p>
                <button
                  type='button'
                  className='btn-price text-capitalize mb-3'
                >
                  order now
                </button>
                <p className='text-lowercase mb-4 font-weight-bold'>
                  Starting at $29
                </p>
              </div>
            </div>

            <div className='col-11 mx-auto col-md-6 col-lg-4 my-4 text-capitalize text-center'>
              <h3 className='py-3'>Enterprise</h3>
              <div className='text-muted'>
                <p className='my-3'>Unlimited</p>
                <p className='my-3'>5 Email Account</p>
                <p className='my-3'>24/7 Support</p>
                <p className='my-3'>Unlimited</p>
                <p className='my-3'>User Management</p>
                <button
                  type='button'
                  className='btn-price text-capitalize mb-3'
                >
                  order now
                </button>
                <p className='text-lowercase mb-4 font-weight-bold'>
                  Starting at $45
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
