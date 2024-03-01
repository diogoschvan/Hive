import style from "../../../../styles/cms/Navbar.module.css";
import React, {useState} from 'react';
import useChangeTheme from "../../../../hooks/navbar/useChangeTheme "
import MoonIcon from "../../../icons/MoonIcon";
import SunIcon from "../../../icons/SunIcon";

export default function ThemeButton() {
    const [isWhiteTheme, setIsWhiteTheme] = useState(false);

    useChangeTheme(isWhiteTheme);

    return(
        <>
            <input id="themeToggle" type="checkbox" className={style.theme_toggle_checkbox} onChange={() => setIsWhiteTheme(prevTheme => !prevTheme)} />
            <label htmlFor="themeToggle" className={style.theme_toggle_label}>
                <MoonIcon className={style.moon_icon} />
                <SunIcon className={style.sun_icon} />
                <div className={style.theme_indicator}></div>
            </label>
        </>
    )
}
