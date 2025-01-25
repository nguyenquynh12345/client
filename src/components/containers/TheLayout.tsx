import { CButton, CCol, CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CRow } from "@coreui/react-pro";
import { useState } from "react";
import Default from "../modules/default/Default";

const TheLayout = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <header className="py-2 border-bottom">
        <CContainer>
          <CRow>
            <CCol lg={2}>
              <img width="60" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75ENH-AMey07KRojt4hx7_--_1ncXTWaTBg&s" alt="" />
            </CCol>
            <CCol lg={10} className="m-auto">

              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <CFormInput size="sm" placeholder="Tìm kiếm" style={{ width: "200px" }} className="bg-light text-black" />

                  <CButton onClick={() => setVisible(true)} size="sm" className="bg-light text-black border-black">Bộ lọc</CButton>
                </div>
                <CDropdown >
                  <CDropdownToggle size="sm" className="text-black bg-light border-black">
                    Tài khoản
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="/auth/login">Đăng nhập</CDropdownItem>
                    <CDropdownItem href="/auth/register">Đăng ký</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </div>
            </CCol>
          </CRow>
        </CContainer>
      </header>
      <Default></Default>
      <CModal size="lg" visible={visible} onClose={() => setVisible(false)} className="bg-light border-black" backdrop="static">
        <CModalHeader className="bg-light text-black fw-semibold fs-5 mb-4">
          Bộ lọc
        </CModalHeader>
        <CModalBody>
          <div className="d-flex flex-column gap-3">
            <CFormSelect size="sm" options={["Chọn loại nhà trọ", "Nhà trọ cấp 4", "Chung cư mini", "Nhà trọ khép kín"]} width="120" className="bg-light text-black" />
            <CFormSelect size="sm" options={["Chọn theo khu vực", "Hà nội"]} width="120" className="bg-light text-black" />
            <CFormSelect size="sm" options={["Chọn giá", "100.000 - 200.000", "200.000 - 300.000"]} width="120" className="bg-light text-black" />
          </div>
        </CModalBody>
        <CModalFooter className="bg-light mt-4">
          <CButton onClick={() => setVisible(false)} size="sm" className="bg-light text-black border-black">Lưu</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};
export default TheLayout;
