import React, { FC, useEffect, useState } from "react"
import styles from "./ThemeSwitcher.module.css"
import { ReactComponent as IconMoon} from 'assets/icon-moon.svg'
import { ReactComponent as IconSun} from 'assets/icon-sun.svg'

const THEME_TEXT = {
    DARK: 'DARK',
    LIGHT: 'LIGHT'
}

const ThemeSwitcher: FC = () => {

    const [isDark, setIsDark] = useState<boolean | null>(null)

    const getInitialTheme = () => {
        if (isDark !== null) return
        const isLocalStorageThemeDark = localStorage.theme === 'dark'
        const isDocumentThemeDark = document.documentElement.getAttribute('data-theme') === 'dark'
        const isPreferenceDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

        const isThemeDark = isLocalStorageThemeDark || isDocumentThemeDark || (isPreferenceDark && !localStorage.theme)

        setIsDark(isThemeDark)
    }
    
    const changeDocumentTheme = (isDark: boolean) => {
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark')
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            document.documentElement.setAttribute('data-theme', 'light')
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        }
    }
    
    const toggleSwitch = () => {
        setIsDark(!isDark)
    }

    useEffect(() => {
        getInitialTheme()
    })

    useEffect(() => {
        if (isDark !== null)
            changeDocumentTheme(isDark)
    },[isDark])

	return (
        <div className={styles.ThemeSwitcher} onClick={toggleSwitch}>
            <span className={styles.text}>{isDark ? THEME_TEXT.LIGHT : THEME_TEXT.DARK}</span>
            {isDark ? <IconSun/> : <IconMoon/>}
        </div>
    )
}

export default ThemeSwitcher
