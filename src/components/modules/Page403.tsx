import notFoundImg from '@assets/img/403.png';
import { cilMagnifyingGlass } from '@coreui/icons-pro';
import CIcon from '@coreui/icons-react';
import { CButton, CCol, CContainer, CFormInput, CImage, CInputGroup, CInputGroupText, CRow } from '@coreui/react-pro';

const Page404 = () => {
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5} className="my-auto">
            <div className="clearfix">
              <h1 className="float-start display-3 me-4">403</h1>
              <h4 className="pt-3">Oops! You{"'"}re not authorized.</h4>
              <p className="text-medium-emphasis float-start">Please contact to Administrator.</p>
            </div>
            <CInputGroup className="input-prepend">
              <CInputGroupText>
                <CIcon icon={cilMagnifyingGlass} />
              </CInputGroupText>
              <CFormInput type="text" placeholder="What are you looking for?" />
              <CButton color="info">Search</CButton>
            </CInputGroup>
          </CCol>
          <CCol md={7}>
            <CImage fluid src={notFoundImg} />
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Page404;
