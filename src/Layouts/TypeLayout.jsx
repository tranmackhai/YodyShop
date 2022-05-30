import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const TypeLayout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default TypeLayout;
