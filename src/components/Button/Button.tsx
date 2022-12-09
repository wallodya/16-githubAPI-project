import React, { FC } from "react"
import styles from "./Button.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
	text: string
}

const  Button = ({ text, ...props }: any) => (
    <button className={styles.Button} {...props}>{text}</button>
)
export default Button
