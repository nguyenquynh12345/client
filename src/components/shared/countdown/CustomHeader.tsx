import { useRouter } from "@/shared/utils/hooks/useRouter";
import { CButton, CCol, CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CRow } from "@coreui/react-pro";
import { useState } from "react";

const CustomHeader = () => {
    const { navigate } = useRouter();
    const [visible, setVisible] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [price, setPrice] = useState('');
    const [region, setRegion] = useState('');
    const [roomType, setRoomType] = useState('');

    return <>
        <header className="py-2 border-bottom">
            <CContainer>
                <CRow>
                    <CCol lg={2}>
                        <a href="/">
                            <img width="60" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75ENH-AMey07KRojt4hx7_--_1ncXTWaTBg&s" alt="" /></a>
                    </CCol>
                    <CCol lg={10} className="m-auto">

                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center gap-3">
                                <CFormInput onChange={(e) => setKeyword(e.target.value)} size="sm" placeholder="Tìm kiếm" style={{ width: "200px" }} className="bg-light text-black" />
                                <CButton onClick={() => navigate(`/search/?q=${keyword}`)} size="sm" className="bg-light text-black border-black">Tìm kiếm</CButton>
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
        <CModal size="lg" visible={visible} onClose={() => setVisible(false)} className="bg-light border-black" backdrop="static">
            <CModalHeader className="bg-light text-black fw-semibold fs-5 mb-4">
                Bộ lọc
            </CModalHeader>
            <CModalBody>
                <div className="d-flex flex-column gap-3">
                    <CFormSelect onChange={(e) => setRoomType(e.target.value)} size="sm" options={[{ label: 'Loại nhà', value: '' }, { label: 'Nhà cấp 4', value: 'otp1' }, { label: 'Chung cư mini', value: 'otp2' }, { label: 'Chung cư', value: 'otp3' }, { label: 'Nhà nguyên căn', value: 'otp4' }]} width="120" className="bg-light text-black" />
                    <CFormSelect onChange={(e) => setRegion(e.target.value)} size="sm" options={[{ label: 'Khu vực', value: '' }, { label: 'Bắc từ liêm', value: '1' }, { label: 'Nam từ liêm', value: '2' }, { label: 'Đống đa', value: '3' }, { label: 'Cầu giấy', value: '4' }, { label: 'Hoàng mai', value: '5' }]} width="120" className="bg-light text-black" />
                    <CFormSelect onChange={(e) => setPrice(e.target.value)} size="sm" options={[{ label: "Chọn giá", value: '' }, { label: '1.000.000đ', value: 'price1' }, { label: '1.000.000đ - 2.000.000đ', value: 'price2' }, { label: '2.000.000đ - 5.000.000đ', value: 'price3' }, { label: '5.000.000đ - 10.000.000đ', value: 'price4' }, { label: 'Trên 10.000.000đ', value: 'price5' }]} width="120" className="bg-light text-black" />
                </div>
            </CModalBody>
            <CModalFooter className="bg-light mt-4">
                <CButton onClick={() => {
                    setVisible(false);
                    navigate(`/search?q=${keyword}&region=${region}&categories=${roomType}&price=${price}`);
                }} size="sm" className="bg-light text-black border-black">Lưu</CButton>
            </CModalFooter>
        </CModal></>
};

export default CustomHeader;