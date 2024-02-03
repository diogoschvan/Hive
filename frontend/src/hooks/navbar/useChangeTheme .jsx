import { useEffect } from 'react';
export default function useChangeTheme (isWhiteTheme){
    useEffect(() => {
        if (isWhiteTheme) {
            document.documentElement.style.setProperty('--default-theme-body-background', 'var(--white-theme-body-background)');
            document.documentElement.style.setProperty('--default-theme-background', 'var(--white-theme-background)');
            document.documentElement.style.setProperty('--default-title-sidebar-theme-text', 'var(--white-title-sidebar-theme-text)');
          } else {
            document.documentElement.style.setProperty('--default-theme-body-background', '#252525');
            document.documentElement.style.setProperty('--default-theme-background', '#111111');
            document.documentElement.style.setProperty('--default-title-sidebar-theme-text', '#FFF');
          }
    }, [isWhiteTheme]);
}