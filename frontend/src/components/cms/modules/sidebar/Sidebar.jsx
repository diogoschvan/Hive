import style from "../../../../styles/cms/Sidebar.module.css";
import Pages from "./Pages";
import Workspace from "./Workspace";

export default function Sidebar() {
    return(
        <div className={style.sidebar}>
             <Pages />
             <div className={style.separador}></div>
             <Workspace />
        </div>
    );
}