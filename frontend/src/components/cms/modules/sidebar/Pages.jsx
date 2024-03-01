import style from "../../../../styles/cms/Sidebar.module.css";
import useAddActiveClass from "../../../../hooks/siderbar/useAddActiveClass"
import GridIcon from  "../../../icons/GridIcon";
import OpenFolderIcon from  "../../../icons/OpenFolderIcon";
import FolderIcon from  "../../../icons/FolderIcon";
import PlusIcon from  "../../../icons/PlusIcon";

export default function Pages (){
    useAddActiveClass();
    
    return(
        <div className={style.project_block}>
            <span className={style.title_sidebar}>
                Paginas
            </span>
            <div className={style.container_itens}>
                <div>
                    <a href="/cms" id="link_all_cms" className={style.sidebar_link}>
                        <GridIcon className={style.sidebar_icons}/>
                        <span className={style.sidebar_text}>All</span>
                    </a>
                </div>
                <div>
                    <a href="/cms/folders" id="link_cms_folders" className={style.sidebar_link}>
                        <OpenFolderIcon className={style.sidebar_icons}/>
                        <span className={style.sidebar_text}>Folders</span>
                    </a>
                </div>
                <div>
                    <a href="/cms/arquivadas" id="link_cms_archived" className={style.sidebar_link}>
                        <FolderIcon className={style.sidebar_icons}/>
                        <span className={style.sidebar_text}>Arquivadas</span>
                    </a>
                </div>
                <div>
                    <a href="#" className={style.sidebar_link}>
                        <PlusIcon className={style.sidebar_icons}/>
                        <span className={style.sidebar_text}>New Folder</span>
                    </a>
                </div>
            </div>
        </div>
    );
}