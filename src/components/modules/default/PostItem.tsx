import { getEllipsisTxt, insertCommas } from '@/shared/utils/ultils';
import dayjs from 'dayjs';

const PostItem = ({ data, imageRight }: { data: any; imageRight?: boolean }) => {
  if (!data) return null;
  console.log(data);

  return (
    <div className="w-100">
      {!imageRight
        ? data?.map((item: any, index: number) => (
          <div className="post-card" key={index}>
            <a href={`/detail-post/${item.id}`} className="post-images">
              <img src={'http://localhost:3333' + item.images[0].url} alt="Main" className="main-img" />
              <div className="sub-images">
                <img src={'http://localhost:3333' + item.images[0].url} alt="sub1" />
                <img src={'http://localhost:3333' + item.images[0].url} alt="sub2" />
                <img src={'http://localhost:3333' + item.images[0].url} alt="sub3" />
                <img src={'http://localhost:3333' + item.images[0].url} alt="sub4" />
              </div>
            </a>
            <div className="post-content">
              <h2 className="post-title">{item.title}</h2>
              <div className="stars">{'★'.repeat(5)}</div>
              <div className="d-flex align-items-end  gap-3">
                <p className="post-price mb-0">{insertCommas(item.price)} VNĐ / Tháng</p> -
                <p className="post-address mb-0">{item.area}m2</p> -
                <p className="post-address mb-0">{getEllipsisTxt(item.address, 20)}</p>
              </div>
              <p className="post-description">{getEllipsisTxt(item.description, 120)}</p>
              <div className="post-footer">
                <div className="user-info">
                  <img src="https://phongtro123.com/images/default-user.svg" alt="avatar" className="avatar" />
                  <div>
                    <p className="user-name mb-1">{item.user?.name}</p>
                    <p className="post-date">{dayjs(item.created_at).format('DD/MM/YYYY')}</p>
                  </div>
                </div>
                <a href={`tel:${item.user?.phone}`} className="call-button">
                  📞 {item.user?.phone}
                </a>
              </div>
            </div>
          </div>
        ))
        : data?.map((item: any, index: number) => (
          <div className="post-card row" key={index}>
            <div className="col-lg-5">
              <a href={`/detail-post/${item.id}`} className="post-images p-0">
                <img src={'http://localhost:3333' + item.images[0].url} alt="Main" className="w-100 h-auto mt-3" />
              </a>
            </div>
            <div className="col-lg-7">
              <div className="post-content">
                <a href={`/detail-post/${item.id}`} className="post-title">
                  {item.roomName}
                </a>
                <div className="stars">{'★'.repeat(5)}</div>
                <div className="">
                  <p className="post-price mb-0">Giá: {insertCommas(item.price)} VNĐ / Tháng</p>
                  <p className="post-address mb-0">Diện tích: {item.capacity}m2</p>
                  <p className="post-address mb-0">Địa Chỉ: {getEllipsisTxt(item.address, 20)}</p>
                </div>
                <p className="post-description">Mô tả: {getEllipsisTxt(item.description, 80)}</p>
                <div className="post-footer">
                  <div className="user-info">
                    <img src="https://phongtro123.com/images/default-user.svg" alt="avatar" className="avatar" />
                    <div>
                      <p className="user-name mb-1">{item.user?.userName}</p>
                      <p className="post-date">{dayjs(item.created_at).format('DD/MM/YYYY')}</p>
                    </div>
                  </div>
                  <a href={`tel:${item.user?.phone}`} className="call-button">
                    📞 {item.user?.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostItem;
