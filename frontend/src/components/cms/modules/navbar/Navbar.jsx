import style from "../../../../styles/cms/Navbar.module.css";
import Busca from "./Busca";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
    return(
        <div className={style.navbar}>
            <div>
                <img className={style.navbar_logo} src="/assets/images/builder/navbar/logo/logo_hive.jpg" alt="logo" />
            </div>

            <Busca />
            
            <div className={style.container}>
            <ThemeButton />
                <button className={style.new_page_button}>New Page</button>
            </div> 
        </div>
    );
}