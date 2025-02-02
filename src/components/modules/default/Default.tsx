import { CCol, CContainer, CRow } from "@coreui/react-pro";
import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import { getEntities } from "./api";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { RootState } from "@/reducers";
import { defSelector } from "./def.reducer";
import CustomPagination from "@/components/shared/countdown/CustomPagination";
import LatestPosts from "@/components/shared/countdown/Lastestnew";

const Default = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { initialState } = useSelector((state: RootState) => state.defReducer);
    const { deleteEntitySuccess, updateEntitySuccess, totalPages } = initialState; // Thêm totalItems từ state

    const [filterState, setFilterState] = useState({
        page: 0,
        size: 10,
    });

    useEffect(() => {
        dispatch(getEntities(filterState));
    }, [filterState.page, updateEntitySuccess, deleteEntitySuccess]);

    const data = useSelector(defSelector.selectAll);
    const handlePageChange = (newPage: number) => {
        setFilterState((prev) => ({ ...prev, page: newPage - 1 }));
    };

    return (
        <CContainer className="container-sm">
            <CRow>
                <CCol lg={7}>
                    <PostItem data={data} />
                    <CustomPagination
                        totalPages={totalPages}
                        currentPage={filterState.page + 1}
                        onPageChange={handlePageChange}
                    />
                </CCol>
                <CCol lg={5}>
                    <LatestPosts></LatestPosts>
                </CCol>
            </CRow>
        </CContainer>
    );
};

export default Default;
