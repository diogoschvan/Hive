import { useEffect } from 'react';

export default function useAddActiveClass() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const keys = {
                'cms': 'link_all_cms',
                'arquivadas': 'link_cms_archived',
            };

            const path = window.location.pathname;
            const pathParts = path.split('/');
            const lastPart = pathParts.pop();

            if (lastPart in keys) {
                const element = document.getElementById(keys[lastPart]);
                if (element) {
                    element.classList.add('active');
                }
            }
        }
    }, []); // Depend on an empty array to run only once after the first render
}