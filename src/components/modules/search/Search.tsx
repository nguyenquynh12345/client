import Footer from '@/components/shared/countdown/CustomFooter';
import CustomHeader from '@/components/shared/countdown/CustomHeader';
import { AppDispatch } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { searchSelector } from './reducer';
import { useEffect } from 'react';
import { getEntities } from './api';
import { useSearchParams } from 'react-router-dom';
import PostItem from '../default/PostItem';

const search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const price = searchParams.get('price') || '';
  const region = searchParams.get('region') ? Number(searchParams.get('region')) : undefined;
  const categories = searchParams.get('categories') || '';

  useEffect(() => {
    dispatch(getEntities({ q: query, price, region, categories }));
  }, [query, price, region, categories]);
  const data = useSelector(searchSelector.selectAll);

  return (
    <div>
      <CustomHeader></CustomHeader>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {data.length > 0 ? (
              <PostItem data={[data]} imageRight></PostItem>
            ) : (
              <span className="fw-bold fs-5 pt-3">Không có dữ liệu</span>
            )}
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default search;
