export const BASE_URL = 'https://api.elena.diplom.nomoredomains.icu';

export const register = (email, password, name) => {
    return fetch (`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email, password, name})
    })
    .then ((response) => {
            if (response.status === 201) {
                return response.json ();
            }
            return Promise.reject(response.status);
    })
    .then ((res) => {
        return res;
    })
}

export const authorize = (email, password) => {
    return fetch (`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then ((response) => {
        if (response.status === 200) {
            return response.json ();
        }
    })
    .then ((data) => {
        localStorage.setItem ('token', data.token);
        return data;
    })
}
