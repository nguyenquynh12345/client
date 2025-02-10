import CustomHeader from '@/components/shared/countdown/CustomHeader';
import { useRouter } from '@/shared/utils/hooks/useRouter';
import { AppDispatch } from '@/store';
import { CCol, CRow } from '@coreui/react-pro';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEntitie } from './api';
import { RootState } from '@/reducers';
import { insertCommas, insertDotCommas } from '@/shared/utils/ultils';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhone, FaRegCommentDots, FaHeart, FaShareAlt, FaFlag } from 'react-icons/fa';
import dayjs from 'dayjs';
import Footer from '@/components/shared/countdown/CustomFooter';
import LatestPosts from '@/components/shared/countdown/Lastestnew';
const DetailPost = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { params } = useRouter();
  const id = params.id;
  const { initialState } = useSelector((state: RootState) => state.defReducer);
  const { detailPost } = initialState; // Thêm totalItems từ state
  useEffect(() => {
    dispatch(getEntitie(id || '0'));
  }, [id]);
  return (
    <div>
      <CustomHeader></CustomHeader>
      <div className="container  mt-4">
        <div className="row ">
          <div className="col-8">
            <div className="container p-4 bg-white shadow-lg rounded">
              <div className="w-100 h-64 bg-light rounded overflow-hidden">
                <CRow>
                  <CCol lg={6}>
                    <img
                      src={'http://103.20.102.115:3333' + detailPost?.imageUrl}
                      alt="Room Image"
                      className="w-100 h-100 object-cover main-img"
                    />
                  </CCol>
                  <CCol lg={6}>
                    <CRow>
                      <CCol lg={6}>
                        <img
                          src={'http://103.20.102.115:3333' + detailPost?.imageUrl}
                          alt="Room Image"
                          className="w-100 h-100 object-cover main-img"
                        />
                      </CCol>
                      <CCol lg={6}>
                        <img
                          src={'http://103.20.102.115:3333' + detailPost?.imageUrl}
                          alt="Room Image"
                          className="w-100 h-100 object-cover main-img"
                        />
                      </CCol>
                    </CRow>
                    <CRow className="mt-3">
                      <CCol lg={6}>
                        <img
                          src={'http://103.20.102.115:3333' + detailPost?.imageUrl}
                          alt="Room Image"
                          className="w-100 h-100 object-cover main-img"
                        />
                      </CCol>
                      <CCol lg={6}>
                        <img
                          src={'http://103.20.102.115:3333' + detailPost?.imageUrl}
                          alt="Room Image"
                          className="w-100 h-100 object-cover main-img"
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                </CRow>
              </div>

              <div className="mt-4">
                <h2 className="text-primary fw-bold">{detailPost?.roomName}</h2>
                <p className="text-success fs-4 fw-semibold">{insertCommas(detailPost?.price)} VNĐ/tháng</p>
              </div>

              <div className="mt-4 text-secondary">
                <p>
                  <strong>Diện tích:</strong> {detailPost?.capacity} m²
                </p>
                <p>
                  <strong>Giá điện:</strong> {insertDotCommas(detailPost?.electricityPrice)}đ/kWh
                </p>
                <p>
                  <strong>Giá nước:</strong> {insertDotCommas(detailPost?.waterPrice)}đ/người
                </p>
                <p>
                  <strong>Tiện ích:</strong> {detailPost?.utilities}
                </p>
              </div>
              <p>{detailPost?.description}</p>
              <div className="mt-4 rounded">
                <p className="fw-semibold">Liên hệ:</p>
                <p>
                  {' '}
                  {detailPost?.user?.userName} - {detailPost?.user?.phone} (Chính chủ)
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card text-center p-3 shadow-sm" style={{ margin: 'auto' }}>
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <img
                    src={'https://phongtro123.com/images/default-user.svg'}
                    alt="User Avatar"
                    className="rounded-circle border"
                    width="80"
                    height="80"
                  />
                </div>

                {/* User Info */}
                <h5 className="mt-3">{detailPost?.user?.userName}</h5>
                <p className="text-success mb-1">● Đang hoạt động</p>
                <p className="text-muted small">Tham gia từ: {dayjs(detailPost?.createdAt).format('DD/MM/YYYY')}</p>

                {/* Contact Buttons */}
                <a href={`tel:${detailPost?.user?.phone}`} className="btn btn-success w-100 mb-2">
                  <FaPhone /> {detailPost?.user?.phone}
                </a>
                <a href="#" className="btn btn-primary w-100">
                  <FaRegCommentDots /> Nhắn Zalo
                </a>

                {/* Actions */}
                <div className="d-flex justify-content-between mt-3 text-secondary">
                  <button className="btn text-dark text-underline">
                    <FaHeart /> Lưu tin
                  </button>
                  <button className="btn text-dark text-underline">
                    <FaShareAlt /> Chia sẻ
                  </button>
                  <button className="btn text-dark text-underline">
                    <FaFlag /> Báo xấu
                  </button>
                </div>
              </div>
            </div>

            <LatestPosts></LatestPosts>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default DetailPost;
