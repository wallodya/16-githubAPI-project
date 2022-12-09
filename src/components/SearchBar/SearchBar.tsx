import React, { FC, useRef, useState } from "react"
import styles from "./SearchBar.module.css"
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg'
import Button from "components/Button/Button"

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => {

    const input = useRef<HTMLInputElement | null>(null)
    const [inputValue, setInputValue] = useState<string>('')

    const handleInput = () => {
        if (!input.current) return
        setInputValue(input.current.value)
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        console.log('inputValue', inputValue)
        setInputValue('')
    }

	return (
        <form className={styles.SearchBar} onSubmit={handleSubmit}>
            <SearchIcon/>
            <input
                ref={input}
                value={inputValue}
                type="text"
                placeholder="Search GitHub username"
                className={styles.input}
                onChange={handleInput}
            />
            <Button text={"Search"} onClick={handleSubmit}/>
        </form>  
    )
}

export default SearchBar
