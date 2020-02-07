import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  // MDBCardTitle,
  // MDBCardText,
  MDBBtn,
  MDBNavLink
} from 'mdbreact';
// import './HomePage.css';

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <MDBContainer>
      <MDBRow>
      <MDBCol>
      <MDBCard>
      <MDBCardBody className="p-5">
      <div style={{ textAlign: 'left' }}>
        <h1 class="py-3">
          Hello there!
        </h1>

        <MDBNavLink
          tag='MDBBtn'
          to='./page1'
          className='btn btn-primary btn-lg btn-rounded d-inline'
          onClick={this.scrollToTop}
        >
          Get Started
        </MDBNavLink>
      </div>
      </MDBCardBody>
      </MDBCard>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
  );
}
}

export default HomePage;
