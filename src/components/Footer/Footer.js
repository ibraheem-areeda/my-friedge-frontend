import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://google.com' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='https://instgram.com' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://github.com' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
              About 
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>


            

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact us :</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                 location: Jordan , Amman 
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                 email: info@my_freadge.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                phone: + 01 234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='j'>
           MY-FREDGE.com
        </a>
      </div>
    </MDBFooter>
  );
}