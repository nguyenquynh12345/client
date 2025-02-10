import { getEntities } from '@/components/modules/default/api';
import { defSelector } from '@/components/modules/default/def.reducer';
import { insertCommas } from '@/shared/utils/ultils';
import { AppDispatch } from '@/store';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LatestPosts = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getEntities({ page: 0, size: 5 }));
  }, []);

  const data = useSelector(defSelector.selectAll);

  return (
    <div className=" p-3">
      <h5 className="fw-bold">Tin mới đăng</h5>
      <ul className="list-unstyled">
        {data[0]?.map((post: any, index: number) => (
          <li key={index} className="d-flex mb-3 border-bottom pb-2">
            <a href={`/detail-post/${post.id}`} className="text-decoration-none text-dark fw-semibold d-block">
              <img
                src={'http://103.20.102.115:3333' + post.imageUrl}
                alt={post.roomName}
                className="me-2 rounded"
                style={{ width: '120px', height: '100px', objectFit: 'cover' }}
              />
            </a>
            <div>
              <a href={`/detail-post/${post.id}`} className="text-decoration-none text-dark fw-semibold d-block">
                {post.roomName}
              </a>
              <span className="text-success fw-bold">{insertCommas(post.price)}</span>
              <small className="text-muted d-block">{dayjs(post.created_at).format('DD/MM/YYYY')}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestPosts;
