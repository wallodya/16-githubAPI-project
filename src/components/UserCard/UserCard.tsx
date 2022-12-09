import { useUser } from "providers/UserProvider"
import React, { FC } from "react"
import styles from "./UserCard.module.css"
import { ReactComponent as IconLocation } from "assets/icon-location.svg"
import { ReactComponent as IconTwitter } from "assets/icon-twitter.svg"
import { ReactComponent as IconWensite } from "assets/icon-website.svg"
import { ReactComponent as IconCompany } from "assets/icon-company.svg"

interface UserCardProps {}

const UserCard: FC<UserCardProps> = () => {
    const { user } = useUser()
	return (
        <div className={styles.UserCard}>
            <div className="lg:col-start-1">
                <img src={user.avatar_url}/>
            </div>
            <div className="lg:col-start-2 lg:col-span-3 flex flex-col gap-4">
                <div className="w-full flex justify-between px-5">
                    <span className="text-2xl font-bold">{user.login}</span>
                    <span className="text-2xl font-bold text-slate-400">{new Date(user.created_at).toLocaleDateString()}</span>
                </div>
                <div className="px-5">
                    {user.id}
                </div>
                <div className="px-5">
                    {user.bio || "No bio is provided"}
                </div>
                <div className="flex justify-between rounded-2xl px-10 py-6 my-5 bg-slate-600 dark:bg-slate-800 text-slate-100">
                    <div className="flex flex-col gap-4">
                        <span className="text-lg font-bold">Repos</span>
                        <span className="text-2xl font-bold">{user.public_repos}</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-lg font-bold">Followers</span>
                        <span className="text-2xl font-bold">{user.followers}</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-lg font-bold">Following</span>
                        <span className="text-2xl font-bold">{user.following}</span>
                    </div>
                </div>
                <div className="grid grid-cols-[32px_1fr_32px_1fr] gap-y-4 grid-rows-2 align-center px-5">

                        <IconLocation />
                        <span>{user.location || "Not avaialble"}</span>


                        <IconTwitter />
                        <span>{user.twitter_username || "Not avaialble"}</span>


                        <IconCompany />
                        <span>{user.company || "Not avaialble"}</span>


                        <IconWensite />
                        <span>{user.html_url || "Not avaialble"}</span>

                </div>
            </div>
        </div>
    )
}

export default UserCard
