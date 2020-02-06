import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  // MDBCardTitle,
  // MDBCardText,
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
      <MDBCardBody>
      <div style={{ textAlign: 'left' }}>
        <h1 class="py-3">
          Hello there!
        </h1>

        <MDBNavLink
          tag='button'
          to='/page1'
          className='btn btn-primary btn-lg btn-rounded d-inline'
          onClick={this.scrollToTop}
        >
          Get Started &raquo;
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
