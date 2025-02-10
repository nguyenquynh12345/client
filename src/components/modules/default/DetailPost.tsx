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
const DetailPost = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { params } = useRouter();
  const id = params.id;
  const { initialState } = useSelector((state: RootState) => state.defReducer);
  const { detailPost } = initialState; // Thêm totalItems từ state
  useEffect(() => {
    dispatch(getEntitie(id || '0'));
  }, [id]);
  const posts = [
    {
      title: 'KÝ TÚC XÁ - QUẬN 10 - GIÁ SINH VIÊN',
      price: '1.4 triệu/tháng',
      time: '12 giờ trước',
      image: 'https://vinhtuong.com/sites/default/files/2023-02/dac-diem-nha-cap-4.png',
    },
    {
      title: 'PHÒNG TRỌ GIÁ RẺ GIỜ GIẤC TỰ DO GIÁ TỪ 2.3TR/THÁNG...',
      price: '2.3 triệu/tháng',
      time: '31 phút trước',
      image: 'https://vinhtuong.com/sites/default/files/2023-02/dac-diem-nha-cap-4.png',
    },
    {
      title: 'PHÒNG TRỌ CAO CẤP GẦN LOTTE, RMIT, PMH, BV 24/24...',
      price: '3.5 triệu/tháng',
      time: '6 giờ trước',
      image: 'https://vinhtuong.com/sites/default/files/2023-02/dac-diem-nha-cap-4.png',
    },
    {
      title: 'PHÒNG ĐẸP - DUPLEX - CĂN GÓC DUY NHẤT CHỈ 3,5 TR',
      price: '3.5 triệu/tháng',
      time: '3 giờ trước',
      image: 'https://vinhtuong.com/sites/default/files/2023-02/dac-diem-nha-cap-4.png',
    },
    {
      title: 'KÝ TÚC XÁ QUẬN 4 TRỌN GÓI 1TR150 BAO ĐIỆN NƯỚC...',
      price: '800.000 đồng/tháng',
      time: '4 giờ trước',
      image: 'https://vinhtuong.com/sites/default/files/2023-02/dac-diem-nha-cap-4.png',
    },
    {
      title: 'KÝ TÚC XÁ QUẬN 7 TRỌN GÓI 1TR GẦN LOTTE MART',
      price: '700.000 đồng/tháng',
      time: '1 ngày trước',
      image: 'https://vinhtuong.com/sites/default/files/2023-02/dac-diem-nha-cap-4.png',
    },
  ];

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

            <div className="border rounded p-4 bg-white shadow-sm mt-4">
              <h2 className="text-primary mb-4">Tin đăng nổi bật</h2>
              <div className="list-group">
                {posts.map((post, index) => (
                  <div key={index} className="list-group-item d-flex align-items-center border-0 border-bottom pb-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="img-thumbnail"
                      style={{ width: '60px', height: '60px' }}
                    />
                    <div className="ms-3">
                      <h6 className="text-danger mb-1">{post.title}</h6>
                      <p className="text-success fw-bold mb-1">{post.price}</p>
                      <p className="text-muted small mb-0">{post.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default DetailPost;
