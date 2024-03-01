import style from "../../../../styles/cms/Sidebar.module.css";
import HistoryIcon from  "../../../icons/HistoryIcon.jsx";
import TrashIcon from  "../../../icons/TrashIcon.jsx";

export default function Workspace (){
    return(
        <div className={style.workspace_block}>
            <span className={style.title_sidebar}>
                Workspace
            </span>
            <div className={style.container_itens}>
                <div>
                    <div className={style.sidebar_link}>
                        <HistoryIcon className={style.sidebar_icons}/>
                        <span className={style.sidebar_text}>Histórico de Alterações</span>
                    </div>
                </div>
                <div>
                    <div className={style.sidebar_link}>
                        <TrashIcon className={style.sidebar_icons}/>
                        <span className={style.sidebar_text}>Lixeira</span>
                    </div>
                </div>
            </div>
        </div>
    );
}