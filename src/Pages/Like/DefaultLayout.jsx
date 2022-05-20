import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SideBar from "./SideBar/SideBar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
