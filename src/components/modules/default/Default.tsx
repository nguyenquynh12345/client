import { CCol, CContainer, CRow } from "@coreui/react-pro";
import PostItem from "./PostItem";

const Default = () => {
    return (
        <CContainer >
            <CRow>
                <CCol lg={8}>
                    <PostItem></PostItem>
                </CCol>
                <CCol lg={4}>
                    1
                </CCol>
            </CRow>
        </CContainer>
    );
};

export default Default;