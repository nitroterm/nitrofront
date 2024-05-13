import React, {useEffect, useState} from "react";
import {
    connectedUser,
    nbGetFeed,
    nbGetProfilePictureUrl,
    nbGetUser,
    nbLogout,
    nbSetConnectedUser
} from "../../lib/nitroback";
import secureLocalStorage from "react-secure-storage";
import ButtonSecondary from "../Buttons/ButtonSecondary";
import {useNavigate} from "react-router-dom";

export function Profile() {
    const [profile, setProfile] = useState(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        if (profile !== undefined) return;

        nbGetUser()
            .then(data => data.json())
            .then(data => {
                if (!data.success) return;

                nbSetConnectedUser(data.data);
                setProfile(data.data)
            })
    }, []);

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
                <ButtonSecondary text="Logout" arrow={false} onClick={() => handleLogout(navigate)}></ButtonSecondary>
            </div>
        </div>
    )
}

function handleLogout(navigate) {
    nbLogout()
        .then(() => {
            secureLocalStorage.removeItem('token')
            navigate('/')
        })
}