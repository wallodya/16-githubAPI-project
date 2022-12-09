import React, { FC, ReactNode } from "react"
import styles from "./Container.module.css"

interface ContainerProps {
	children: ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => (
    <div className={styles.wrapper + ' dark'}>
        <div className={styles.Container}>
            {children}
        </div>
    </div>
)

export default Container
