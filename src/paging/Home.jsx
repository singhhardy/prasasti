import React from 'react';
import Showcase from '../components/Showcase';

function Home() {
  return (
    <div>
      <Showcase />

      {/* Home page body */}
      <div className='container my-5 px-lg-5 light-gradient-bg p-4 rounded-3'>
        <div className='row'>
           <div className='col-md-6'>
           <h2 className='p-heading'>Web3 Wallets integration <br/> and Rewards</h2>
           <p>Digital Badges and Certificates are soul bound tokens that are linked to your web3 wallet addressGet Rewards for your achievements by blockchain airdrop functinality
           </p>
           <div className='row'>
           <div className='col-md-12'>
           <span className='nums mx-2 px-4'>1</span>
           <span className='nums mx-2 px-4'>2</span>
           <span className='nums mx-2 px-4'>1</span>
           <span className='nums mx-2 px-4'>7</span>
           </div>
           </div>
           </div>
           <div className='col-md-6'>
            <img className='img-fluid p-4' src='CI1.png' />
           </div>
        </div>
      </div>
      <br/>
      <br/>


      {/* section */}
      <div className='container mx-0'>
          <div className='row'>
            <div className='col-md-3 sideimg'>
            <img className='img-fluid' src='sideimg.png' />
            </div>
            <div className='col-md-9'>
            <div className='container'>
          <div  className='row mt-5'>
          <h1 className='p-heading'>Meet Our Products</h1>
          <p className='fs-5'>Our Products work Togather seamlessly to <br/> form talent science. start with one or more. </p>
          </div>
          {/* Colleges */}
          <div className='row py-5'>
            <div className='col-md-6 mb-4 d-flex align-items-center'>
                <img className='img-fluid' src='goalmanagement.png' />
            </div>
            <div className='col-md-6'>
              <p className='badge p-2 primary-badge px-3 '><i class="fa fa-bar"></i>College</p>
              <br/>
              <h3 className='p-heading'> Prasasti for Colleges</h3>
              <div className='bar'></div>
              <br />
              <p className='fs-3'>Issue Digital Badges to Certificates to Students</p>
              <div className='d-flex '>
              <h5 className='p-heading fs-5'><span className='primary-dot'>.</span>  Daily Track</h5>
              <h4 className='p-heading fs-5 mx-5'><span className='primary-dot px-3'>.</span>  Road Map</h4>
              </div>
              <br/>
              <button className='btn third-btn'>Learn More</button>
            </div>
          </div>
          <br/>
          <br/>
          {/* School */}

          <div className='row py-5'>
            <div className='col-md-6'>
              <p className='badge p-2 secondary-badge px-3 '><i class="fa fa-bar"></i>Schools</p>
              <br/>
              <h3 className='p-heading'> Prasasti for Schools</h3>
              <div className='bar'></div>
              <br />
              <p className='fs-3'>Builds students digital profile from School age</p>
              <div className='d-flex '>
              <h4 className='p-heading fs-5 '><span className='primary-dot'>.</span>  Remote Access</h4>
              <h4 className='p-heading fs-5 mx-5'><span className='primary-dot'>.</span>  Work Anytime</h4>
              </div>
              <br/>
              <button className='btn third-btn'>Learn More</button>
            </div>
            <div className='col-md-6 mt-4 d-flex '>
                <img className='img-fluid' src='schools.png' />
            </div>
          </div>
          <br/>
          

          {/* organizations */}
          <div className='row py-5'>
            <div className='col-md-5 mb-4 p-0 d-flex align-items-center'>
                <img className='img-fluid' src='company.png' />
            </div>
            <div className='col-md-7'>
              <p className='badge p-2 primary-badge px-3 '><i class="fa fa-bar"></i>Company</p>
              <br/>
              <h3 className='p-heading'> Hackathon Organizers and Training Companies</h3>
              <div className='bar'></div>
              <br />
              <p className='fs-3'>Make your Hackathon more impactful for the participants. </p>
              <div className='d-flex '>
              <h4 className='p-heading fs-5'><span className='primary-dot'>.</span>  Career Success</h4>
              <h4 className='p-heading fs-5 mx-5'><span className='primary-dot px-3'>.</span>  Drive Demand</h4>
              </div>
              <br/>
              <button className='btn third-btn'>Learn More</button>
            </div>
          </div>
      </div>
            </div>
          </div>
      </div>


      {/* section */}

      <div className='container my-5 px-lg-5 light-gradient-bg p-4 rounded-3'>
      <div className='badge primary-badge'>" Talent Search</div>
      <br/>
        <div className='row'>
          <h2 className='p-heading'>Talent Search for Employers using Prasasti Ecosystems.</h2>
          <p className='fs-4'>Help Companies hire the best talent by verified skills and Credentials.
            Sourcing and Screening made easy with skill based digital profiles.</p>
        </div>
        <div className='row px-lg-5 mt-5'>
          <div className='col-md-6'>
            <h1 className='bold-heading'>
              50%
            </h1>
            <h4 className='p-heading'>Boost in Production</h4>
          </div>
          <div className='col-md-6'>
          <img className='img-fluid' src='girlcard.png' />
          </div>
        </div>
      </div>

      {/* register with us */}

      <div  className='container my-5 py-5'>
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='col-md-7'>
          <h2 className='p-heading'>Register With Us</h2>
          <br/>
          <p>To get latest news and notifications regarding Prasasti  Register with US. Enter your email and click the Register with us button to stay updated. </p>
          <br/>
          <br/>
          <div class="input-group">
            <input className="form-control show-input py-3" placeholder="Add your Email" />
            <button className="show-btn">Register With Us</button>
            </div>
            <br/>
            <p>Everyone gets something special. Sign up to be everyone. :P</p>
          </div>
          <div className='col-md-5 mt-2'>
            <img className='img-fluid' src='register.png'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home