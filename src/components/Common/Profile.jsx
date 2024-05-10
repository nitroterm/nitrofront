import React, {useEffect, useState} from "react";
import {nbGetFeed, nbGetProfilePictureUrl, nbGetUser, nbLogout} from "../../lib/nitroback";
import secureLocalStorage from "react-secure-storage";
import ButtonSecondary from "../Buttons/ButtonSecondary";

export function Profile() {
    const [profile, setProfile] = useState(undefined);

    useEffect(() => {
        if (profile !== undefined) return;

        nbGetUser()
            .then(data => data.json())
            .then(data => {
                if (!data.success) return;

                setProfile(data.data)
            })
    }, []);

    console.log(profile);

    return profile === undefined ? <></> : (
        <div className="flex flex-col justify-center w-full gap-2">
            <div className="flex flex-row gap-2">
                <div className='flex items-center border-4 rounded-full border-[#411A83] h-12 w-12 overflow-hidden'>
                    <img alt="A beautiful landscape" className="w-full h-full object-cover"
                         src={nbGetProfilePictureUrl(profile)}/>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-white font-semibold">{profile.displayName}</p>
                    <p className="text-white opacity-50">@{profile.username}</p>
                </div>
            </div>
            <div>
                <ButtonSecondary text="Logout" arrow={false} onClick={handleLogout}></ButtonSecondary>
            </div>
        </div>
    )
}

function handleLogout() {
    nbLogout()
        .then(() => {
            window.location = '/';
            secureLocalStorage.removeItem('token')
        })
}