import sendRequest from "./send-request";
const BASE_URL = '/api/users';

export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function getAllAvailable() {
    return sendRequest(`${BASE_URL}/available`);
}

export async function getOne(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export async function setActiveConvoAPI(user, convo) {
    return sendRequest(`${BASE_URL}/${user._id}/setActiveConvo`, 'PUT', convo);
}

export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}


