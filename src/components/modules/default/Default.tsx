import { CCol, CContainer, CRow } from '@coreui/react-pro';
import PostItem from './PostItem';
import { useEffect } from 'react';
import { getListUpTop } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store';
import { RootState } from '@/reducers';
import LatestPosts from '@/components/shared/countdown/Lastestnew';

const Default = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { initialState } = useSelector((state: RootState) => state.defReducer);
  const { deleteEntitySuccess, updateEntitySuccess } = initialState; // Thêm totalItems từ state

  useEffect(() => {
    dispatch(getListUpTop());
  }, [updateEntitySuccess, deleteEntitySuccess]);

  return (
    <CContainer className="container-sm">
      <CRow>
        <CCol lg={7}>
          <PostItem data={initialState.listUpTop} />
          {/* <CustomPagination
                        totalPages={totalPages}
                        currentPage={filterState.page + 1}
                        onPageChange={handlePageChange}
                    /> */}
        </CCol>
        <CCol lg={5}>
          <LatestPosts></LatestPosts>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default Default;
