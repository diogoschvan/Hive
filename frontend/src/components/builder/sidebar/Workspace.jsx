import style from "../../../styles/builder/Sidebar.module.css";
import HistoryIcon from  "../../icons/HistoryIcon.jsx";
import TrashIcon from  "../../icons/TrashIcon";

export default function Workspace (){
    return(
        <div className={style.workspace_block}>
            <span className={style.title_sidebar}>
                Workspace
            </span>
            <div className={style.container_project_itens}>
                <div className={style.project_itens}>
                    <a href="#" className={style.link_page}>
                        <HistoryIcon className={style.project_icons}/>
                        <span className={style.project_text}>Histórico de Alterações</span>
                    </a>
                </div>
                <div className={style.project_itens}>
                    <a href="#" className={style.link_page}>
                        <TrashIcon className={style.project_icons}/>
                        <span className={style.project_text}>Lixeira</span>
                    </a>
                </div>
            </div>
        </div>
    );
}