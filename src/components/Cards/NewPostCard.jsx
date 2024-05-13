import React, {useEffect, useState} from 'react';
import BadgeProduct from '../Badges/BadgeProduct';
import ButtonNitro from '../Buttons/ButtonNitro';
import ButtonDynamite from '../Buttons/ButtonDynamite';
import ButtonFork from '../Buttons/ButtonFork';
import ButtonLike from '../Buttons/ButtonLike';
import Timestamp from "react-timestamp";
import {connectedUser, nbCreatePost, nbGetProfilePictureUrl, nbGetUser, nbSetConnectedUser} from "../../lib/nitroback";
import ButtonArrow from "../Buttons/ButtonArrow";
import secureLocalStorage from "react-secure-storage";
import {useNavigate} from "react-router-dom";

function NewPostCard({}) {
    const [profile, setProfile] = useState(connectedUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (profile !== undefined) return;

        nbGetUser()
            .then(data => data.json())
            .then(data => {
                if (!data.success) {
                    return;
                }

                nbSetConnectedUser(data.data);
                setProfile(data.data);
            })
    }, []);

    if (connectedUser === undefined) {
        return <></>
    }

    return (
        <div className='border-2 border-[#411A83] rounded-[23px] w-[500px] p-3 my-4'>
            <div className='flex items-center'>
                <div className="flex flex-row gap-2">
                    <div className='flex items-center border-4 rounded-full border-[#411A83] h-12 w-12 overflow-hidden'>
                        <img alt="A beautiful landscape" className="w-full h-full object-cover"
                             src={nbGetProfilePictureUrl(profile)}/>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-white font-semibold">{profile.displayName ?? profile.username}</p>
                        <p className="text-white opacity-50">@{profile.username}</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-row gap-2 mt-4">
                <textarea id="post-input"
                          placeholder="Write something..."
                          className="text-white px-3 py-2 flex-1 object-cover border-2 bg-[#0D0023] border-[#411A83] rounded-md">

                </textarea>
                <ButtonArrow onClick={() => handlePostSend(navigate)}></ButtonArrow>
            </div>
        </div>
    );
}

function handlePostSend(navigate) {
    let input = document.getElementById("post-input");
    if (input.value.toString().length === 0) return;

    nbCreatePost(input.value)
        .then((response) => response.json())
        .then((data) => {
            if (!data.success) {
                alert(data.message);
                return;
            }

            navigate(`/#/post?id=${data.data.id}`)
        })
        .catch((error) => {
            alert(error.message);
        });
}

export default NewPostCard;
