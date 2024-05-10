import secureLocalStorage from "react-secure-storage";

export const domain = "https://services.cacahuete.dev"
export const baseUrl = `${domain}/api/nitroterm/v1`

export let connectedUser = undefined;

export function nbSetConnectedUser(user) {
    connectedUser = user;
}

export function nbLoggedIn() {
    return secureLocalStorage.getItem('token') !== null
}

export function nbGetProfilePictureUrl(user) {
    let url = user.profilePicture.toString();
    if (url.startsWith('/')) url = url.substring(url.indexOf('/') + 1);

    return `${domain}/${url}`
}

export function nbLogin(username, password) {
    return fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: document.getElementById('input_username').value,
            password: document.getElementById('input_password').value
        }),
    })
}

export function nbLogout() {
    return nbAuthorized(`${baseUrl}/auth/logout`)
}

export function nbRegister(username, password, challenge) {
    return fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: document.getElementById('input_username').value,
            password: document.getElementById('input_password').value,
            reCaptchaChallenge: challenge
        }),
    })
}

export function nbAuthorized(url) {
    return secureLocalStorage.getItem('token') !== null ? fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + secureLocalStorage.getItem('token'),
            },
        })
        : fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
}

export function nbGetUser() {
    return nbAuthorized(`${baseUrl}/user`)
}

export function nbGetFeed() {
    return nbAuthorized(`${baseUrl}/feed`)
}

export function nbGetPost(id) {
    return nbAuthorized(`${baseUrl}/posts/${id}`)
}

export function nbCreatePost(contents) {
    return fetch(`${baseUrl}/post`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + secureLocalStorage.getItem('token'),
        },
        body: JSON.stringify({
            contents: contents
        })
    });
}