import { useUser } from "providers/UserProvider"
import React, { FC } from "react"
import styles from "./UserCard.module.css"
import { ReactComponent as IconLocation } from "assets/icon-location.svg"
import { ReactComponent as IconTwitter } from "assets/icon-twitter.svg"
import { ReactComponent as IconWensite } from "assets/icon-website.svg"
import { ReactComponent as IconCompany } from "assets/icon-company.svg"

const UserCard: FC | (() => void) = () => {

	const { user, isLoaded } = useUser()

    // if (!isLoaded) return

    const dateTimeFormat = new Intl.DateTimeFormat('en-GB', {
        month: "short",
        day: "numeric",
        year: "numeric",
    })
    
	return (
		<div className={isLoaded ? styles.UserCard : `${styles.UserCard} + scale-y-0 my-0`}>
			<div className="lg:col-start-1">
                {   
                    !!user.avatar_url
                    &&
				    <img src={user.avatar_url} />
                }
			</div>
			<div className="lg:col-start-2 lg:col-span-3 flex flex-col gap-5">
				<div className="w-full flex justify-between ">
					<span className="text-2xl font-bold">{user.login}</span>
                    {
                        !!user.created_at
                        &&
                        <span className="text-xl font-bold text-slate-400">
                            {dateTimeFormat.format((new Date(user.created_at)))}
                        </span>
                    }
				</div>
				<div className="atext-lg text-slate-400">{user.name}</div>
				<div className="mt-10 font-mono text-slate-400">{user.bio || "No bio is provided"}</div>
				<div className="grid grid-cols-3 rounded-2xl px-10 py-6 my-5 bg-slate-600 dark:bg-slate-800 text-slate-100">
					<div className="flex flex-col gap-4">
						<span className="text-lg font-bold">Repos</span>
						<span className="text-2xl font-bold">
							{user.public_repos}
						</span>
					</div>
					<div className="flex flex-col gap-4">
						<span className="text-lg font-bold">Followers</span>
						<span className="text-2xl font-bold">
							{user.followers}
						</span>
					</div>
					<div className="flex flex-col gap-4">
						<span className="text-lg font-bold">Following</span>
						<span className="text-2xl font-bold">
							{user.following}
						</span>
					</div>
				</div>
				<div className="flex flex-col sm:grid sm:grid-cols-2 gap-y-4 grid-rows-2 align-center">
					<a 
                        className={user.location ? styles.link : styles.linkDisabled}
                    >
						<IconLocation className="justify-self-center" />
						<span>{user.location || "Not avaialble"}</span>
					</a>
					<a 
                        className={user.twitter_username ? (styles.link ): styles.linkDisabled}
                    >
						<IconTwitter className="justify-self-center" />
						<span>{user.twitter_username || "Not avaialble"}</span>
					</a>
					<a 
                        className={user.company ? styles.link : styles.linkDisabled}
                    >
						<IconCompany className="justify-self-center" />
						<span>{user.company || "Not avaialble"}</span>
					</a>
					<a 
                        href={user.html_url || ""}
                        className={user.html_url ? styles.link : styles.linkDisabled}
                    >
						<IconWensite className="justify-self-center" />
						<span>{user.html_url || "Not avaialble"}</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default UserCard
