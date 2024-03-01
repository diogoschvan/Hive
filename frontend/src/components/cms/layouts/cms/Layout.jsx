import Navbar from "../../modules/navbar/Navbar";
import Sidebar from "../../modules/sidebar/Sidebar";

export default function Cms({ children }){
    return (
        <>
            <Navbar />
            <Sidebar />
            {children}
        </>
    )
}