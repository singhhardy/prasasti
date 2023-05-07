import React from "react";

function Showcase() {
  return (
    <div className="container my-5 py-5">
    {/* main showcase */}
    <br/>
    <br/>
      <div className="row">
        <div className="col-lg-6 px-5">
          <h1 className="p-heading">
            Elevate your digital <br /> Reputation  with Prasasti’s <br /> Blockchain Platform
          </h1>
          <br />
          <p className="fs-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Welcom to Prasasti</p>
          <br />
          <div class="input-group">
            <input className="form-control show-input py-3" placeholder="Add your Email" />
            <button className="show-btn">Get Started For Free</button>
            </div>
        </div>
        <div className="col-lg-6">
            <img className="img-fluid" src="heroimg1.png" alt="showcase" />
        </div>
        <div className="hero-bg"></div>
      </div>

      {/* Brands */}

      <div className="container py-5 my-5">
        <div className="row">
        <div className="col-sm ">
                <div className="brand-img d-flex align-items-center justify-content-center my-2">
                    <img className="img-fluid  rounded-4 border p-4" src="brand1.png" />
                </div>
            </div>
            <div className="col-sm">
                <div className="brand-img d-flex align-items-center justify-content-center my-2">
                    <img className="img-fluid rounded-4 border p-4" src="brand1.png" />
                </div>
            </div>
            <div className="col-sm">
                <div className="brand-img d-flex align-items-center justify-content-center my-2">
                    <img className="img-fluid rounded-4 border p-4" src="brand1.png" />
                </div>
            </div>
            <div className="col-sm">
                <div className="brand-img  d-flex align-items-center justify-content-center my-2">
                    <img className="img-fluid rounded-4 border p-4" src="brand1.png" />
                </div>
            </div>
        </div>
      </div>

      {/* web3 showcase */}

      <div className="row py-5">
        <div className="container text-center">
            <h1>Create your Web3 Profile</h1>
            <br/>
            <p className="w-50 m-auto">Keeping your eye on the ball while performing a deep dive on the start-up mentality to  derive convergence on cross-platform integration.</p>
        </div>
        {/* cards */}
        <div className="row my-5">
            <div className="col-md">
            <div className="row py-3">
                    <div className="col-md-1 text center">
                        <h1 className=""><i class="fa-brands fa-telegram text-icon"></i></h1>
                    </div>
                    <div className="col-md-11 px-4">
                        <h3>Explore ideas together</h3>
                        <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                        <a className="fs-5" href="#">Learn more <i class="fa fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-md-1">
                        <h1 className=""><i class="fa-solid fa-lightbulb  text-icon"></i></h1>
                    </div>
                    <div className="col-md-11 px-4">
                        <h3>Bring those ideas to life</h3>
                        <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                        <a className="fs-5" href="#">Learn more <i class="fa fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-md-1">
                        <h1 className=""><i class="fa-solid fa-chart-pie  text-icon"></i></h1>
                    </div>
                    <div className="col-md-11 px-4">
                        <h3>Ship better outcomes</h3>
                        <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                        <a className="fs-5" href="#">Learn more <i class="fa fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md d-flex align-items-center justify-content-center">
            <img className="img-fluid" src="Photo.png" />
            </div>
        </div>

      </div>
    </div>
  );
}

export default Showcase;
