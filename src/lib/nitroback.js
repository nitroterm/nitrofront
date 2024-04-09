import secureLocalStorage from "react-secure-storage";

export const baseUrl = "https://services.cacahuete.dev/api/nitroterm/v1"

export function nbLoggedIn() {
    return secureLocalStorage.getItem('token') !== null
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
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + secureLocalStorage.getItem('token'),
        },
    })
}

export function nbGetUser() {
    return nbAuthorized(`${baseUrl}/user`)
}

export function nbGetFeed() {
    return nbAuthorized(`${baseUrl}/feed`)
}