import React from 'react'

function ContactUs() {
  return (
    
    <div className='contact'>
    {/* Contact us showcase */}
      <div className='row bg-light py-5'>
        <div className='badge text-primary'>Contact Us</div>
        <br/>
        <h1 className='fw-bold text-center mx-auto w-50 my-4'>Fill out the form to be <br/> contacted by a member <br/> of the prasasti team.
        </h1>
      </div>

      {/* Contact Form */}

      <div className='row'>
        <div className='container px-lg-5 mx-auto p-5'>
          <div className='row bg-light p-5'>
            <div className='col-md-6'>
              <label for='first Name text-dark' className="col-form-label">First Name</label>
              <input className='form-control p-3' placeholder='Enter First Name'/>
            </div>
            <div className='col-md-6'>
              <label for='first Name text-dark' className="col-form-label">First Name</label>
              <input className='form-control p-3' placeholder='Enter First Name'/>
            </div>
            <div className='col-md-6 mt-3'>
              <label for='first Name text-dark' className="col-form-label">First Name</label>
              <input className='form-control p-3' placeholder='Enter First Name'/>
            </div>
            <div className='col-md-6 mt-3'>
              <label for='first Name text-dark' className="col-form-label">First Name</label>
              <input className='form-control p-3' placeholder='Enter First Name'/>
            </div> 
            <div className='col-md-12 py-3'>
              <lable for="message" className="col-form-label">Message</lable>
              <textarea className='form-control textarea p-3' placeholder='Enter a message'/>
            </div> 
            <div className='col-md-12'>
              <div className='d-flex align-items-center '>
              <input type='checkbox' /><p className='pt-3 px-2'>I agree with Prasasti Privacy Policy</p>
              </div>
              <br/>
              <button className='btn btn-primary'>Submit</button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}

      <div className='row'>
        <h2 className='text-center'>Frequently Asked Questions</h2>
        <p className='text-center w-50 mx-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
      </div>
      <div className='container py-5'>
      <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header py-2 py-2">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Authentification Issues
              </button> 
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <p>hello dummy text</p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header py-2">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <p>hello dummy text</p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header py-2">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <p>hello dummy text</p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header py-2">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Accordion Item #4
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <p>hello dummy text</p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header py-2">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Accordion Item #5
              </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <p>hello dummy text</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header py-2">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Accordion Item #6
              </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>hello dummy text</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default ContactUs