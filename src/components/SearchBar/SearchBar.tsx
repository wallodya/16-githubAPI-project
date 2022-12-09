import React, { FC, useRef, useState } from "react"
import styles from "./SearchBar.module.css"
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg'
import Button from "components/Button/Button"
import { useUser } from "providers/UserProvider"

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => {
    const input = useRef<HTMLInputElement | null>(null)
    const [isErrorShown, setIsErrorShown] = useState<boolean>(false)

    const { error, isError, updateUser } = useUser()

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (!input.current) return
        updateUser(input.current.value, () => setIsErrorShown(true))
        input.current.value = ""
    }

	return (
        <form className={styles.SearchBar} onSubmit={handleSubmit}>
            <label htmlFor="input">
                <SearchIcon/>
            </label>
            <input
                id="input"
                ref={input}
                type="text"
                autoComplete="off"
                placeholder="Search GitHub username"
                className={styles.input}
                onChange={() => setIsErrorShown(false)}
            />
            {
                isError && isErrorShown && <div className={styles.error}>{error}</div>
            }
            <Button text={"Search"} onClick={handleSubmit}/>
        </form>  
    )
}

export default SearchBar
