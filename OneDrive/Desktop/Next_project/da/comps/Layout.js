import Footer from "./Footer";
import Navbar from "./navigator";

const Layout = ({children}) => {
    return ( 
        <div className="content">
            <Navbar />
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;