import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBNavLink
} from 'mdbreact';

class page2 extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-5">
                <MDBRow>
                  <MDBCol className="p-4">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="py-4">
                  <MDBCol>
                    <h2><strong>How many seems like a good answer?</strong></h2>
                    <div class="btn-group btn-group-toggle d-block" data-toggle="buttons">
                      <label class="btn btn-primary btn-lg btn-lg m-3">
                        <input type="checkbox" name="buttons[o1]" autocomplete="off" /> 1-5
                      </label>
                      <label class="btn btn-primary btn-lg m-3">
                        <input type="checkbox" name="buttons[o2]" autocomplete="off" /> 6+
                      </label>
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="py-4">
                  <MDBCol>
                    <MDBNavLink
                      tag='button'
                      to='./page1'
                      className='btn btn-outline btn-lg btn-rounded d-inline'
                      onClick={this.scrollToTop}
                    >
                      &laquo; Back
                    </MDBNavLink>
                    <MDBNavLink
                      tag='button'
                      to='./page2'
                      className='btn btn-secondary btn-lg btn-rounded d-inline'
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

export default page2;
