import React, { ReactNode, useContext, useEffect, useState } from "react"
import { GitHubUser, NotFound } from "types"

interface Props {
	children: React.ReactNode
}

type UserContext = {
	isError: boolean
	isLoading: boolean
	error: string
	user: GitHubUser
	updateUser: (username: string, onError?: () => void) => Promise<void>
}

const isUser = (obj: GitHubUser | NotFound): obj is GitHubUser => {
	return (obj as GitHubUser).id !== undefined
}

const NULL_USER: GitHubUser = {
	login: "-",
	location: "-",
	id: 0,
	avatar_url: "-",
	name: "-",
	company: null,
	blog: "-",
	bio: "-",
	twitter_username: null,
	public_repos: 0,
	followers: 0,
	following: 0,
	created_at: "-",
	updated_at: "-",
}

const getUser = (username: string): Promise<GitHubUser | NotFound> => {
	return new Promise((resolve, reject) => {
		fetch(`https://api.github.com/users/${username}`)
			.then(res => res.json())
			.then(data => {
				resolve(data as GitHubUser | NotFound)
			})
            .catch(err => {
                reject(err)
            })
	})
}

const NULL_CONTEXT: UserContext = {
	isError: false,
	isLoading: false,
	error: "",
	user: NULL_USER,
	updateUser: (useranme: string) => Promise.resolve(),
}

const UserContext = React.createContext<UserContext>(NULL_CONTEXT)

const UserProvider: React.FC<Props> = ({ children }) => {
	const [user, setUser] = useState<GitHubUser>(NULL_USER)
	const [isError, setIsError] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string>("")

	const getInitialUser = () =>
		localStorage.user && setUser(JSON.parse(localStorage.user))

	const updateUser = async (username: string, onError?: () => void): Promise<void> => {
        setIsLoading(true)
		setIsError(false)
        setError("")
		try {
			const data = await getUser(username)
			if (isUser(data)) {
				setUser(data)
                localStorage.user = JSON.stringify(data)
			} else {
                if (onError) {
                    onError()
                }
				setIsError(true)
				setError("User not found")
			}
		} catch (err) {
            setIsError(true)
            setError("User not found")
            if (onError) {
                onError()
            }
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		getInitialUser()
	}, [])

	const context: UserContext = {
		isError,
		isLoading,
		error,
		user,
		updateUser,
	}

	return (
		<UserContext.Provider value={context}>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = () => useContext(UserContext)

export default UserProvider
