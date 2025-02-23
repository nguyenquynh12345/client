import Default from '../modules/default/Default';
import Footer from '../shared/countdown/CustomFooter';
import CustomHeader from '../shared/countdown/CustomHeader';

const TheLayout = () => {
  return (
    <div>
      <CustomHeader></CustomHeader>
      <Default></Default>
      <Footer />
    </div>
  );
};
export default TheLayout;
