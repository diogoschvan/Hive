import style from "../../../styles/builder/Sidebar.module.css";
import GridIcon from  "../../icons/GridIcon";
import OpenFolderIcon from  "../../icons/OpenFolderIcon";
import FolderIcon from  "../../icons/FolderIcon";
import PlusIcon from  "../../icons/PlusIcon";
export default function Pages (){
    return(
        <div className={style.project_block}>
            <span className={style.title_sidebar}>
                Paginas
            </span>
            <div className={style.container_project_itens}>
                <div className={style.project_itens}>
                    <a href="#" className={style.link_page}>
                        <GridIcon className={style.project_icons}/>
                        <span className={style.project_text}>All</span>
                    </a>
                </div>
                <div className={style.project_itens}>
                    <a href="#" className={style.link_page}>
                        <OpenFolderIcon className={style.project_icons}/>
                        <span className={style.project_text}>Folders</span>
                    </a>
                </div>
                <div className={style.project_itens}>
                    <a href="#" className={style.link_page}>
                        <FolderIcon className={style.project_icons}/>
                        <span className={style.project_text}>Arquivadas</span>
                    </a>
                </div>
                <div className={style.project_itens}>
                    <a href="#" className={style.link_page}>
                        <PlusIcon className={style.project_icons}/>
                        <span className={style.project_text}>New Folder</span>
                    </a>
                </div>
            </div>
        </div>
    );
}