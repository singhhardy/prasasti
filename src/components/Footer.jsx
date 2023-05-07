import React from 'react'

function Footer() {
  return (
    <div className='footer mt-4 w-100'>
        <div className='container'>
            <div  className='row px-lg-5 py-5'>
                <div className='col-md-4 d-flex flex-column align-items-center justify-content-center'>
                <img class="brand-img logo img-fluid" src='logo.png'/>
                <br/>
                <p className='text-center'>Generate outside the box thinking with the possibility to targtet the low.</p>
                </div>
                <div className='col-md-2 mt-3'>
                    <ul className='footer-list'>
                    <h4 className='text-light mb-4'>Resources</h4>
                        <li><a href='#'  className="my-2">Community</a></li>
                        <li><a href='#' className="my-2">Events</a></li>
                        <li><a href='#' className="my-2">Help Center</a></li>
                        <li><a href='#' className="my-2">Partners</a></li>
                    </ul>
                </div>
                <div className='col-md-2 mt-3'>
                    <ul className='footer-list'>
                    <h4 className='text-light mb-4'>Products</h4>
                        <li><a href='#'  className="my-2">integration</a></li>
                        <li><a href='#' className="my-2">Solutions</a></li>
                        <li><a href='#' className="my-2">features</a></li>
                        <li><a href='#' className="my-2">Enterprise</a></li>
                    </ul>
                </div>
                <div className='col-md-4 mt-3'>
                    <ul className='footer-list'>
                        <h4 className='text-light mb-4'>Get Email Notifications</h4>
                        <br/>
                        <p>Generate outside the box thinking with <br/> the possibility to targtet the low</p>
                        <br/>
                        <div class="d-flex">
                        <input className="form-control rounded-0 py-2" placeholder="Add your Email" />
                        <button className="btn rounded-0 btn-primary">Submit</button>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer