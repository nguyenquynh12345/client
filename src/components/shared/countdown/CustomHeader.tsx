import { logout } from '@/components/modules/auth/auth.reducer';
import { RootState } from '@/reducers';
import { useRouter } from '@/shared/utils/hooks/useRouter';
import { AppDispatch } from '@/store';
import {
  CButton,
  CCol,
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CRow,
} from '@coreui/react-pro';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CustomHeader = () => {
  const { navigate } = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [visible, setVisible] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [price, setPrice] = useState('');
  const [region, setRegion] = useState('');
  const [roomType, setRoomType] = useState('');
  const { userInfo } = useSelector((state: RootState) => state.authentication);

  return (
    <>
      <header className="py-2 border-bottom">
        <CContainer>
          <CRow>
            <CCol lg={2}>
              <a href="/">
                <img
                  width="60"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75ENH-AMey07KRojt4hx7_--_1ncXTWaTBg&s"
                  alt=""
                />
              </a>
            </CCol>
            <CCol lg={10} className="m-auto">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <CFormInput
                    onChange={(e) => setKeyword(e.target.value)}
                    size="sm"
                    placeholder="Tìm kiếm"
                    style={{ width: '200px' }}
                    className="bg-light text-black"
                  />
                  <CButton
                    onClick={() => navigate(`/search/?q=${keyword}`)}
                    size="sm"
                    className="bg-light text-black border-black"
                  >
                    Tìm kiếm
                  </CButton>
                  <CButton onClick={() => setVisible(true)} size="sm" className="bg-light text-black border-black">
                    Bộ lọc
                  </CButton>
                </div>
                {userInfo ? (
                  <div className="text-black fw-bold gap-3 fs-6 d-flex align-items-center border py-1 px-2 rounded">
                    <img src="https://phongtro123.com/images/default-user.svg" alt="avatar" className="avatar"></img>
                    {userInfo.email}
                    <span className="cursor-pointer" onClick={() => dispatch(logout())}>
                      <img
                        width={20}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS_cH_9aafFUfg6SUqtvp_LKPHIATbIRRgPA&s"
                        alt=""
                      />
                    </span>
                  </div>
                ) : (
                  <CDropdown>
                    <CDropdownToggle size="sm" className="text-black bg-light border-black">
                      Tài khoản
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="/auth/login">Đăng nhập</CDropdownItem>
                      <CDropdownItem href="/auth/register">Đăng ký</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                )}
              </div>
            </CCol>
          </CRow>
        </CContainer>
      </header>
      <CModal
        size="lg"
        visible={visible}
        onClose={() => setVisible(false)}
        className="bg-light border-black"
        backdrop="static"
      >
        <CModalHeader className="bg-light text-black fw-semibold fs-5 mb-4">Bộ lọc</CModalHeader>
        <CModalBody>
          <div className="d-flex flex-column gap-3">
            <CFormSelect
              onChange={(e) => setRoomType(e.target.value)}
              size="sm"
              options={[
                { label: 'Loại nhà', value: '' },
                { label: 'Nhà cấp 4', value: '6' },
                { label: 'Chung cư mini', value: '7' },
                { label: 'Chung cư', value: '3' },
                { label: 'Nhà nguyên căn', value: '8' },
              ]}
              width="120"
              className="bg-light text-black"
            />
            <CFormSelect
              onChange={(e) => setRegion(e.target.value)}
              size="sm"
              options={[
                { label: 'Khu vực', value: '' },
                { label: 'Bắc từ liêm', value: '4' },
                { label: 'Nam từ liêm', value: '7' },
                { label: 'Đống đa', value: '5' },
                { label: 'Hà đông', value: '8' },
              ]}
              width="120"
              className="bg-light text-black"
            />
            <CFormSelect
              onChange={(e) => setPrice(e.target.value)}
              size="sm"
              options={[
                { label: 'Chọn giá', value: '' },
                { label: '1.000.000đ', value: '0-1000000' },
                { label: '1.000.000đ - 2.000.000đ', value: '1000000-2000000' },
                { label: '2.000.000đ - 5.000.000đ', value: '2000000-5000000' },
                { label: '5.000.000đ - 10.000.000đ', value: '5000000-10000000' },
                { label: 'Trên 10.000.000đ', value: '10000000-100000000' },
              ]}
              width="120"
              className="bg-light text-black"
            />
          </div>
        </CModalBody>
        <CModalFooter className="bg-light mt-4">
          <CButton
            onClick={() => {
              setVisible(false);
              navigate(`/search?q=${keyword}&region=${region}&categories=${roomType}&price=${price}`);
            }}
            size="sm"
            className="bg-light text-black border-black"
          >
            Lưu
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default CustomHeader;
