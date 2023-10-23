import { useState } from 'react'
import { useEffect } from 'react';

const useThemeMode = () => {

    const [themeMode, setThemeMode] = useState('light');

    const changeThemeMode = () => {
        const html = document.documentElement;

        if (themeMode === 'light') {
            html.classList.remove('light');
            html.classList.add('dark')
            setThemeMode('dark')

            localStorage.setItem('themeMode', 'dark')

        } else {
            html.classList.remove('dark');
            html.classList.add('light')
            setThemeMode('light')

            localStorage.setItem('themeMode', 'light')

        }
    }

    useEffect(() => {
        const currentThemeMode = localStorage.getItem('themeMode') || 'light';
        document.documentElement.classList.add(currentThemeMode)
        setThemeMode(currentThemeMode);
    }, [])

    return { changeThemeMode , themeMode};

}

export { useThemeMode }