import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


const Layout = () => {
  return (
    <>
        <NavBar />
            <div className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
                <Outlet />
            </div>
        <Footer />
    </>
  )
}

export default Layout