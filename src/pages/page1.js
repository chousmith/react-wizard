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

class page1 extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <MDBContainer>
      <MDBRow>
      <MDBCol>
      <MDBCard>
      <MDBCardBody>

      <MDBRow>
      <MDBCol>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      </MDBCol>
      </MDBRow>
      <MDBRow className="py-4">
      <MDBCol>
        <h1>
          Select your area(s).
        </h1>
        <p>Choose all that apply.</p>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-primary active">
            <input type="checkbox" name="buttons[o1]" checked autocomplete="off" /> Option 1
          </label>
          <label class="btn btn-primary">
            <input type="checkbox" name="buttons[o2]" autocomplete="off" /> Option 2
          </label>
          <label class="btn btn-primary">
            <input type="checkbox" name="buttons[o3]" autocomplete="off" /> Option 3
          </label>
          <label class="btn btn-primary">
            <input type="checkbox" name="buttons[o4]" autocomplete="off" /> Option 4
          </label>
          <label class="btn btn-primary">
            <input type="checkbox" name="buttons[o5]" autocomplete="off" /> Option 5
          </label>
          <label class="btn btn-primary">
            <input type="checkbox" name="buttons[o6]" autocomplete="off" /> Option 6
          </label>
          <label class="btn btn-primary">
            <input type="checkbox" name="buttons[o7]" autocomplete="off" /> Option 7
          </label>
          <label class="btn btn-primary">
            <input type="checkbox" name="buttons[o8]" autocomplete="off" /> Option 8
          </label>
        </div>
      </MDBCol>
      </MDBRow>
        <MDBRow className="py-4">
        <MDBCol>
        <MDBNavLink
          tag='button'
          to='/'
          className='btn btn-outline btn-lg btn-rounded d-inline'
          onClick={this.scrollToTop}
        >
          &laquo; Back
        </MDBNavLink>
        <MDBNavLink
          tag='button'
          to='/page2'
          className='btn btn-primary btn-lg btn-rounded d-inline'
          onClick={this.scrollToTop}
        >
          Continue &raquo;
        </MDBNavLink>
      </MDBCol>
      </MDBRow>
      </MDBCardBody>
      </MDBCard>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
  );
}
}

export default page1;
