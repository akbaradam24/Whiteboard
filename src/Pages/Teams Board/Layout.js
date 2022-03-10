import UserNavbar from "../../Components/ShareComponent/Navbar/NavbarIsLogin";
import SidebarStatic from "../../Components/ShareComponent/Sidebar/SidebarStatic";

const Layout = ({ children }) => {
  return (
    <>
      <UserNavbar />
      <SidebarStatic />
      {children}
    </>
  );
};
export default Layout;
