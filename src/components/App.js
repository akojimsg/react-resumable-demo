import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <div className="features-container section-container">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 features section-description wow fadeIn">
                        <h2>Features</h2>
                        <div className="divider-1 wow fadeInUp"><span></span></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 features-box features-box-gray wow fadeInUp">
                        <div className="features-box-icon">
                            <span aria-hidden="true" className="typcn typcn-eye-outline"></span>
                        </div>
                        <h3>Easy To Use</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    </div>
                    <div className="col-sm-4 features-box wow fadeInDown">
                        <div className="features-box-icon">
                            <span aria-hidden="true" className="typcn typcn-thumbs-ok"></span>
                        </div>
                        <h3>Responsive Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    </div>
                    <div className="col-sm-4 features-box features-box-gray wow fadeInUp">
                        <div className="features-box-icon">
                            <span aria-hidden="true" className="typcn typcn-cog-outline"></span>
                        </div>
                        <h3>Bootstrap Engine</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 features-box wow fadeInUp">
                        <div className="features-box-icon">
                            <span aria-hidden="true" className="typcn typcn-video-outline"></span>
                        </div>
                        <h3>Lots Of Videos</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    </div>
                    <div className="col-sm-4 features-box features-box-gray wow fadeInDown">
                        <div className="features-box-icon">
                            <span aria-hidden="true" className="typcn typcn-device-phone"></span>
                        </div>
                        <h3>Mobile App</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    </div>
                    <div className="col-sm-4 features-box wow fadeInUp">
                        <div className="features-box-icon">
                            <span aria-hidden="true" className="typcn typcn-group-outline"></span>
                        </div>
                        <h3>Big Community</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 section-bottom-button wow fadeInUp">
                        <a className="btn btn-link-1 scroll-link" href="#pricing">Our prices</a>
                    </div>
                </div>
            </div>
        </div>

    );
  }
}

export default App;
