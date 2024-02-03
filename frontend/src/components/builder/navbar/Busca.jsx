import style from "../../../styles/builder/Navbar.module.css";
import React, {useState} from 'react';
import SearchIcon from  "../../icons/SearchIcon";

export default function Busca() {
    const [IsSearchActive, setIsSearchActive] = useState(false);
    const [isSearchFill, setSearchValue] = useState('');

    function handleFocus (){
        setIsSearchActive(true);
    }

     function handleChange (event){
            setSearchValue(event.target.value);
    }

     function handleBlur (){
        if(isSearchFill === ''){
            setIsSearchActive(false);
        }
    }
        

    return(
        <div className={style.search_container} >
            <SearchIcon className={`${style.search_icon} ${IsSearchActive ? style.active : ''}`}/>
            <input id="search_input" className={`${style.search_input} ${IsSearchActive ? style.active : ''}`} type="text" placeholder="Search"  
                onFocus={handleFocus}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </div>
    );
}